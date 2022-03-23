import React, { ChangeEvent, useState } from "react";
import PlusIcon from "../../../../../icons/PlusIcon/PlusIcon";
import Typography from "../../../../shared/Typography/Typography";
import ButtonPanel, {
  ICreateObjectControls,
} from "../ButtonsPanel/ButtonsPanel";
import InputsGroup from "../InputsGroup/InputsGroup";
import s from "./GeneralInfoObjectTab.module.scss";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { ObjectTypes } from "../../../../../utils/interfaces/objects";
import { getInitialStateGeneralInfoTab, TGeneralInfoState } from "../../lib";
import { useStores } from "../../../../../hooks/useStores";
import { CrossIcon } from "../../../../../icons/MapControlsIcons/PlaceIcons/CrossIcon";
import { observer } from "mobx-react-lite";
import { BaseInput } from "../../../../shared/BaseInput/Input";
import { IUploadedFile } from "../../../../../mobx/stores/CreateObjectStores/CreateObjectStore";

const dashedBorder = `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='black' stroke-width='1' stroke-dasharray='8%2c 8' stroke-dashoffset='12' stroke-linecap='square'/%3e%3c/svg%3e")`;
interface Props extends ICreateObjectControls {
  objectType: ObjectTypes;
}

export interface ICustomFile {
  preview: string;
  id: string;
  file: File;
}

const GeneralInfoPhotosTab: React.FC<Props> = observer(
  ({ onNextTab, onPrevTab, objectType }) => {
    const { createObjectStore } = useStores();
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [values, setValues] = React.useState<TGeneralInfoState>(
      getInitialStateGeneralInfoTab(objectType, createObjectStore)
    );

    const isValidFiles = !!values.photos.length;

    const { getRootProps, getInputProps } = useDropzone({
      accept: ".bmp, .jpeg, .png, .jpg",
      onDrop: (acceptedFiles) => {
        const newFiles = acceptedFiles.map((file: File, idx: number) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            id: String(Date.now() + idx),
            file: file,
          })
        );
        // Here's will be functions for files validation ...
        setErrorMsg("");
        setValues({ ...values, photos: [...values.photos, ...newFiles] });
      },
    });

    const onDeleteImage = (id: string) => {
      const newList = values.photos.filter(
        (img, index) => index.toString() !== id
      );
      setValues({ ...values, photos: newList });
    };

    const onChangeVrTour = (e: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, vrTour: e.target.value });
    };

    const onChangeVideo = (e: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, video: e.target.value });
    };

    const handleNextTab = () => {
      if (!isValidFiles || !!errorMsg) {
        if (!errorMsg) setErrorMsg("Фотографии не загружены");
        return;
      }
      createObjectStore.saveGeneralTab(values, objectType);
      createObjectStore
        .uploadFileList(
          values.photos.map((el: ICustomFile | IUploadedFile) => el)
        )
        .then();
      onNextTab && onNextTab();
    };

    return (
      <ButtonPanel onNextTab={handleNextTab} onPrevTab={onPrevTab}>
        <InputsGroup
          title={objectType === 4 ? "Фотографии ЖК" : "Фотографии объекта"}
        >
          <div className={s.wrapper}>
            <Typography className={s.subTitle}>
              Добавьте как минимум одно изображение
            </Typography>
            <div
              className={s.photosWrapper}
              style={{ backgroundImage: dashedBorder }}
            >
              {values.photos.map((img, idx) => {
                if (idx > 4) return;
                return (
                  <div key={idx} className={s.imgContainer}>
                    <div
                      className={s.imgHover}
                      onClick={() => onDeleteImage(idx.toString())}
                    >
                      <CrossIcon className={s.imgHoverCross} />
                    </div>
                    <Image
                      className={s.img}
                      layout="fill"
                      loader={() => ("preview" in img ? img.preview : img.url)}
                      src={"preview" in img ? img.preview : img.url}
                      alt="Uploaded image"
                      unoptimized
                    />
                  </div>
                );
              })}
              <div className={s.newItem} {...getRootProps()}>
                <input {...getInputProps()} />
                <PlusIcon />
                <Typography weight="light" className={s.newItemLabel}>
                  Добавьте фото или видео
                </Typography>
              </div>
            </div>
          </div>
        </InputsGroup>
        <Typography color="red" size="small" className={s.error}>
          {errorMsg}
        </Typography>
        {objectType !== 3 && objectType !== 4 && (
          <InputsGroup title={"Дополнительно"}>
            <BaseInput
              value={"vrTour" in values ? values.vrTour : ""}
              type="text"
              label="Ссылка на VR тур"
              className={s.inputMd}
              onChange={onChangeVrTour}
            />
            <BaseInput
              value={"video" in values ? values.video : ""}
              type="text"
              label="Ссылка на 3D тур"
              className={s.inputMd}
              onChange={onChangeVideo}
            />
          </InputsGroup>
        )}
      </ButtonPanel>
    );
  }
);

export default GeneralInfoPhotosTab;
