import Link from 'next/link'
import React from 'react'
import NavArrowIcon from '../../../../icons/NavArrow/NavArrow'
import BaseButton from '../../../shared/BaseButton/BaseButtons'
import Typography from '../../../shared/Typography/Typography'
import MultipleHorizontalTab from '../components/MultipleHorizontalTab/MultipleHorizontalTab'
import s from './FormScreen.module.scss'

const FormScreen = () => {
    return (
        <div>
            <div className={s.nav}>
                <Link href="/">
                    <a className={s.link}>
                        <Typography weight="medium" icon={<NavArrowIcon />}>Новый объект</Typography>
                    </a>
                </Link>
                <div>
                    <Typography icon="+" iconPosition="end" color="tertiary" size="small">Добавить агента к объекту</Typography>
                </div>
            </div>
            Content ...
            <MultipleHorizontalTab activeSubTabIdx={0} activeTabIdx={0} tabs={[
                { label: "ВасВасяВасяя", Components: [<div key={1} />, <div key={2} />] }
            ]} />




            <div className={s.buttonsBlock}>
                <BaseButton iconPosition="start" type="secondary" icon={<NavArrowIcon />}>
                    <Typography size="small"> К предыдущему этапу </Typography>
                </BaseButton>
                <div className={s.buttonsGroup}>
                    <BaseButton type="secondary">
                        <Typography size="small"> В черновик </Typography>
                    </BaseButton>
                    <BaseButton type="secondary" isActive icon={<NavArrowIcon className={s.nextArrow} />}>
                        <Typography size="small" color="secondary"> Продолжить </Typography>
                    </BaseButton>
                </div>
            </div>
        </div>
    )
}

export default FormScreen