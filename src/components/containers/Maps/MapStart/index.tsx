import React, {useState} from "react";
import MapGL, {Marker} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Image from 'next/image';
import { MapControls } from "../MapControls/Buttons/index";
import s from './styles.module.scss';
import OfficeIcon from "../../../../icons/MapIcons/OfficeIcon/OfficeIcon.png";

interface Props {
  center: any
  location: 'finder' | 'start' | 'infrastructure' | 'payback'
}

const Map: React.FC<Props> = ({center, location}) => {

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.lat,
    longitude: center.lng,
    zoom: 6,
  });

  const _onViewportChange = (viewport: any) => {
    setViewport({ ...viewport, transitionDuration: 100 });
  }

  return (
    <div className={s.wrapper}>
        <MapGL
          {...viewport}
          mapboxApiAccessToken={'pk.eyJ1Ijoibmlja29sYXlhcmJ1em92IiwiYSI6ImNrdmdtYWQxYjd0enQybnM3bGR5b2Fnd2YifQ.IEtk0ClJ58f6dgZYa8hKpA'}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          onViewportChange={_onViewportChange}
          className={s.border}
        >
          <Marker 
            latitude={center.lat}
            longitude={center.lng}
            className={s.marker}
          > 
            <div style={{transform: 'translate(0%, -50%)'}}>
              <Image loader={() => '../../../../icons/MapIcons/OfficeIcon/OfficeIcon.png'} unoptimized width={'100%'} height={'100%'} src={OfficeIcon} alt={'officeIcon'}/>
            </div>
          </Marker>
        </MapGL>
        <MapControls location={location} viewport={viewport} setViewport={setViewport} center={center} />
    </div>
  );
};

export default Map;
