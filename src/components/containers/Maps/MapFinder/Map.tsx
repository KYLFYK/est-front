import React, {useState, useRef} from "react";
import MapGL, {Marker} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import useSupercluster from "use-supercluster";
import { MapControls } from "../MapControls/Buttons/index";
import { IconsCreator } from "../../../../lib/mapIcons/IconsCreator";
import { MappingCluster } from "../../../../lib/mapping/mapCluster";
import BaseButton from "../../../shared/BaseButton/BaseButtons";
import { CrossIcon } from "../../../../icons/MapControlsIcons/PlaceIcons/CrossIcon";
import ObjectCard from "../../Card/index";
import s from './styles.module.scss';

interface Props {
  mapData: any
  location: 'finder' | 'start' | 'infrastructure' | 'payback'
  modal: boolean
  setModal: any
  viewport: any
  setViewport: any
}

const Map: React.FC<Props> = ({mapData, location, modal, setModal, viewport, setViewport}) => {

  const center = {
    lat: 45.16,
    lng: 36.90
  }

  const [activeMarker, setActivemarker] = useState(0)
  const [choosedPlaces, setChoosedplaces] = useState([])
  const [open, setOpen] = useState(false)
  
  const onsetModal = () => {
    setModal(!modal)
  }
  const mapRef: any = useRef(null);

  let bounds;
  if (mapRef.current) {
    bounds = mapRef.current.getMap().getBounds().toArray().flat()
  }
  const points = MappingCluster(mapData);
  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom: viewport.zoom,
    options: { radius: 75, maxZoom: 20 }
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
          onClick={() => {
            setActivemarker(0)
            setChoosedplaces([])
            setOpen(false)
          }}
          ref={mapRef}
        >
          {clusters.map(cluster => {
            const [longitude, latitude] = cluster.geometry.coordinates;
            const {
              cluster: isCluster,
              point_count: pointCount
            } = cluster.properties;

            if (isCluster) {
              return (
                <Marker
                  key={`cluster-${cluster.id}`}
                  latitude={latitude}
                  longitude={longitude}
                >
                  <div style={{transform: 'translate(-50%, -50%)'}}>
                  <BaseButton className={s.button} onClick={() => {
                    setActivemarker(cluster.id)
                    setChoosedplaces(supercluster.getLeaves(cluster.id, Infinity))
                    setOpen(true)
                  }}>
                    <IconsCreator 
                      locationProject={'finder'}
                      color={cluster.id === activeMarker ? '#C5A28E' : '#1A4862'}
                      title={Math.min(...supercluster.getLeaves(cluster.id, Infinity).map((sc: any) => sc.properties.prop.price))}
                      clusterPoints={pointCount}
                    />
                  </BaseButton>
                  </div>
                </Marker>
              );
            }

            return (
              <Marker
                key={cluster.properties.prop.id}
                latitude={latitude}
                longitude={longitude}
              >
                <div style={{transform: 'translate(-50%, -50%)'}}>
                <BaseButton className={s.button} onClick={() => {
                  setActivemarker(cluster.properties.prop.id)
                  setChoosedplaces(cluster)
                  setOpen(true)
                }}>
                  <IconsCreator 
                    locationProject={'finder'}
                    color={cluster.properties.prop.id === activeMarker ? '#C5A28E' : '#1A4862'}
                    title={cluster.properties.prop.price}
                  />
                </BaseButton>
                </div>
              </Marker>
            );
          })}
        </MapGL>
        <div className={s.dynamicBar}>
                        <div className={open && s.localbarActive || s.localbar}>
                          <div className={s.checkboxTitle}> 
                            <div> {choosedPlaces.length} объектов </div>
                            <BaseButton className={s.button} onClick={() => { setOpen(!open) }}>
                                <CrossIcon />
                            </BaseButton>
                          </div>
                          {choosedPlaces.length && choosedPlaces.map((cp: any, i: number) => <div key={i} style={{padding:'5px'}}><ObjectCard key={i} houseData={cp.properties.prop}/></div>)}
                        </div>
                        
        </div>
        <MapControls location={location} viewport={viewport} setViewport={setViewport} center={center} setModal={onsetModal}/>
    </div>
  );
};

export default Map;

