import React from "react";
import bookIcon from "../img/icon-green-dot.png";
import misinfoIcon from "../img/icon-red-tri.png";
import Legend from "./Legend";


class MapComponent extends React.Component {
  componentDidMount() {
    const { markers } = this.props;
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.0902, lng: -95.7129 }, // Centered on the US
      zoom: 4, // Zoomed in to show the contiguous US
    });

    markers.forEach((marker) => {
      const { lat, lon, Title } = marker.properties;
      const position = new window.google.maps.LatLng(lat, lon);

      let markerUrl = "";
      let infoType = "";

      if (marker.properties.Misinfo_Or_Books === "books") {
        markerUrl = bookIcon;
        infoType = `Book name`;
      } else {
        markerUrl = misinfoIcon;
        infoType = `Misinformation narrative`;
      }

      const markerImage = {
        url: markerUrl,
        scaledSize: new window.google.maps.Size(40, 40),
      };

      const newMarker = new window.google.maps.Marker({
        position: position,
        map: map,
        icon: markerImage,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `<h4>${infoType}</h4> <p>${Title}</p>`,
      });

      newMarker.addListener("mouseover", () => {
        infoWindow.open(map, newMarker);
      });

      newMarker.addListener("mouseout", () => {
        infoWindow.close();
      });
    });
  }

  render() {
    return (
    <div>
      <div id="map" style={{ height: "1000px" }}></div>
      <Legend />
    </div>)
    
  }
}

export default MapComponent;
