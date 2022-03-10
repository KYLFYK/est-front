import React, {FC, useState} from 'react';
import css from './cottages.module.scss'
import HeadLine from "../../shared/HeadLine/HeadLine";
import {Card} from "../../shared/Mortgage/Card";
import CardCottages from './СottagesComponents/CardCottages';
import CardObjectVillage from './СottagesComponents/CardObjectCottages';
import VillageIcons from './СottagesComponents/CottagesIcons';
import BaseButton from 'src/components/shared/BaseButton/BaseButtons';
import {FinishesOptions} from "../finishesOptions/finishesOptions";

const cottages = [
    {
        id: '1',
        img: 'https://me-house.ru/wp-content/uploads/2019/08/7217maxresdefault-1-4.jpg',
        totalArea: '63',
        price: '14100000',
        url: '',
        info: {
            planning: {
                img: 'https://me-house.ru/wp-content/uploads/2019/08/7217maxresdefault-1-4.jpg',
                options: [
                    {
                        icon: 'water',
                        title: 'Водопровод',
                        value: 'Центральный'
                    }, {
                        icon: 'heating',
                        title: 'Отопление',
                        value: 'Центральное'
                    }, {
                        icon: 'supply',
                        title: 'Канализация',
                        value: 'Центральная'
                    }, {
                        icon: 'electricity',
                        title: 'Электричество',
                        value: 'Генератор'
                    },{
                        icon: 'supply',
                        title: 'Канализация',
                        value: 'Центральная'
                    }, {
                        icon: 'electricity',
                        title: 'Электричество',
                        value: 'Генератор'
                    },{
                        icon: 'supply',
                        title: 'Канализация',
                        value: 'Центральная'
                    }, {
                        icon: 'electricity',
                        title: 'Электричество',
                        value: 'Генератор'
                    },
                ]
            }
        }
    }, {
        id: '2',
        img: 'https://me-house.ru/wp-content/uploads/2019/08/7217maxresdefault-1-4.jpg',
        totalArea: '73',
        price: '12300000',
        url: '',
        info: {
            planning: {
                img: 'https://me-house.ru/wp-content/uploads/2019/08/7217maxresdefault-1-4.jpg',
                options: [
                    {
                        icon: 'heating',
                        title: 'Отопление',
                        value: 'Центральное'
                    },
                    {
                        icon: 'water',
                        title: 'Водопровод',
                        value: 'Центральный'
                    }, {
                        icon: 'supply',
                        title: 'Канализация',
                        value: 'Центральная'
                    }, {
                        icon: 'electricity',
                        title: 'Электричество',
                        value: 'Генератор'
                    },
                ]
            }
        }
    }, {
        id: '3',
        img: 'https://me-house.ru/wp-content/uploads/2019/08/7217maxresdefault-1-4.jpg',
        totalArea: '84',
        price: '16100000',
        url: '',
        info: {
            planning: {
                img: 'https://me-house.ru/wp-content/uploads/2019/08/7217maxresdefault-1-4.jpg',
                options: [
                    {
                        icon: 'supply',
                        title: 'Канализация',
                        value: 'Центральная'
                    }, {
                        icon: 'electricity',
                        title: 'Электричество',
                        value: 'Генератор'
                    }, {
                        icon: 'water',
                        title: 'Водопровод',
                        value: 'Центральный'
                    }, {
                        icon: 'heating',
                        title: 'Отопление',
                        value: 'Центральное'
                    },
                ]
            }
        }
    }, {
        id: '4',
        img: 'https://me-house.ru/wp-content/uploads/2019/08/7217maxresdefault-1-4.jpg',
        totalArea: '163',
        price: '21500000',
        url: '',
        info: {
            planning: {
                img: 'https://me-house.ru/wp-content/uploads/2019/08/7217maxresdefault-1-4.jpg',
                options: [
                    {
                        icon: 'heating',
                        title: 'Отопление',
                        value: 'Центральное'
                    }, {
                        icon: 'supply',
                        title: 'Канализация',
                        value: 'Центральная'
                    },
                    {
                        icon: 'water',
                        title: 'Водопровод',
                        value: 'Центральный'
                    }, {
                        icon: 'electricity',
                        title: 'Электричество',
                        value: 'Генератор'
                    },
                ]
            }
        }
    }, {
        id: '5',
        img: 'https://me-house.ru/wp-content/uploads/2019/08/7217maxresdefault-1-4.jpg',
        totalArea: '113',
        price: '19800000',
        url: '',
        info: {
            planning: {
                img: 'https://me-house.ru/wp-content/uploads/2019/08/7217maxresdefault-1-4.jpg',
                options: [
                    {
                        icon: 'electricity',
                        title: 'Электричество',
                        value: 'Генератор'
                    },
                    {
                        icon: 'water',
                        title: 'Водопровод',
                        value: 'Центральный'
                    }, {
                        icon: 'heating',
                        title: 'Отопление',
                        value: 'Центральное'
                    }, {
                        icon: 'supply',
                        title: 'Канализация',
                        value: 'Центральная'
                    },
                ]
            }
        }
    }, {
        id: '6',
        img: 'https://me-house.ru/wp-content/uploads/2019/08/7217maxresdefault-1-4.jpg',
        totalArea: '137',
        price: '23600000',
        url: '',
        info: {
            planning: {
                img: 'https://me-house.ru/wp-content/uploads/2019/08/7217maxresdefault-1-4.jpg',
                options: [
                    {
                        icon: 'water',
                        title: 'Водопровод',
                        value: 'Центральный'
                    }, {
                        icon: 'heating',
                        title: 'Отопление',
                        value: 'Центральное'
                    }, {
                        icon: 'supply',
                        title: 'Канализация',
                        value: 'Центральная'
                    }, {
                        icon: 'electricity',
                        title: 'Электричество',
                        value: 'Генератор'
                    },
                ]
            }
        }
    }, {
        id: '7',
        img: 'https://me-house.ru/wp-content/uploads/2019/08/7217maxresdefault-1-4.jpg',
        totalArea: '137',
        price: '23600000',
        url: '',
        info: {
            planning: {
                img: 'https://me-house.ru/wp-content/uploads/2019/08/7217maxresdefault-1-4.jpg',
                options: [
                    {
                        icon: 'water',
                        title: 'Водопровод',
                        value: 'Центральный'
                    }, {
                        icon: 'heating',
                        title: 'Отопление',
                        value: 'Центральное'
                    }, {
                        icon: 'supply',
                        title: 'Канализация',
                        value: 'Центральная'
                    }, {
                        icon: 'electricity',
                        title: 'Электричество',
                        value: 'Генератор'
                    },
                ]
            }
        }
    }, {
        id: '8',
        img: 'https://me-house.ru/wp-content/uploads/2019/08/7217maxresdefault-1-4.jpg',
        totalArea: '137',
        price: '23600000',
        url: '',
        info: {
            planning: {
                img: 'https://me-house.ru/wp-content/uploads/2019/08/7217maxresdefault-1-4.jpg',
                options: [
                    {
                        icon: 'water',
                        title: 'Водопровод',
                        value: 'Центральный'
                    }, {
                        icon: 'heating',
                        title: 'Отопление',
                        value: 'Центральное'
                    }, {
                        icon: 'supply',
                        title: 'Канализация',
                        value: 'Центральная'
                    }, {
                        icon: 'electricity',
                        title: 'Электричество',
                        value: 'Генератор'
                    },
                ]
            }
        }
    }, {
        id: '9',
        img: 'https://me-house.ru/wp-content/uploads/2019/08/7217maxresdefault-1-4.jpg',
        totalArea: '137',
        price: '23600000',
        url: '',
        info: {
            planning: {
                img: 'https://me-house.ru/wp-content/uploads/2019/08/7217maxresdefault-1-4.jpg',
                options: [
                    {
                        icon: 'water',
                        title: 'Водопровод',
                        value: 'Центральный'
                    }, {
                        icon: 'heating',
                        title: 'Отопление',
                        value: 'Центральное'
                    }, {
                        icon: 'supply',
                        title: 'Канализация',
                        value: 'Центральная'
                    }, {
                        icon: 'electricity',
                        title: 'Электричество',
                        value: 'Генератор'
                    },
                ]
            }
        }
    }
]

const finishesCards =[
    {src:'https://me-house.ru/wp-content/uploads/2019/08/7217maxresdefault-1-4.jpg',url:'',countryFishing:'Швеция'},
    {src:'https://me-house.ru/wp-content/uploads/2019/08/7217maxresdefault-1-4.jpg',url:'',countryFishing:'Япония'},
    {src:'https://me-house.ru/wp-content/uploads/2019/08/7217maxresdefault-1-4.jpg',url:'',countryFishing:'Дания'},
]

const Index = () => {
    const [activeObject, setActiveObject] = useState<number>(0)
    return (
        <div style={{margin:'0 60px'}}>
            <HeadLine title={'Коттеджи'} >
                <div style={{display: 'flex'}}>
                    <Card className={css.cardVillage}>
                        {
                            cottages.map((vil, index) => (
                                <CardCottages
                                    key={index}
                                    onClick={() => setActiveObject(index)}
                                    id={vil.id}
                                    img={vil.img}
                                    totalArea={vil.totalArea}
                                    price={vil.price}
                                />
                            ))
                        }
                    </Card>
                    <Card className={css.cardObject}>
                        {
                            <CardObjectVillage
                                data={cottages[activeObject]}
                            />
                        }
                        <div className={css.verticalLine}>
                        </div>

                        <div>
                            <div className={css.df_jc_fd}>
                                <div className={css.dg_gtc}>
                                    {
                                        cottages[activeObject].info.planning.options.map((icons, index) => (
                                            <VillageIcons key={index} icons={icons} />
                                        ))
                                    }
                                </div>
                                <div className={css.buttonStyle}>
                                    <BaseButton type={"primary"}>
                                        Выбрать коттедж
                                    </BaseButton>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </HeadLine>
            <FinishesOptions
                finishesCards={finishesCards}
            />
        </div>
    );
};

export default Index;


