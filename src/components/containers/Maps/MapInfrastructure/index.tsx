import React, {useState} from "react";
import MapGL, {Marker} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { IconsCreator } from "../../../../lib/mapIcons/IconsCreator";
import BaseButton from "../../../shared/BaseButton/BaseButtons";
import { ArrowIcon } from "../../../../icons/MapControlsIcons/PlaceIcons/ArrowIcon";
import { CheckBox } from "../MapControls/Checkbox/CheckBox";
import { Place } from "../MapControls/Place/Place";
import HeadLine from "../../../shared/HeadLine/HeadLine";
import Typography from '../../../shared/Typography/Typography';
import {MapControls} from "../MapControls/Buttons";
import s from './styles.module.scss';

interface Props {
  currentHouse: any
  infrastructura: any
  location: 'finder' | 'start' | 'infrastructure' | 'payback'
}

const Map: React.FC<Props> = ({currentHouse, infrastructura, location}) => {
  const places = [currentHouse, ...infrastructura];
  const getUniqueTypesOptions = React.useCallback((categoriesList: string[]) => {
    const uniqueSetTypes = Array.from(new Set(categoriesList));
    const optionsList: any = uniqueSetTypes.map((category) => {
        const placeByCategory = places.find((place: any) => (place.category) === category)
        const placeType = placeByCategory ? placeByCategory.type : "Unknown"
        return {
            label: category,
            value: placeType
        }
    })
    return optionsList
  }, [places])
  
  const uniqueTypesList: any = React.useMemo(() => getUniqueTypesOptions(places.map((pl: any) => pl.category)), [places, getUniqueTypesOptions]);
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
    let filteredResults = places.filter((pl: any) => filters.includes(pl.category))
    setUpdatePlaces(filteredResults);
  }
  const [picSlider, setPicSlider] = useState(0);

  const [activeMarker, setActivemarker] = useState(0)
  const [open, setOpen] = useState(true)

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: currentHouse.lat,
    longitude: currentHouse.lng,
    zoom: 9,
  });

  const _onViewportChange = (viewport: any) => {
    setViewport({ ...viewport, transitionDuration: 100 });
  } 

  return (
    <div className={s.container}>
      <HeadLine title={'Инфраструктура'}>
        <Typography weight="light"> 
          В 15 минутах езды расположена Ялта со своей знаменитой набережной, театр Чехова, авквариум и дельфинарий. Знаменитые дворцы, парки, ботанические сады и винные заводы расположены в получасовой доступности. 
          В Гурзуфе есть свой причал, откуда регулярно отправляются рейсы на Ялту, Никиту, Ласточкино гнездо, Алупку, Партенит и Алушту.
        </Typography>
      </HeadLine>
    <div className={s.mapWrapper}>
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
                key={up.object_id}
                latitude={up.lat ? up.lat : Number(up.address.geo.lat)}
                longitude={up.lng ? up.lng : Number(up.address.geo.lng)}
                className={(up.type === 'house' || up.type === 'apartment' || up.type === 'residential-complex' || up.type === 'plat') ? s.estateMarker : s.infraMarker}
            >
                <BaseButton className={s.button} onClick={() => {
                  setActivemarker(up.object_id)
                  setOpen(true)
                }}>
                  <IconsCreator 
                    locationProject={'infrastucture'}
                    colorBody={up.object_id === activeMarker ? '#0B3248' : '#1A4862'}
                    colorPath={up.object_id === activeMarker ? '#FFFFFF' : '#FFFFFF'}
                    currentHouse={currentHouse}
                    type={up.type}
                    active={up.object_id === activeMarker}
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
        <MapControls location={location} viewport={viewport} setViewport={setViewport} center={{lat: currentHouse.lat, lng: currentHouse.lng}} />
    </div>
    </div>
  );
};

export default Map;
