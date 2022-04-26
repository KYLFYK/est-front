import React, {FC, ReactNode} from 'react';
import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from 'src/components/shared/Typography/Typography';

type Props ={
    title:string
    children:ReactNode
}

const InfoDeveloperMobile:FC<Props> = ({children,title}) => {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon  />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography weight={"bold"} color={"accent"}>
                        {title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {children}
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default InfoDeveloperMobile;