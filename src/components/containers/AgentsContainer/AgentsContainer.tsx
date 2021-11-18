import React, { FC } from 'react';
import css from './AgentsContainer.module.scss'
import { AgentBlock } from './AgentBlock/AgentBlock';
import HeadLine from '../../shared/HeadLine/HeadLine';

type AgentsContainerType = {
    agents: Array<{ name: string, heldPost: string, img: string }>
    title: string
}

export const AgentsContainer: FC<AgentsContainerType> = ({ agents, title }) => {

    return (
        <div className={css.containerAgentsBlock}>
            <HeadLine title={title}>
                <div className={css.block}>
                    {
                        agents.map(({ name, heldPost, img }, index) => (
                            <AgentBlock
                                key={index}
                                name={name}
                                heldPost={heldPost}
                                img={img}
                            />
                        ))
                    }
                </div>
            </HeadLine>
        </div>
    );
};
