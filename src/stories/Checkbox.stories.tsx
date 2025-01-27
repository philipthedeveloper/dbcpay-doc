import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@/registry/ui/checkbox/Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A `Checkbox` is a control that allows the user to toggle between checked and not checked.",
      },
    },
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md"],
      description: "The size of the checkbox.",
      defaultValue: "sm",
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled.",
    },
    checked: {
      control: "boolean",
      description: "Whether the checkbox is checked.",
    },
    iconType: {
      control: { type: "select" },
      options: ["check", "minus"],
      description: "The type of icon to display inside the checkbox.",
      defaultValue: "check",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

// Rectangle Variant Checkboxes
export const RectVariant: Story = {
  render: (args) => (
    <div className="gap-4 flex items-center">
      <Checkbox {...args} />
      <Checkbox {...args} checked={true} />
      <Checkbox {...args} disabled />
      <Checkbox {...args} disabled checked />
    </div>
  ),
  args: {
    size: "md",
    variant: "default-md",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default-sm", "default-md"],
      description: "The variant of the checkbox.",
      defaultValue: "default-sm",
    },
  },
};

// Circle Variant Checkboxes
export const CircleVariant: Story = {
  render: (args) => (
    <div className="gap-4 flex items-center">
      <Checkbox {...args} variant="circle" />
      <Checkbox {...args} checked={true} variant="circle" />
      <Checkbox {...args} disabled variant="circle" />
      <Checkbox {...args} disabled checked variant="circle" />
    </div>
  ),
  args: {
    size: "md",
  },
};
