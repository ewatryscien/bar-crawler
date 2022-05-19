import barsData from "./data/bars-locations.json";
import { decode } from "@googlemaps/polyline-codec";
import mockResponse from "./data/mock-response.json";

const citymapperApiKey = process.env.CM_API_KEY;

export default async function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    //return res.status(200).json(mockResponse);

    const bars = chooseNRandom(4, barsData);
    //sortowanie zeby pokazywalo bardziej sensowna trase
    bars.sort((a, b) => a.coords.latitude - b.coords.latitude);
    const directions = await getDirectionsBetweenBars(bars);

    return res.status(200).json({
      bars,
      ...directions,
    });
  }
  res.status(405).json({
    message: "Method not allowed",
  });
}

const chooseNRandom = (n, array) => {
  const chosenIndexes = new Set();
  while (chosenIndexes.size < n) {
    const chosenIndex = Math.floor(Math.random() * array.length);
    chosenIndexes.add(chosenIndex);
  }
  return [...chosenIndexes].map((i) => array[i]);
};

async function fetchJson(...args) {
  let response = await fetch(...args);
  if (response.ok) {
    return await response.json();
  }
  console.error("error: ", response);
  return {};
}

const getDirections = (start, end) => {
  return fetchJson(
    "https://api.external.citymapper.com/api/1/directions/walk?" +
      new URLSearchParams({
        start: [start.latitude, start.longitude].join(","),
        end: [end.latitude, end.longitude].join(","),
        language: "pl-PL",
        profiles: "fast",
      }),
    {
      headers: {
        "Citymapper-Partner-Key": citymapperApiKey,
      },
    }
  );
};

async function getDirectionsBetweenBars(bars) {
  const directionsArray = [];
  for (let i = 0; i < bars.length - 1; i++) {
    const start = bars[i].coords;
    const end = bars[i + 1].coords;
    directionsArray.push(getDirections(start, end)); // promises do tablicy
  }
  const directionsResponse = await Promise.all(directionsArray);
  const times = getTime(directionsResponse);
  return { directions: decodePolylinesFromResponse(directionsResponse), times };
}

const decodePolylinesFromResponse = function (array) {
  return array
    .map(({ routes }) => {
      return routes[0].legs[0].path;
    })
    .map((path) => decode(path, 5));
};

const getTime = function (array) {
  return array.map(({ routes }) => {
    return Math.floor(routes[0].duration_seconds / 60);
  });
};
