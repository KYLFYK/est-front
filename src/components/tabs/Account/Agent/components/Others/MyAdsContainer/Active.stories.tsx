import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Active from "./MyAdsContainer";

export default {
  title: "Tabs/Others",
  component: Active,
} as ComponentMeta<typeof Active>;

const Template: ComponentStory<typeof Active> = (args) => <Active {...args} />;
export const Active_ = Template.bind({});
Active_.args = {
  menu: "active",
  objects: [],
};
