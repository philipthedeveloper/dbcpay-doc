import { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarWithStatusIcon } from "@/registry/ui/avatar/Avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      description: "The size of the avatar.",
      defaultValue: "md",
    },
    imageSrc: {
      control: "text",
      description: "URL of the avatar image.",
      defaultValue: "",
    },
    altText: {
      control: "text",
      description: "Alt text for the avatar image.",
      defaultValue: "Avatar",
    },
    fallbackText: {
      control: "text",
      description: "Fallback text if the image fails to load.",
      defaultValue: "AB",
    },
    fallbackEl: {
      control: "text",
      description: "Custom fallback element for the avatar (HTML allowed).",
      table: {
        category: "Custom Fallback",
      },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default avatar
export const DefaultAvatar: Story = {
  args: {
    size: "md",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/philipthedeveloper-p.appspot.com/o/olivia%20rhye.jpeg?alt=media&token=19ef8327-5598-42e0-af24-06bace98c934",
    altText: "Philip",
  },
};

// Avatar with fallback text
export const AvatarWithFallback: Story = {
  args: {
    size: "lg",
    imageSrc: "",
    altText: "Philip",
    fallbackText: "CD",
    fallbackEl: '<i class="flex fi fi-rs-user"></i>',
  },
};

// Avatar with a status icon
export const WithStatusIcon = {
  render: (args: any) => (
    <AvatarWithStatusIcon
      {...args}
      variant={args.variant}
      statusIconType={args.statusIconType}
      companyIconType={args.companyIconType}
      companyIconImageSrc={args.companyIconImageSrc}
      iconClassName={args.iconClassName}
      imageSrc={args.imageSrc}
    />
  ),
  args: {
    size: "lg",
    altText: "Avatar with Status Icon",
    statusIconType: "online-indicator",
    variant: "online",
    companyIconType: undefined,
    companyIconImageSrc: "",
    iconClassName: "",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/philipthedeveloper-p.appspot.com/o/olivia%20rhye.jpeg?alt=media&token=19ef8327-5598-42e0-af24-06bace98c934",
  },
  argTypes: {
    statusIconType: {
      control: { type: "select" },
      options: ["online-indicator", "company"],
      description: "Type of status icon displayed.",
    },
    variant: {
      control: { type: "select" },
      options: ["online", "away", undefined],
      description: "Current status of the user",
    },
    companyIconType: {
      control: { type: "select" },
      options: ["image", "icon", undefined],
      description: "Type of company icon displayed.",
    },
    companyIconImageSrc: {
      control: "text",
      description: "URL of the company icon image.",
    },
    iconClassName: {
      control: "text",
      description: "Class name for the status or company icon.",
    },
  },
};
