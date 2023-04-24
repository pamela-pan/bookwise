import React from "react";
import bookIcon from "../img/icon-green-dot.png";
import misinfoIcon from "../img/icon-red-dot.png";
import Legend from "./Legend";
import Banner from "./Banner";


class MapComponent extends React.Component {
  componentDidMount() {
    this.initializeMap();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.markers !== this.props.markers) {
      this.updateMarkers();
    }
  }

  initializeMap = () => {
    const { markers } = this.props;

    this.map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.0902, lng: -95.7129 },
      zoom: 4,
    });

    this.markerObjects = markers.map((marker) => {
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
        map: this.map,
        icon: markerImage,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `<h3>${infoType}</h3> <p>${Title}</p>`,
      });

      newMarker.addListener("mouseover", () => {
        infoWindow.open(this.map, newMarker);
      });

      newMarker.addListener("mouseout", () => {
        infoWindow.close();
      });

      return newMarker;
    });
  };

  updateMarkers = () => {
    const { markers } = this.props;

    // Hide all existing markers
    this.markerObjects.forEach((marker) => {
      marker.setMap(null);
    });

    // Create new markers for updated data
    this.markerObjects = markers.map((marker) => {
      const { lat, lon, Title } = marker.properties;
      const position = new window.google.maps.LatLng(lat, lon);

      let markerUrl = "";
      let infoType = "";

      if (marker.properties.Misinfo_Or_Books === "books") {
        markerUrl = bookIcon;
        infoType = `Book name:`;
      } else {
        markerUrl = misinfoIcon;
        infoType = `Misinformation narrative:`;
      }

      const markerImage = {
        url: markerUrl,
        scaledSize: new window.google.maps.Size(40, 40),
      };

      const newMarker = new window.google.maps.Marker({
        position: position,
        map: this.map,
        icon: markerImage,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `<h3>${infoType}</h3> <p>${Title}</p>`,
      });

      newMarker.addListener("mouseover", () => {
        infoWindow.open(this.map, newMarker);
      });

      newMarker.addListener("mouseout", () => {
        infoWindow.close();
      });

      return newMarker;
    });
  };

  render() {
    return (
      <div>
        <Banner
          title="2020 Election Misinformation & Book Readership Trends"
          buttonText = "Team BookWise"
          buttonLink = "www.google.com"
        />
        <div id="map" style={{ height: "1000px" }}></div>
        <Legend />
      </div>
    );
  }
}

export default MapComponent;