import React from 'react';
import css from './AgentName.module.css'
import Typography from "../Typography/Typography";

type AgentPropsType = {
    name: string
}

export const AgentName: React.FC<AgentPropsType> = ({name}) => {
    return (
        <div className={css.agentName}>
            <Typography size={'default'} color="accent" weight={'medium'} className={css.cursor}>
                {name}
            </Typography>
        </div>
    );
};
