import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BaseSlider from './BaseSlider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/BaseSlider',
    component: BaseSlider,
    decorators: [
        (Story) => (
            <div style={{width: 700}}><Story /></div>
        )
    ]
} as ComponentMeta<typeof BaseSlider>;

const images = ['https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg',
'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
'https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270']

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseSlider> = (args) => <BaseSlider {...args} />;

export const WithoutArrows = Template.bind({});
WithoutArrows.args = {
    images: images,
    height: 300
};

export const WithArrows = Template.bind({});
WithArrows.args = {
    images: images,
    height: 300,
    withArrows: true,
};

export const WithoutImages = Template.bind({});
WithoutImages.args = {
    images: [],
    height: 300,
};