import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import {
    PushpinOutlined,
  } from '@ant-design/icons';
import { Button, Card } from 'antd/lib';
import FreshPanel1 from './freshPanel1';
import FreshPanel2 from './freshPanel2';

const mapContainerStyle = {
  width: '80vw',
  height: '100vh',
};
const center = {
  lat: 1.297767878289408, // default latitude
  lng: 103.77075560816641, // default longitude
};

const freshs = [
    { name: 'Fresh Orchard', location: { lat: 1.3054598539161895, lng: 103.83244660571495 } },
    { name: 'Fresh Jurong', location: { lat: 1.3355973764960487, lng: 103.74338109301863 } },
    { name: 'Fresh Sephora @Vivocity', location: { lat: 1.2680827262613248, lng: 103.8202605758567 } },
  ];

const GoogleMapAssist = () => {
    const [map, setMap] = useState(null);
    const [directions, setDirections] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    const [selectedLoc, setSelectedLoc] = useState(null);
    const [loadings, setLoadings] = useState<boolean[]>([]);
    const [selectedStore1, setSelectedStore1] = useState(false);
    const [selectedStore2, setSelectedStore2] = useState(false);
  
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: '%API_KEY%'
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  const onMapLoad = (mapInstance: any) => {
    setMap(mapInstance);
  };

  const calculateDirections = (origin: any, destination: any) => {
    const directionsService = new window.google.maps.DirectionsService();

    const directionsRequest = {
      origin,
      destination,
      travelMode: 'DRIVING',
    };
  };

  const clickEvent = (index: number) => {
    if (index === 1){
      setSelectedStore1(true);
    } else if (index === 2 ) {
      setSelectedStore2(true);
    }
  }

  const handleLocChange = (event: any) => {
    const selectedLocName = event.target.value;
    const fresh = freshs.find(h => h.name === selectedLocName);
    // setSelectedLoc(fresh);
  };

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <>
    <div>
        <div>
            <label htmlFor="locSelect">Fresh Store: </label>
            <select id="locSelect" onChange={handleLocChange}>
            <option value="">SELECT A Store </option>
            {freshs.map(fresh => (
                <option key={fresh.name} value={fresh.name}>
                {fresh.name}
                </option>
            ))}

            </select>
            <b>   </b>
            <Button type="primary" style={{marginLeft: "10px"}} loading={loadings[0]} onClick={() => enterLoading(0)}>
            View
            </Button>
        </div>
        <br />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
      >
        <Marker 
            position={center}
            title = "Your Location"
        />
        {freshs.map((fresh, index) => (
            <>
                <Marker
                key={index}
                position={fresh.location}
                title={fresh.name}
                onClick={()=>index==1?setSelectedStore1(true):setSelectedStore2(true)}
                label={{
                    text: fresh.name,
                    color: '#000000',
                }}
                />
            </>
          ))}
      </GoogleMap>
      <div>
        {selectedStore1? <Card style={{position: "fixed", top:0, zIndex: 100}}><FreshPanel1 /></Card>:""}
        {selectedStore2? <Card style={{position: "fixed", top:0, zIndex: 100}}><FreshPanel2 /></Card>:""}
      </div>
    </div>
    </>
  );
};

export default GoogleMapAssist;