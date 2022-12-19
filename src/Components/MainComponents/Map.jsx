import React, { useState } from 'react'
import L from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

export default function Map() {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('../../assets/images/Leaflet/marker-icon-2x.png.png'),
        iconUrl: require('../../assets/images/Leaflet/marker-icon.png.png'),
        shadowUrl: require('../../assets/images/Leaflet/marker-shadow.png.png')
    });
    const position = [38.08886386125327, 46.25367049639151]
    return (
        <div className='text-center m-auto w-[98%] mt-2 md:w-[95%] 2xl:w-[93%] rounded-md border-b-4 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] dark:border-DarkPurple border-LightMaincolor ' >
            <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                </Marker>
            </MapContainer>
        </div>
    )
}
