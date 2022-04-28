import React, {useState} from "react";
import Map from './Map';
import s from './styles.module.scss';

interface Props {
  mapData: any
  location: 'finder' | 'start' | 'infrastructure' | 'payback'
  center: any
  view?: {
    filter: boolean,
    map: boolean,
    grid: boolean,
  }
}

const MapModal: React.FC<Props> = ({mapData, location, center, view}) => {

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.lat,
    longitude: center.lng,
    zoom: 6,
  });

  return (
    <div style={{width: view?.map ? '100%' : '0%', transition: 'all .5s'}}>
      <Map mapData={mapData} location={location} viewport={viewport} setViewport={setViewport} view={view} />
      {/*<Modal active={modal} setActive={setModal} >
        <Map mapData={mapData} location={location} modal={modal} setModal={setModal} viewport={viewport} setViewport={setViewport} main={false}/>
      </Modal>*/}
    </div>
  );
};

export default MapModal;

