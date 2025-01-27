import { Meta, StoryObj } from "@storybook/react";
import {
  Tooltip,
  TooltipWithHeader as TooltipWithHeaderEl,
  TooltipWithHeaderAndLink as TooltipWithHeaderAndLinkEl,
} from "@/registry/ui/tooltip/Tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    position: {
      control: { type: "select" },
      options: ["top", "right", "bottom", "left"],
      description: "Position of the tooltip relative to the target element.",
      defaultValue: "top",
    },
    arrowPosition: {
      control: { type: "select" },
      options: ["center", "start", "end"],
      description: "Position of the tooltip's arrow.",
      defaultValue: "center",
    },
    className: {
      control: "text",
      description: "Additional class names for the tooltip.",
    },
    tooltipArrowBorderColor: {
      control: "color",
      description: "Border color of the tooltip arrow.",
    },
    tooltipContainerClassName: {
      control: "text",
      description: "Class names for the tooltip container.",
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Tooltip
export const Default: Story = {
  args: {
    position: "top",
    arrowPosition: "center",
    content: "This is a tooltip",
    children: <button>Hover me</button>,
  },
  argTypes: {
    content: {
      control: "text",
      description: "The content displayed inside the tooltip.",
    },
  },
};

// Tooltip with Header
export const TooltipWithHeader: StoryObj<typeof TooltipWithHeaderEl> = {
  render: (args) => <TooltipWithHeaderEl {...args} />,
  args: {
    title: "Tooltip Header",
    subTitle: "Additional information about the tooltip.",
    position: "top",
    arrowPosition: "center",
    className: "bg-[#1F2937] text-white",
    children: <button>Hover me</button>,
  },
  argTypes: {
    title: {
      control: "text",
      description: "Header text for the tooltip.",
    },
    subTitle: {
      control: "text",
      description: "Subtitle text for the tooltip.",
    },
  },
};

// Tooltip with Header and Link
export const TooltipWithHeaderAndLink: StoryObj<
  typeof TooltipWithHeaderAndLinkEl
> = {
  render: (args) => <TooltipWithHeaderAndLinkEl {...args} />,
  args: {
    title: "Header",
    subTitle: "Additional information",
    linkTo: "https://example.com",
    linkPlaceholder: "Learn more",
    position: "top",
    arrowPosition: "center",
    children: <button>Hover me</button>,
  },
  argTypes: {
    title: {
      control: "text",
      description: "Header text for the tooltip.",
    },
    subTitle: {
      control: "text",
      description: "Subtitle text for the tooltip.",
    },
    linkTo: {
      control: "text",
      description: "URL for the link inside the tooltip.",
    },
    linkPlaceholder: {
      control: "text",
      description: "Placeholder text for the link.",
    },
    target: {
      control: { type: "select" },
      options: ["_self", "_blank", "_parent", "_top"],
      description: "Target attribute for the link.",
    },
  },
};
