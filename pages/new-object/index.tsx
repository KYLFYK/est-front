import { NextPage } from "next"
import React from "react"
import FormScreen from "../../src/components/processes/create-new-object/FormScreen/FormScreen"
import s from './index.module.scss'

const NewObjectPage: NextPage = () => {
    return (
        <div className={s.wrapper}>
            <FormScreen />
        </div>
    )
}

export default NewObjectPage