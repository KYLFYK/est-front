import { IconTypes } from "../../../utils/interfaces/icons";
import { IAdvantage } from "./AdvantageList";

export const mocAdvantages: IAdvantage[] = [
    {
        title: {
            label: 'Ипотека от РКНБ',
            value: IconTypes.MORTGAGE
        },
        text: 'Используйте ипотечный калькулятор  для расчета своей ставки'
    },
    {
        title: {
            label: 'VR и 3D туры',
            value: IconTypes.TOURS
        },
        text: 'Погрузитесь в атмосферу будущей квартиры'
    },
    {
        title: {
            label: 'Анализ инфраструктуры',
            value: IconTypes.INFRASTRUCTURE_ANALYSIS
        },
        text: 'Оцените главные преимущества выбранного дома'
    },
    {
        title: {
            label: 'Анализ юридической чистоты',
            value: IconTypes.PURITY_ANALYSIS
        },
        text: 'Проверьте дом или квартиру в нашей базе'
    },
]