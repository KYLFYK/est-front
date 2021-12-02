import { NextPage } from "next"
import React from "react"
import FormScreen from "../../src/components/processes/create-new-object/FormScreen/FormScreen"
import StartScreen from "../../src/components/processes/create-new-object/StartScreen/StartScreen"
import { NewObjectActionTypes, ObjectTypes } from "../../src/utils/interfaces/objects"
import s from './index.module.scss'

const NewObjectPage: NextPage = () => {
    const [action, setAction] = React.useState<NewObjectActionTypes>()
    const [objectType, setObjectType] = React.useState<ObjectTypes>()

    return (
        <div className={s.wrapper}>
            {(action !== undefined && objectType !== undefined) ?
                <FormScreen objectType={objectType} clearObjectType={() => setObjectType(undefined)}/>
                : (
                    <StartScreen
                        onChooseAction={setAction}
                        onChooseObjectType={setObjectType}
                        choosedAction={action}
                        choosedObjectType={objectType}
                    />
                )
            }
        </div>
    )
}

export default NewObjectPage