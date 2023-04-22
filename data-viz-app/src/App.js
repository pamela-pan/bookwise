// App.js

import React from "react";
import MapComponent from "./components/MapComponent";
import { markers_frac } from "./geodata/data_frac"

function App() {
  return (
    <div className="App">
      <MapComponent markers={markers_frac} />
    </div>
  );
}

export default App;
