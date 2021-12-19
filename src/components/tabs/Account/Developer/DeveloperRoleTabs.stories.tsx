import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DeveloperRoleTabs } from "./DeveloperRoleTabs";

export default {
  title: "Tabs/DeveloperRoleTabs",
  component: DeveloperRoleTabs,
} as ComponentMeta<typeof DeveloperRoleTabs>;

const Template: ComponentStory<typeof DeveloperRoleTabs> = (args) => (
  <DeveloperRoleTabs {...args} />
);

export const InitialCard = Template.bind({});

InitialCard.args = {};
