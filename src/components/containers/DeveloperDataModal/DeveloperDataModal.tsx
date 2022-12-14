import React, {FC, useEffect} from 'react';
import Typography from "../../shared/Typography/Typography";
import { Modal } from '../../shared/Modal/Modal';
import { IconLocation } from '../../../icons/Development/IconLocation';
import { IconKey } from '../../../icons/Development/IconKey';
import { IconDevelopmentObjects } from '../../../icons/Development/IconDevelopmentObjects';
import Image from 'next/image'
import css from './DeveloperData.module.scss'
import { myLoader } from 'src/utils/image/image';
import {observer} from "mobx-react-lite";
import {useStoreMainPage} from "../../../mobx/mainPage/mainPage";
import Link from 'next/link'
import { imageConfigDefault } from 'next/dist/server/image-config';
import Scroll from 'src/components/shared/Scroll/Scroll';

type DeveloperDataPropsType = {
    img: string
    developer: {
        title: string
        location:string
        passed:string
        objectsDeveloper:Array<{nameObject:string,id:string}>
    }
    setActive: (value: boolean) => void,
    isActive: boolean
    id:number
}

export const DeveloperDataModal: FC<DeveloperDataPropsType> = observer(({ img, developer, isActive, setActive, id }) => {

    const store = useStoreMainPage()

    useEffect(()=>{
        if (isActive) store.fetchComplexDeveloper(id)
    },[isActive, store, id])

    return (
        // test for mobile update ( modal 0.2c vision)
        <Modal setActive={() => setActive(false)} active={developer.title?isActive:false} >
        {/*<Modal setActive={() => setActive(false)} active={isActive} >*/}
            <Image
                unoptimized
                src={img}
                width='174px' height='60px' alt="emmar" className={css.img}
                loader={e => myLoader(e.src, e.width, e.quality)}
            />
            <Typography size={'default'} color="accent" className={css.title}>
                {developer.title}
            </Typography>
            <div className={css.gridColumn}>
                <IconLocation />
                <div className={css.marginInfo}>
                    <Typography size={'default'} color="accent">
                        ?????????? ????????????????????????
                    </Typography>
                    <div>
                        <Typography size={'default'} color="accent" weight={'medium'}>
                            {developer.location}
                        </Typography>
                    </div>
                </div>
                <IconKey />
                <div className={css.marginInfo}>
                    <Typography size={'default'} color="accent">
                        ??????????
                    </Typography>
                    <div>
                        <Typography size={'default'} color="accent" weight={'medium'}>
                            {developer.passed}
                        </Typography>
                    </div>
                </div>
                <IconDevelopmentObjects />
                <div className={css.marginInfo}>
                    <Typography size={'default'} color="accent">
                        ?????????????? ??????????????????????
                    </Typography>
                    <Scroll height={store.initialData.complexDeveloper.length> 7 ?'500': "600"}>
                        {
                            store.initialData.complexDeveloper.map(({ name,id}, index) => (
                                <div key={index} className={css.colorText}>
                                    <Link href={`residential-complex/${id}`}>
                                        <Typography size={'default'} color="nude">
                                            {name}
                                        </Typography>
                                    </Link>

                                </div>
                            ))
                        }
                    </Scroll>

                </div>
            </div>
        </Modal>
    );
})

