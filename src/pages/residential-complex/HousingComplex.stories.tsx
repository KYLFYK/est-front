import { ComponentStory, ComponentMeta } from '@storybook/react';
import HousingComplex from './HousingComplex';

export default {
    title: 'Pages/HousingComplex',
    component: HousingComplex,
    argTypes: {

    },
} as ComponentMeta<typeof HousingComplex>;

const Template: ComponentStory<typeof HousingComplex> = (args) => <HousingComplex {...args} />;

export const HousingComplexPage = Template.bind({});
HousingComplexPage.args = {

};
