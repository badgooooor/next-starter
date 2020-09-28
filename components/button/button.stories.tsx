import * as React from "react";
import { Story } from "@storybook/react";
import TestButton, { TestButtonProps } from "./TestButton";

export default { title: "Button", component: TestButton };

const Template: Story<TestButtonProps> = (args) => <TestButton {...args} />;

export const testButton = Template.bind({});
testButton.args = { text: "Test" };
