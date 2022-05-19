import React, { useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import useSWR from "swr";
import InstructionsDisplay from "../components/InstructionsDisplay";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const MapPage = () => {
  const MapDisplay = React.useMemo(
    () =>
      dynamic(
        () => {
          return import("../components/MapDisplay");
        },
        {
          loading: () => <p>A map is loading...</p>,
          ssr: false,
        }
      ),
    []
  );

  const { data, error } = useSWR("/api/data", fetcher);

  const [currentBar, setCurrentBar] = useState(0);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <MapDisplay
        bars={data.bars}
        directions={data.directions}
        currentBar={currentBar}
      />
      <InstructionsDisplay
        bars={data.bars}
        time={data.times}
        handleClickNext={setCurrentBar}
      />
    </div>
  );
};

export default MapPage;
