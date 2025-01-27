import { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio/Radio";

const meta = {
  title: "Components/Radio",
  component: RadioGroupItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Whether the radio button is disabled.",
    },
    checked: {
      control: "boolean",
      description: "Whether the checkbox is checked.",
    },
  },
} satisfies Meta<typeof RadioGroupItem>;

export default meta;

type Story = StoryObj<Omit<typeof meta, "value">>;

// Default Variant RadioGroup
export const DefaultVariant: Story = {
  render: (args) => (
    <RadioGroup className="flex gap-4">
      <RadioGroupItem {...args} value="option1" />
      <RadioGroupItem {...args} value="option2" checked />
      <RadioGroupItem {...args} value="option3" disabled />
      <RadioGroupItem disabled checked {...args} value="option4" />
    </RadioGroup>
  ),
  args: {
    size: "sm",
    value: "",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md"],
      description: "The size of the radio buttons.",
      defaultValue: "sm",
    },
  },
};

// Circle Variant RadioGroup
export const MediumVariant: any = {
  render: (args: any) => (
    <RadioGroup className="flex gap-4">
      <RadioGroupItem {...args} value="circle1" size={"md"} />
      <RadioGroupItem {...args} value="circle2" checked size={"md"} />
      <RadioGroupItem {...args} value="circle3" disabled size={"md"} />
      <RadioGroupItem {...args} value="circle4" disabled checked size={"md"} />
    </RadioGroup>
  ),
};
