import React from 'react';
import "./Map.css";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from './util';

function Map({ countries, center, zoom, casesType }) {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom} countries={countries}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreet</a> contributors'
                />
                {/* Loop through all the countries and draw circles on the screen */}
                {showDataOnMap(countries, casesType)}
            </LeafletMap>
        </div>
    );
}

export default Map;
