import { ObjectTypes } from '../../components/containers/Maps/MapControls/Checkbox/models/objects';

// иконки для карты
import HomeMap from '../../icons/MapIcons/HomeIcon/HomeMap.svg';
import SeaFrontMap from '../../icons/MapIcons/SeaFrontIcon/SeaFrontMap.svg';
import CafeMap from '../../icons/MapIcons/CafeIcon/CafeMap.svg';
import ParkMap from '../../icons/MapIcons/ParkIcon/ParkMap.svg';
import MemorialMap from '../../icons/MapIcons/MemorialIcon/MemorialMap.svg';
import MedicalMap from '../../icons/MapIcons/MedicalIcon/MedicalMap.svg';
import SPAMap from '../../icons/MapIcons/SPAIcon/SPAMap.svg';
import DolphinMap from '../../icons/MapIcons/DolphinIcon/DolphinMap.svg';
import AquaparkMap from '../../icons/MapIcons/AquaparkIcon/AquaparkMap.svg';
import ZooMap from '../../icons/MapIcons/ZooIcon/ZooMap.svg';
import CinemaMap from '../../icons/MapIcons/CinemaIcon/CinemaMap.svg';
import TheaterMap from '../../icons/MapIcons/TheaterIcon/TheaterMap.svg';
import PalaceMap from '../../icons/MapIcons/PalaceIcon/PalaceMap.svg';
import ShowPlaceMap from '../../icons/MapIcons/ShowPlaceIcon/ShowPlaceMap.svg';

// иконки для навбара карты(checkbox)
import HomeCheck from '../../icons/MapIcons/HomeIcon/HomeCheck.svg';
import SeaFrontCheck from '../../icons/MapIcons/SeaFrontIcon/SeaFrontCheck.svg';
import CafeCheck from '../../icons/MapIcons/CafeIcon/CafeCheck.svg';
import ParkCheck from '../../icons/MapIcons/ParkIcon/ParkCheck.svg';
import MemorialCheck from '../../icons/MapIcons/MemorialIcon/MemorialCheck.svg';
import MedicalCheck from '../../icons/MapIcons/MedicalIcon/MedicalCheck.svg';
import SPACheck from '../../icons/MapIcons/SPAIcon/SPACheck.svg';
import DolphinCheck from '../../icons/MapIcons/DolphinIcon/DolphinCheck.svg';
import AquaparkCheck from '../../icons/MapIcons/AquaparkIcon/AquaparkCheck.svg';
import ZooCheck from '../../icons/MapIcons/ZooIcon/ZooCheck.svg';
import CinemaCheck from '../../icons/MapIcons/CinemaIcon/CinemaCheck.svg';
import TheaterCheck from '../../icons/MapIcons/TheaterIcon/TheaterCheck.svg';
import PalaceCheck from '../../icons/MapIcons/PalaceIcon/PalaceCheck.svg';
import ShowPlaceCheck from '../../icons/MapIcons/ShowPlaceIcon/ShowPlaceCheck.svg';

// активные(нажатые) иконки
import HomePressed from '../../icons/MapIcons/HomeIcon/HomePressed.svg';
import SeaFrontPressed from '../../icons/MapIcons/SeaFrontIcon/SeaFrontPressed.svg';
import CafePressed from '../../icons/MapIcons/CafeIcon/CafePressed.svg';
import ParkPressed from '../../icons/MapIcons/ParkIcon/ParkPressed.svg';
import MemorialPressed from '../../icons/MapIcons/MemorialIcon/MemorialPressed.svg';
import MedicalPressed from '../../icons/MapIcons/MedicalIcon/MedicalPressed.svg';
import SPAPressed from '../../icons/MapIcons/SPAIcon/SPAPressed.svg';
import DolphinPressed from '../../icons/MapIcons/DolphinIcon/DolphinPressed.svg';
import AquaparkPressed from '../../icons/MapIcons/AquaparkIcon/AquaparkPressed.svg';
import ZooPressed from '../../icons/MapIcons/ZooIcon/ZooPressed.svg';
import CinemaPressed from '../../icons/MapIcons/CinemaIcon/CinemaPressed.svg';
import TheaterPressed from '../../icons/MapIcons/TheaterIcon/TheaterPressed.svg';
import PalacePressed from '../../icons/MapIcons/PalaceIcon/PalacePressed.svg';
import ShowPlacePressed from '../../icons/MapIcons/ShowPlaceIcon/ShowPlacePressed.svg';

// т.к. используется различная расцветка иконок на карте и в чекбоксе, добавлены параметр callingLocation(где вызывается функция) и дополнительный набор иконок нужного цвета
export const OpenStreetIconsFactory = (type: any, isActive: boolean | undefined, callingLocation: 'checkbox' | 'map', choosedHouseSrc?: string, returnAsIconObject?: boolean): | string => {

    let iconUrl: string = '';
    switch (type) {
        case ObjectTypes.HOUSE:
        case ObjectTypes.RC:
        case ObjectTypes.PLAT:
        case ObjectTypes.APARTMENTS:
            iconUrl = isActive ? HomePressed : callingLocation==='checkbox' ? HomeCheck : HomeMap
            break;
        case ObjectTypes.MUSEUM:
            iconUrl = isActive ? MemorialPressed : callingLocation==='checkbox' ? MemorialCheck : MemorialMap
            break;
        case ObjectTypes.PARK:
            iconUrl = isActive ? ParkPressed : callingLocation==='checkbox' ? ParkCheck : ParkMap
            break;
        case ObjectTypes.BEACH:
            iconUrl = isActive ? SeaFrontPressed : callingLocation==='checkbox' ? SeaFrontCheck : SeaFrontMap
            break;
        case ObjectTypes.MEDICINE:
            iconUrl = isActive ? MedicalPressed : callingLocation==='checkbox' ? MedicalCheck : MedicalMap
            break;
        case ObjectTypes.RESTRAUNT:
            iconUrl = isActive ? CafePressed : callingLocation==='checkbox' ? CafeCheck : CafeMap
            break;
        case ObjectTypes.SPA:
            iconUrl = isActive ? SPAPressed : callingLocation==='checkbox' ? SPACheck : SPAMap
            break;
        case ObjectTypes.DOLPHIN:
            iconUrl = isActive ? DolphinPressed : callingLocation==='checkbox' ? DolphinCheck : DolphinMap
            break;
        case ObjectTypes.AQUAPARK:
            iconUrl = isActive ? AquaparkPressed : callingLocation==='checkbox' ? AquaparkCheck : AquaparkMap
            break;
        case ObjectTypes.ZOO:
            iconUrl = isActive ? ZooPressed : callingLocation==='checkbox' ? ZooCheck : ZooMap
            break;
        case ObjectTypes.CINEMA:
            iconUrl = isActive ? CinemaPressed : callingLocation==='checkbox' ? CinemaCheck : CinemaMap
            break;
        case ObjectTypes.THEATER:
            iconUrl = isActive ? TheaterPressed : callingLocation==='checkbox' ? TheaterCheck : TheaterMap
            break;
        case ObjectTypes.PALACE:
            iconUrl = isActive ? PalacePressed : callingLocation==='checkbox' ? PalaceCheck : PalaceMap
            break;
        case ObjectTypes.CUSTOM_TYPE:
            iconUrl = isActive ? ShowPlacePressed : callingLocation==='checkbox' ? ShowPlaceCheck : ShowPlaceMap
            break;
        default:
            break;
    }

    return iconUrl
}