import { Meta, StoryObj } from "@storybook/react";
import { WBtn as Button } from "@/registry/ui/buttons/buttons";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "secondary_blue",
        "tertiary",
        "secondary_gray",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "The style variant of the button.",
      defaultValue: "primary",
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "md", "lg", "icon"],
      description: "The size of the button.",
      defaultValue: "md",
    },
    asChild: {
      control: "boolean",
      description: "If true, renders the button as a child component.",
      defaultValue: false,
    },
    customStyle: {
      control: "text",
      description: "Additional custom styles for WBtn.",
      table: {
        category: "WBtn",
      },
    },
    children: {
      control: "text",
      description: "Content of the button.",
      defaultValue: "Click Me",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button when true.",
      defaultValue: false,
    },
    onClick: { action: "clicked", description: "Click event handler." },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary button story
export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Primary",
  },
};

// Secondary blue button story
export const SecondaryBlue: Story = {
  args: {
    variant: "secondary_blue",
    size: "md",
    children: "Secondary Blue",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    size: "md",
    children: "Tertiary",
  },
};

export const WithCustomStyle: Story = {
  args: {
    variant: "secondary_gray",
    size: "sm",
    customStyle: "bg-red-500 hover:bg-red-700 text-white",
    children: "Custom Styled Button",
  },
};

export const IconButton: Story = {
  args: {
    variant: "ghost",
    size: "icon",
    children: "🔍",
  },
};

export const LinkButton = {
  args: {
    variant: "link",
    size: "default",
    children: "Link Button",
  },
};
