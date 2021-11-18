import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Advantages } from './AdvantageList';

export default {
    title: 'Components/Advantages',
    component: Advantages,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof Advantages>;

const Template: ComponentStory<typeof Advantages> = (args) => <Advantages {...args} />;

const mocAdvantages = [{title: 'Ипотека от РКНБ', text: 'Используйте ипотечный калькулятор  для расчета своей ставки'},
    {title: 'Анализ инфраструктуры', text: 'Оцените главные преимущества выбранного дома'},
    {title: 'VR и 3D туры', text: 'Оцените главные преимущества выбранного дома'},
    {title: 'Анализ юридической чистоты', text: 'Проверьте дом или квартиру в нашей базе'},
]

export const Block = Template.bind({});
Block.args = {
    title:'Наши преимушества',
    advantages:mocAdvantages
};