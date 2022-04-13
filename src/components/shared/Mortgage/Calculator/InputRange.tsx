import React from "react";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
interface Props {
  min: number;
  max: number;
  value: number;
  setValue: (value: number) => void;
}

export const InputRange: React.FC<Props> = ({ min, max, value, setValue }) => {
  const PrettoSlider = withStyles({
    root: {
      color: "#000",
      height: 4,
      width: "100%",
    },
    thumb: {
      height: 10,
      width: 10,
      backgroundColor: "#C5A28E",
      border: "2px solid #FFF",
      marginTop: -3,
      marginLeft: -5,
      "&:focus, &:hover, &$active": {
        boxShadow: "inherit",
      },
    },
    markLabel: {
      display: "hide",
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)",
    },
    track: {
      height: 4,
      borderRadius: 4,
      backgroundColor: "#C5A28E",
    },
    rail: {
      height: 4,
      borderRadius: 4,
      backgroundColor: "#FFF",
    },
  })(Slider);

  return (
    <div>
      <PrettoSlider
        valueLabelDisplay="off"
        aria-label="pretto slider"
        defaultValue={value}
        onChangeCommitted={(e, v) => {
          setValue(v as number);
        }}
        min={min}
        max={max}
      />
    </div>
  );
};
