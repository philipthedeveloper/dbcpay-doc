import { Meta, StoryObj } from "@storybook/react";
import {
  Badge,
  BadgeWithIcon as BadgeWithIconEl,
  NotificationBadge as NotificationBadgeEl,
} from "@/registry/ui/badge/Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["gray", "primary", "error", "warning", "success", "purple"],
      description: "The variant of the badge.",
      defaultValue: "primary",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "The size of the badge.",
      defaultValue: "md",
    },
    className: {
      control: "text",
      description: "Additional class names for the badge.",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Badge
export const DefaultBadge: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Badge",
  },
};

// Badge with Icon
export const BadgeWithIcon: StoryObj<typeof BadgeWithIconEl> = {
  render: (args) => (
    <BadgeWithIconEl {...args}>Badge with Icon</BadgeWithIconEl>
  ),
  args: {
    variant: "success",
    size: "lg",
    iconType: "right",
    iconPostion: "after",
    children: "Badge",
  },
  argTypes: {
    iconType: {
      control: { type: "select" },
      options: ["close", "right", "up"],
      description: "Type of the icon displayed inside the badge.",
    },
    iconPostion: {
      control: { type: "select" },
      options: ["behind", "after"],
      description: "Position of the icon relative to the badge content.",
    },
  },
};

// Notification Badge
export const NotificationBadge: StoryObj<typeof NotificationBadgeEl> = {
  render: (args) => <NotificationBadgeEl {...args} />,
  args: {
    variant: "error",
    size: "lg",
    innerBadgePosition: "behind",
    innerBadgeType: "normal",
    showOuterBadgeIcon: true,
    innerBadgeText: "2",
    outerBadgeText: "Notifications",
  },
  argTypes: {
    innerBadgePosition: {
      control: { type: "select" },
      options: ["behind", "after"],
      description: "Position of the inner badge relative to the outer badge.",
    },
    innerBadgeType: {
      control: { type: "select" },
      options: ["normal", "with-icon"],
      description: "Type of the inner badge.",
    },
    showOuterBadgeIcon: {
      control: "boolean",
      description: "Whether to show an icon in the outer badge.",
    },
    innerBadgeText: {
      control: "text",
      description: "Text for the inner badge.",
    },
    outerBadgeText: {
      control: "text",
      description: "Text for the outer badge.",
    },
  },
};
