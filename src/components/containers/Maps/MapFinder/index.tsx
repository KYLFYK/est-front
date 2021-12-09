import React, {useState} from "react";
import Map from './Map';
import {Modal} from '../../../shared/Modal/Modal';

interface Props {
  mapData: any
  location: 'finder' | 'start' | 'infrastructure' | 'payback'
  center: any
  view: string
  setView: any
}

const MapModal: React.FC<Props> = ({mapData, location, center, view, setView}) => {

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.lat,
    longitude: center.lng,
    zoom: 6,
  });

  return (
    <div style={{width: view==='mapView' ? '100%' : '0%', transition: 'all .5s'}}>
      <Map mapData={mapData} location={location} viewport={viewport} setViewport={setViewport} view={view} setView={setView}/>
      {/*<Modal active={modal} setActive={setModal} >
        <Map mapData={mapData} location={location} modal={modal} setModal={setModal} viewport={viewport} setViewport={setViewport} main={false}/>
      </Modal>*/}
    </div>
  );
};

export default MapModal;

