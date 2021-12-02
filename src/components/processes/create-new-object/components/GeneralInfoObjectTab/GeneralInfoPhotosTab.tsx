import React from "react"
import PlusIcon from "../../../../../icons/PlusIcon/PlusIcon"
import Typography from "../../../../shared/Typography/Typography"
import ButtonPanel, { ICreateObjectControls } from "../ButtonsPanel/ButtonsPanel"
import InputsGroup from "../InputsGroup/InputsGroup"
import s from './GeneralInfoObjectTab.module.scss'
import { useDropzone } from 'react-dropzone';
import Image from 'next/image'


const dashedBorder = `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='black' stroke-width='1' stroke-dasharray='8%2c 8' stroke-dashoffset='12' stroke-linecap='square'/%3e%3c/svg%3e")`
interface Props extends ICreateObjectControls {

}
interface ICustomFile extends File {
    preview: string
}

const GeneralInfoPhotosTab: React.FC<Props> = ({ onNextTab, onPrevTab }) => {
    const [files, setFiles] = React.useState<ICustomFile[]>([]) // TODO: Replace by MobX / Redux

    const { getRootProps, getInputProps } = useDropzone({
        accept: '.bmp, .jpeg, .png, .jpg',
        onDrop: acceptedFiles => {
            const newFiles = acceptedFiles.map((file: File, idx: number) => Object.assign(file, {
                preview: URL.createObjectURL(file),
            }));
            console.log(newFiles)
            setFiles(newFiles)
        }
    });

    return (
        <ButtonPanel onNextTab={onNextTab} onPrevTab={onPrevTab}>
            <InputsGroup title={"Фотографии объекта"}>
                <div>
                    <Typography className={s.subTitle}>Добавьте как минимум одно изображение</Typography>
                    <div className={s.photosWrapper} style={{ backgroundImage: dashedBorder }}>
                        {files.map((img, idx) => {
                            if (idx > 4) return
                            return (
                                <div key={idx} className={s.imgContainer}>
                                    <Image className={s.img} layout="fill" loader={() => img.preview} src={img.preview} alt="Uploaded image" />
                                </div>
                            )
                        })}
                        <div className={s.newItem} {...getRootProps()}>
                            <input {...getInputProps()} />
                            <PlusIcon />
                            <Typography weight="light" className={s.newItemLabel}>Добавьте фото или видео</Typography>
                        </div>
                    </div>
                </div>
            </InputsGroup>
        </ButtonPanel>
    )
}

export default GeneralInfoPhotosTab