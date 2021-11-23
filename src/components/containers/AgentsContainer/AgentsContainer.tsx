import React, { FC } from 'react';
import css from './AgentsContainer.module.scss'
import { AgentBlock } from './AgentBlock/AgentBlock';
import HeadLine from '../../shared/HeadLine/HeadLine';

type AgentsContainerType = {
    title: string
    agents: Array<{
        img: string,
        connection: {
            whatsApp:string, telegram:string,
            email:string, phone:string},
        infoAgent: {
            fullName:string,
            heldPost:string,
            professionalExperience:string,
            completed:string,
            inWork:string,
            whatsApp:string,
            telegram:string,
            phone:string,
            email:string}
    }>
}

export const AgentsContainer: FC<AgentsContainerType> = ({ agents, title }) => {
    return (
        <div className={css.containerAgentsBlock}>
            <HeadLine title={title}>
                <div className={css.block}>
                    {
                        agents.map(({ infoAgent, connection, img }, index) => (
                            <AgentBlock
                                key={index}
                                img={img}
                                infoAgent={infoAgent}
                                connection={connection}
                            />
                        ))
                    }
                </div>
            </HeadLine>
        </div>
    );
};
