import React, { useState, useEffect } from 'react'
import { BiLocationPlus } from "react-icons/bi"
import L from 'leaflet';
import { TileLayer, LayersControl, Marker, Popup, MapContainer } from "react-leaflet";
import { useMap, useMapEvent, useMapEvents } from "react-leaflet/hooks";
import 'leaflet/dist/leaflet.css';
import { t } from 'i18next';

export default function AddLocation({ locationAddress, SetAllContentInfo, AllContentInfo }) {
    const [ShowLocationContainer, SetShowLocationContainer] = useState(false)
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('../../../../assets/images/Leaflet/marker-icon-2x.png.png'),
        iconUrl: require('../../../../assets/images/Leaflet/marker-icon.png.png'),
        shadowUrl: require('../../../../assets/images/Leaflet/marker-shadow.png.png')
    });

    const handleShowcontainer = () => {
        SetShowLocationContainer(true)
    }

    const handleSubmitselectedMap = () => {
        SetAllContentInfo({ ...AllContentInfo, locationAddress: JSON.stringify(GetPosition) });
        SetShowLocationContainer(false)
    }

    const [GetPosition, SetPosition] = useState({
        lat: '',
        lng: '',
    });

    useEffect(() => {
        if (locationAddress) {
            let Parsed = JSON.parse(locationAddress)
            SetPosition({ ...Parsed })
        }
    }, [locationAddress])

    const AcceptBtn = () => {
        if (locationAddress) {
            let Parsed = JSON.parse(locationAddress)
            if (Parsed.lat !== GetPosition.lat) {
                return <button onClick={handleSubmitselectedMap} className='px-5 py-2 bg-green-500 mx-2 rounded-lg'>{t("AcceptLocation")}</button>
            } else {
                return (
                    <>
                        <p>{t("PleasSelectLocation")}</p>
                        <button onClick={handleSubmitselectedMap} className='w-max mt-3 px-5 py-2 bg-red-500 mx-2 rounded-lg'>{t("CancelLocation")}</button>
                    </>
                )
            }
        }
    }

    function LocationMarker() {
        const map = useMapEvents({
            click(e) {
                SetPosition(e.latlng);
                // console.log(GetPosition);
                map.flyTo(e.latlng, map.getZoom());
            },
        });

        return GetPosition === null ? null : (
            <Marker position={GetPosition}>
                <Popup>
                    <span style={{ fontFamily: "irancell-regulare", color: "red" }}>
                        {t("YourLocationOnMap")}
                    </span>
                </Popup>
            </Marker>
        );
    }

    return (
        <>
            <button onClick={handleShowcontainer} className='h-10 p-3 bg-black rounded-xl flex items-center '><BiLocationPlus className='text-2xl' /></button>
            {
                ShowLocationContainer ?
                    (
                        <div className=' transition ease-in-out delay-150 z-50 w-full justify-center items-center flex h-[100vh] fixed top-0 left-0 bg-black/30 backdrop-blur-lg'>
                            <div className='bg-LightYellow dark:bg-DarkPurple w-[95%] lg:w-[60%] rounded-lg p-3'>
                                {
                                    GetPosition?.lat || GetPosition?.lng ?
                                        <div>
                                            <MapContainer
                                                className="DashboardMap"
                                                center={[GetPosition?.lat, GetPosition?.lng]}
                                                zoom={7}
                                                scrollWheelZoom={true}
                                            >
                                                <TileLayer
                                                    attribution='&copy;'
                                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                />
                                                {/* <Marker position={[GetPosition?.lat, GetPosition?.lng]} /> */}
                                                <LocationMarker />
                                            </MapContainer>
                                            <div className='w-full justify-center items-center flex-col flex mt-4 mb-1'>
                                                <AcceptBtn />
                                            </div>
                                        </div>
                                        :
                                        null
                                }
                            </div>
                        </div>
                    )
                    :
                    null
            }
        </>
    )
}