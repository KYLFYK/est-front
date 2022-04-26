import React from "react"
import { IOption } from "../../../../../utils/interfaces/general"
import Typography from "../../../../shared/Typography/Typography"
import s from "./Contacts.module.scss"

export interface IDeveloperContactItem {
    title: string,
    text: string,
}

interface Props {
    items: IOption<IDeveloperContactItem>[]
}

const DeveloperContacts: React.FC<Props> = ({ items }) => {

    const renderTextLabel = (item: IOption<IDeveloperContactItem>) => {

        if (item.value === 'site') {
            const link = item.value.includes('http') ? item.label.text : `https://${item.label.text}`

            return (
                <a href={link} target="_blank" rel="noreferrer">
                    <Typography weight="medium" color={"nude"}>
                        {item.label.text}
                    </Typography>
                </a>
            )
        }
        return (
            <Typography weight="medium">
                {item.label.text}
            </Typography>
        )
    }

    return (
        <div className={s.wrapper}>
            {items.map((item,index) => (
                <div key={item.value} className={s.item} style={{marginTop:index===0? '-10px':'' }}>
                    <Typography weight="light">
                        {item.label.title}
                    </Typography>
                    {renderTextLabel(item)}
                </div>
            ))}
        </div>
    )
}

export default DeveloperContacts