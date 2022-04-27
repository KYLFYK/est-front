import React, {FC, ReactNode} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, makeStyles} from "@material-ui/core";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from 'src/components/shared/Typography/Typography';
import {createTheme} from "@mui/material";
import classNames from "classnames";

type Props ={
    title:string
    children:ReactNode
}


const useStyles = makeStyles(() => ({
    root: {
        minHeight:40,
        // padding:"0px !important",
        padding:0,
        "& > .MuiIconButton-root": {
            padding:'0px 12px !important',
        },
        '.MuiIconButton-root':{
            padding:'0px 12px !important',
        },

        // ".MuiAccordionSummary-root":{
        //     height:'35px !important',
        // },
        // "& > .MuiAccordionSummary-root": {
        //     height:'35px !important',
        // },
    }
}))

const InfoDeveloperMobile:FC<Props> = ({children,title}) => {
    // const classes = useStyles()
    return (
        <div >
            {/*<Accordion className={classes.root}  >*/}
            <Accordion   >
                <AccordionSummary
                    // className={classes.root}
                    // expandIcon={<ExpandMoreIcon className={classes.root} />}
                    expandIcon={<ExpandMoreIcon  />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography weight={"bold"} color={"accent"}>
                        {title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails >
                    {children}
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default InfoDeveloperMobile;