import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AvatarSection } from "./index";

export default {
  title: "Components/Personal Avatar",
  component: AvatarSection,
  args: {
    src: "https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png",
  },
} as ComponentMeta<typeof AvatarSection>;

const Template: ComponentStory<typeof AvatarSection> = (args) => (
  <AvatarSection {...args} />
);

export const InitialAvatar = Template.bind({
  src: "https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png",
});

InitialAvatar.args = {
  src: "https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png",
  changeable: true,
};
