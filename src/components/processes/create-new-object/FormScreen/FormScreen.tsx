import Link from 'next/link'
import React from 'react'
import NavArrowIcon from '../../../../icons/NavArrow/NavArrow'
import Typography from '../../../shared/Typography/Typography'
import AboutObject from '../components/AboutObject/AboutObject'
import MultipleHorizontalTab, { ICreateObjectTabs } from '../components/MultipleHorizontalTab/MultipleHorizontalTab'
import s from './FormScreen.module.scss'


interface Props {
    
}

const FormScreen: React.FC<Props> = ({}) => {
    const [activeTabIdx, setActiveTabIdx] = React.useState<number>(0)
    const [activeSubTabIdx, setActiveSubTabIdx] = React.useState<number>(0)
    const [tabsProp, setTabsProp] = React.useState<ICreateObjectTabs[]>([])

    const lastSubTabIdx = tabsProp[activeTabIdx]?.Components.length - 1
    const lastTabIdx = tabsProp.length - 1
    const isLastScreen = activeTabIdx === lastTabIdx && activeSubTabIdx === lastSubTabIdx

    const handleNextTab = React.useCallback(() => {
        if (isLastScreen) return;

        if (activeSubTabIdx < lastSubTabIdx) {
            setActiveSubTabIdx(activeSubTabIdx + 1)
            return
        }
        setActiveSubTabIdx(0)
        setActiveTabIdx(activeTabIdx + 1)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTabIdx, activeSubTabIdx, isLastScreen, lastSubTabIdx])

    const handlePrevTab = React.useCallback(() => {
        if (activeTabIdx === 0 && activeSubTabIdx === 0) return

        if (activeSubTabIdx > 0) {
            setActiveSubTabIdx(activeSubTabIdx - 1)
            return
        }

        setActiveSubTabIdx(tabsProp[activeTabIdx - 1].Components.length - 1)
        setActiveTabIdx(activeTabIdx - 1)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTabIdx, activeSubTabIdx])

    const handlePublicate = () => { }

    React.useEffect(() => {
        setTabsProp(
            [
                {
                    isDone: activeTabIdx > 0,
                    label: "Об объекте",
                    Components: [<AboutObject key={1} onNextTab={handleNextTab} onPrevTab={handlePrevTab} />],
                },
                { isDone: activeTabIdx > 1, label: "Основная информация", Components: [<AboutObject key={23} onNextTab={handleNextTab} onPrevTab={handlePrevTab} />, <AboutObject key={3} onNextTab={handleNextTab} onPrevTab={handlePrevTab} />, <AboutObject key={51} onNextTab={handleNextTab} onPrevTab={handlePrevTab} />] },
                { isDone: activeTabIdx > 2, label: "Инфраструктура", Components: [<div key={1} />] },
                { isDone: activeTabIdx > 3, label: "О доме", Components: [<div key={1} />, <div key={1} />, <div key={1} />] },
                { isDone: activeTabIdx > 4, label: "Юридическая чистота", Components: [<div key={1} />, <div key={1} />] },
            ]
        )
    }, [handleNextTab, handlePrevTab, activeTabIdx])

    return (
        <div>
            <div className={s.nav}>
                <div className={s.navContent}>
                    <Link href="/">
                        <a className={s.link}>
                            <Typography weight="medium" icon={<NavArrowIcon />}>Новый объект</Typography>
                        </a>
                    </Link>
                    <div>
                        <Typography icon="+" color="tertiary" size="small">Добавить агента к объекту</Typography>
                    </div>
                </div>
                <div className={s.divider} />
            </div>
            <MultipleHorizontalTab activeSubTabIdx={activeSubTabIdx} activeTabIdx={activeTabIdx} tabs={tabsProp} />

        </div>
    )
}

export default FormScreen