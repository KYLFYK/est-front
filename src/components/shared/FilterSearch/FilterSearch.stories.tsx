import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FilterSearch from './FilterSearch';
import { IMAGES_SET } from '../../containers/GeneralInfo/config';



export default {
    title: 'Components/FilterCabinet',
    component: FilterSearch,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof FilterSearch>;

const Template: ComponentStory<typeof FilterSearch> = (args) => <div>
    <div>type=agent</div>
    <FilterSearch type={"agent"} />
    <div>type=owner</div>
    <FilterSearch type={"owner"} />
    <div>type=professional</div>
    <FilterSearch type={"professional"} />
</div>;

export const FilterSearch_agent_ = Template.bind({});
FilterSearch_agent_.args = {
};
