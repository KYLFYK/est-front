import React, {useState} from "react";
import Map from './Map';
import {Modal} from '../../../shared/Modal/Modal';

interface Props {
  mapData: any
  location: 'finder' | 'start' | 'infrastructure' | 'payback'
  center: any
}

const MapModal: React.FC<Props> = ({mapData, location, center}) => {

  const [activeMarker, setActivemarker] = useState(0)
  const [choosedPlaces, setChoosedplaces] = useState([])
  const [open, setOpen] = useState(false)

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.lat,
    longitude: center.lng,
    zoom: 6,
  });
  
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Map mapData={mapData} location={location} modal={modal} setModal={setModal} viewport={viewport} setViewport={setViewport} />
      {/*<Modal active={modal} setActive={setModal} >
        <Map mapData={mapData} location={location} modal={modal} setModal={setModal} viewport={viewport} setViewport={setViewport} />
      </Modal>*/}
    </div>
  );
};

export default MapModal;

