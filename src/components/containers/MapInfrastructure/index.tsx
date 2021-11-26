import React, {useState} from "react";
import MapGL, {Marker} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapControls } from "../MapControls/Buttons/index";
import { IconsCreator } from "../../../lib/mapIcons/IconsCreator";
import BaseButton from "../../shared/BaseButton/BaseButtons";
import { ArrowIcon } from "../../../icons/MapControlsIcons/PlaceIcons/ArrowIcon";
import { CheckBox } from "../MapControls/Checkbox/CheckBox";
import { Place } from "../MapControls/Place/Place";
import s from './styles.module.scss';

interface Props {
  places: any
  location: 'finder' | 'start' | 'infrastructure' | 'payback'
}

const Map: React.FC<Props> = ({places, location}) => {

  const getUniqueTypesOptions = React.useCallback((categoriesList: string[]) => {
    const uniqueSetTypes = Array.from(new Set(categoriesList));
    const optionsList: any = uniqueSetTypes.map((category) => {
        const placeByCategory = places.find((place: any) => (place.category || place.type[0]) === category)
        const placeType = placeByCategory ? placeByCategory.type[0] : "Unknown"
        return {
            label: category,
            value: placeType
        }
    })
    return optionsList
  }, [places])
  
  const uniqueTypesList: any = React.useMemo(() => getUniqueTypesOptions(places.map((pl: any) => pl.category || pl.type[0])), [places, getUniqueTypesOptions]);
  const [updatePlaces, setUpdatePlaces] = useState(places);
  const [pressed, setPressed] = useState<string[]>(uniqueTypesList.map((item: any) => item.label));

  const handlePressed = (value: string) => {
    const currentIndex = pressed.indexOf(value);
    const newPressed = [...pressed];
    if (currentIndex === -1) {
        newPressed.push(value)
    } else {
        newPressed.splice(currentIndex, 1)
    }
    setPressed(newPressed)
    handleFilters(newPressed)
  }
  const handleFilters = (filters: string[]) => {
      const newFilters = filters;
      showFilteredResults(newFilters)
  }
  const showFilteredResults = (filters: string[]) => {
    let filteredResults = places.filter((pl: any) => filters.includes(pl.category || pl.type[0]))
    setUpdatePlaces(filteredResults);
  }
  const [picSlider, setPicSlider] = useState(0);

  const center = {
    lat: 45.16,
    lng: 36.90
  }

  const [activeMarker, setActivemarker] = useState(0)
  const [open, setOpen] = useState(true)

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
  console.log(updatePlaces)  
  return (
    <div className={s.wrapper}>
        <MapGL
          {...viewport}
          mapboxApiAccessToken={'pk.eyJ1Ijoibmlja29sYXlhcmJ1em92IiwiYSI6ImNrdmdtYWQxYjd0enQybnM3bGR5b2Fnd2YifQ.IEtk0ClJ58f6dgZYa8hKpA'}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          onViewportChange={_onViewportChange}
          onClick={() => {
            setActivemarker(0)
          }}
        >
        {updatePlaces.map((up: any) => {
          return (
            <Marker
                key={up.id}
                latitude={Number(up.address.geo.lat)}
                longitude={Number(up.address.geo.lng)}
            >
                <BaseButton className={s.button} onClick={() => {
                  setActivemarker(up.id)
                  setOpen(true)
                }}>
                  <IconsCreator 
                    locationProject={'payback'}
                    colorBody={up.id === activeMarker ? '#C5A28E' : '#FFFFFF'}
                    colorPath={up.id === activeMarker ? '#FFFFFF' : '#C5A28E'}
                  />
                </BaseButton>
            </Marker>
          )
        })}
        </MapGL>
        <div className={s.dynamicBar}>
                        <div className={open && s.localbarActive || s.localbar}>
                        <CheckBox
                                uniqueTypesList={uniqueTypesList}
                                pressed={pressed}
                                handlePressed={handlePressed}
                        />
                        <Place
                                placeClicked={activeMarker}
                                places={places}
                                setPlaceClicked={setActivemarker}
                                picSlider={picSlider}
                                setPicSlider={setPicSlider}
                        />
                        </div>
                        <button className={open ? s.openButton : s.backButton} onClick={() => { setOpen(!open) }}>
                            <div className={open ? s.openArrow : s.arrow}>
                                <ArrowIcon />
                            </div>
                        </button>
        </div>
        <MapControls location={location} viewport={viewport} setViewport={setViewport} center={center} />
    </div>
  );
};

export default Map;
