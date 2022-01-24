import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AdminRoleTabs } from "./AdminRoleTabs";

export default {
  title: "Tabs/AdminRoleTabs",
  component: AdminRoleTabs,
} as ComponentMeta<typeof AdminRoleTabs>;

const Template: ComponentStory<typeof AdminRoleTabs> = (args) => (
  <AdminRoleTabs {...args} />
);

export const InitialCard = Template.bind({});

InitialCard.args = {};
