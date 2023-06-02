import React, { useEffect, useState } from 'react'
import L from 'leaflet';
import { TileLayer, Marker, MapContainer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';

export default function Map() {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('../../assets/images/Leaflet/marker-icon-2x.png.png'),
        iconUrl: require('../../assets/images/Leaflet/marker-icon.png.png'),
        shadowUrl: require('../../assets/images/Leaflet/marker-shadow.png.png')
    });
    const getData = useSelector((store) => store.client.clientState.about)
    const [GetPosition, SetPosition] = useState({
        lat: '',
        lng: '',
    });
    // Get From Server Type : {lat: 48.936934954094035, lng: 791.7654298413416}
    useEffect(() => {
        if (getData !== undefined) {
            let Parsed = JSON.parse(getData?.locationAddress)
            SetPosition({ ...GetPosition, ...Parsed })
        }
    }, [getData])

    return (
        <div className='text-center my-5 md:my-16 m-auto w-[98%] md:w-[95%] 2xl:w-[93%] rounded-md border-b-4 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.40)] dark:border-DarkPurple border-LightMaincolor ' >
            {
                GetPosition?.lat || GetPosition?.lng ?
                    <MapContainer
                        className="mymap"
                        center={[GetPosition?.lat, GetPosition?.lng]}
                        zoom={10}
                        scrollWheelZoom={true}
                    >
                        <TileLayer
                            attribution='&copy;'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[GetPosition?.lat, GetPosition?.lng]} />
                    </MapContainer>
                    :
                    null
            }
        </div>
    )
}
