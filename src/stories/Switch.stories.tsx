import { Meta, StoryObj } from "@storybook/react";
import { Switch as SwitchEl } from "@/registry/ui/switch/Switch";

const meta = {
  title: "Components/Switch",
  component: SwitchEl,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Whether the switch is disabled.",
      defaultValue: false,
    },
    checked: {
      control: "boolean",
      description: "Whether the switch is checked.",
      defaultValue: false,
    },
    className: {
      control: "text",
      description: "Additional custom class names for the switch.",
    },
  },
} satisfies Meta<typeof SwitchEl>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default Variant Switch
export const Default: Story = {
  render: (args) => <SwitchEl {...args} />,
  args: {
    disabled: false,
    checked: false,
  },
};

// Disabled Variant Switch
export const Disabled: Story = {
  render: (args) => <SwitchEl {...args} />,
  args: {
    disabled: true,
    checked: false,
  },
};

// Checked Variant Switch
export const Checked: Story = {
  render: (args) => <SwitchEl {...args} />,
  args: {
    disabled: false,
    checked: true,
  },
};
