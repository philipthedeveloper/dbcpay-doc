import { Meta, StoryObj } from "@storybook/react";
import { InfoBlock } from "@/registry/ui/inputs/InfoBlock";

const meta: Meta<typeof InfoBlock> = {
  title: "Components/InfoBlock",
  component: InfoBlock,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["normal", "error", "warning", "success", "neutral"],
      description: "Defines the style of the InfoBlock.",
      table: {
        type: { summary: "normal | error | warning | success | neutral" },
        defaultValue: { summary: "normal" },
      },
    },
    asChild: {
      control: { type: "boolean" },
      description: "Renders a custom element if set to true.",
      defaultValue: false,
    },
    className: {
      control: false,
      description: "Additional classes for styling.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The `InfoBlock` component is used to display context-aware messages like errors, warnings, or neutral information blocks.",
      },
    },
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof InfoBlock>;

export const Default: Story = {
  args: {
    variant: "normal",
    children: "This is a normal InfoBlock message.",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "This is an error message.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "This is a warning message.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "This is a success message.",
  },
};

export const Neutral: Story = {
  args: {
    variant: "neutral",
    children: "This is a neutral message.",
  },
};

export const CustomElement: Story = {
  args: {
    asChild: true,
    children: <span>This is an InfoBlock rendered as a custom element.</span>,
  },
};
