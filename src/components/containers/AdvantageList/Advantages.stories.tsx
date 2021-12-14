import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Advantages } from './AdvantageList';
import { mocAdvantages } from './config';

export default {
    title: 'Components/Advantages',
    component: Advantages,
    argTypes: {
        onClick: { action: "onClick" },
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof Advantages>;

const Template: ComponentStory<typeof Advantages> = (args) => <Advantages {...args} />;

export const MaimPageAdventages = Template.bind({});
MaimPageAdventages.args = {
    advantages: mocAdvantages
};
