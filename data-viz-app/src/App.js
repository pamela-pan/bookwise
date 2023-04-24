import React, { useEffect, useState } from "react";
import MapComponent from "./components/MapComponent";
import { markers } from "./geodata/all";
import { books_markers } from "./geodata/books";
import { misinfo_markers } from "./geodata/misinfo";

function App() {
  const [selectedMarkers, setSelectedMarkers] = useState(markers);  
  const handleSelect = (e) => {
    const { value } = e.target;
  
    if (value === "all") {
      setSelectedMarkers(markers);
    } else if (value === "books") {
      setSelectedMarkers(books_markers);
    } else if (value === "misinfo") {
      setSelectedMarkers(misinfo_markers);
    }
  
  };
  
  useEffect(() => {
    setSelectedMarkers(markers);
  }, [markers]);  

  return (
    <div className="App">
      <MapComponent markers={selectedMarkers} />
      <div className="dropdown-box">
        <h4>Select a dataset</h4>
      <select onChange={handleSelect}>
        <option value="all">All</option>
        <option value="misinfo">Misinformation</option>
        <option value="books">Books</option>
      </select>
    </div>
    </div>
  );
}

export default App;
