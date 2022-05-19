Uruchomienie:
npm install
npm run next-dev

Bar crawl app
Ma za zadanie wyświetlać losowe bary w okolicy i trasę pomiędzy nimi.
Tutaj na razie baza barów wraz z ich lokalizacjami jest brana z pliku (bars-location.json), ale wiadomo, że normalnie miałaby brać je z np. Google Maps Places API. Pokazywałaby najlepszą trasę, czas, wskazówki dojścia i może inne bajery, np. zmiana baru, opisy itp.
Napisana w React z użyciem Next.js., do wyświetlania mapy biblioteka React-Leaflet, a do obliczania trasy użyte Citymapper API (z enterprise.citymapper.com, przed uruchomieniem ustawiam wzięty stamtąd klucz "CM_API_KEY" w data.js).
