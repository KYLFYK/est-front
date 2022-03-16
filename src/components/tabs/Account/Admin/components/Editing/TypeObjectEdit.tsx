import React, {FC, useState} from 'react';
import css from "./editing.module.scss";
import Typography from "../../../../../shared/Typography/Typography";
import {GuideInfoType} from "./GuidesItem";
import {CheckBoxOff, CheckBoxOn} from "./CheckBox";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SendAndArchiveOutlinedIcon from '@mui/icons-material/SendAndArchiveOutlined';
import {observer} from "mobx-react-lite";

type TypeObjectT = {
    index: number
    guide: GuideInfoType
    onClick: (e: string | null, index: number, guide: any) => void
    activeMenu: string | null
    disable?: boolean
    onDelete?: () => void
    onSaveValue: (value:string) => void
}

const TypeObjectEdit: FC<TypeObjectT> = observer(({guide, onClick, activeMenu, index, disable, onDelete, onSaveValue}) => {

    const onActiveMenu = (e: string | null, guide: any) => {
        onClick(e, index, guide)
    }
    const [value, setValue] = useState<string>(`${guide.type_ru} - ${guide.value} `)

    return (
        <div>
            <div className={css.grid_4}>
                <div onClick={onDelete}>
                    <DeleteOutlineIcon
                        fontSize={'small'}
                        className={disable ? css.colorDelete : css.colorDisable}
                    />
                </div>
                <div style={{display: 'flex'}}>
                    <div onClick={() => onActiveMenu(guide.value, guide)}>
                        {
                            !disable
                                ? <Typography
                                    className={css.guide}
                                    size={"small"}
                                    color={activeMenu === guide.value ? 'nude' : "tertiary"}
                                >
                                    {value}
                                </Typography>
                                : <input
                                    type={'text'}
                                    className={css.input}
                                    value={value}
                                    onChange={e => setValue(e.currentTarget.value)}
                                />
                        }
                    </div>
                    {
                        disable && <SendAndArchiveOutlinedIcon
                            onClick={()=>onSaveValue(value)}
                            fontSize={'small'}
                            className={css.colorDelete2}
                        />
                    }
                </div>


                <div className={css.checkbox}>
                    {
                        guide.isMulti
                            ? <CheckBoxOn disable={false}/>
                            : <CheckBoxOff disable={false}/>
                    }
                </div>
            </div>
        </div>
    )
})

export default TypeObjectEdit;