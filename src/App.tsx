import React, { useState } from "react";
import "./App.css";
import { WBtn } from "./registry/ui/buttons/buttons";
import { SearchInput } from "./registry/ui/inputs/SearchInput";
import { InfoBlock } from "./registry/ui/inputs/InfoBlock";
import {
  Tooltip,
  TooltipWithHeader,
  TooltipWithHeaderAndLink,
} from "./registry/ui/tooltip/Tooltip";

import {
  Badge,
  BadgeWithIcon,
  NotificationBadge,
} from "./registry/ui/badge/Badge";
import { Switch } from "./registry/ui/switch/Switch";
import { Avatar, AvatarWithStatusIcon } from "./registry/ui/avatar/Avatar";
import { Checkbox } from "./registry/ui/checkbox/Checkbox";
import { RadioGroup, RadioGroupItem } from "./registry/ui/radio/Radio";
import { PasswordInput } from "./registry/ui/inputs/PasswordInput";
import { Input } from "./registry/ui/inputs/Input";

type WBtnProps = {
  variant: "primary" | "secondary_blue" | "tertiary" | "secondary_gray";
  size: "sm" | "md" | "lg";
};

const buttons: WBtnProps[][] = [
  [
    { variant: "primary", size: "sm" },
    { variant: "primary", size: "md" },
    { variant: "primary", size: "lg" },
  ],
  [
    { variant: "secondary_blue", size: "sm" },
    { variant: "secondary_blue", size: "md" },
    { variant: "secondary_blue", size: "lg" },
  ],
  [
    { variant: "tertiary", size: "sm" },
    { variant: "tertiary", size: "md" },
    { variant: "tertiary", size: "lg" },
  ],
  [
    { variant: "secondary_gray", size: "sm" },
    { variant: "secondary_gray", size: "md" },
    { variant: "secondary_gray", size: "lg" },
  ],
];

type InfoBlockVariants = "error" | "warning" | "normal" | "success" | "neutral";

const infoBlocks: InfoBlockVariants[] = [
  "error",
  "warning",
  "normal",
  "success",
  "neutral",
];

type TooltipProps = {
  content: string;
  arrowPosition?: "start" | "center" | "end";
  position?: "bottom" | "right" | "top" | "left";
};

type TooltipWithHeaderProps = {
  title: string;
  subTitle: string;
} & Omit<TooltipProps, "content">;

type TooltipWithHeaderAndLink = TooltipWithHeaderProps & {
  linkTo: string;
  linkPlaceholder?: string;
  target?: React.HTMLAttributeAnchorTarget | undefined;
};

const tooltips: Record<
  "tooltip" | "tooltipWithHeader" | "tooltipWithHeaderAndLink",
  (TooltipProps | TooltipWithHeaderProps | TooltipWithHeaderAndLink)[]
> = {
  tooltip: [
    { content: "Tooltip content", position: "top" },
    { content: "Tooltip content", position: "right" },
    { content: "Tooltip content", position: "bottom" },
    { content: "Tooltip content", position: "left" },
  ],
  tooltipWithHeader: [
    {
      title: "Header",
      subTitle: "Hint content",
      position: "top",
    },
    {
      title: "Header",
      subTitle: "Hint content",
      position: "right",
    },
    {
      title: "Header",
      subTitle: "Hint content",
      position: "bottom",
    },
    {
      title: "Header",
      subTitle: "Hint content",
      position: "left",
    },
  ],
  tooltipWithHeaderAndLink: [
    {
      title: "Header",
      subTitle: "Tooltip content",
      linkTo: "https://google.com",
      linkPlaceholder: "Link",
      position: "top",
    },
    {
      title: "Header",
      subTitle: "Tooltip content",
      linkTo: "https://google.com",
      linkPlaceholder: "Link",
      position: "right",
    },
    {
      title: "Header",
      subTitle: "Tooltip content",
      linkTo: "https://google.com",
      linkPlaceholder: "Link",
      position: "bottom",
    },
    {
      title: "Header",
      subTitle: "Tooltip content",
      linkTo: "https://google.com",
      linkPlaceholder: "Link",
      position: "left",
    },
  ],
};

type TooltipTypes = keyof typeof tooltips;

type BadgeProps = {
  variant: "gray" | "primary" | "error" | "warning" | "success" | "purple";
  size: "sm" | "md" | "lg";
};

const badges: BadgeProps[][] = [
  [
    { variant: "gray", size: "sm" },
    { variant: "gray", size: "md" },
    { variant: "gray", size: "lg" },
  ],
  [
    { variant: "primary", size: "sm" },
    { variant: "primary", size: "md" },
    { variant: "primary", size: "lg" },
  ],
  [
    { variant: "error", size: "sm" },
    { variant: "error", size: "md" },
    { variant: "error", size: "lg" },
  ],
  [
    { variant: "warning", size: "sm" },
    { variant: "warning", size: "md" },
    { variant: "warning", size: "lg" },
  ],
  [
    { variant: "success", size: "sm" },
    { variant: "success", size: "md" },
    { variant: "success", size: "lg" },
  ],
  [
    { variant: "purple", size: "sm" },
    { variant: "purple", size: "md" },
    { variant: "purple", size: "lg" },
  ],
];

type NotificationBadgeProps = {
  innerBadgePosition: "behind" | "after";
  innerBadgeType: "normal" | "with-icon";
  showOuterBadgeIcon: boolean;
  innerBadgeText: string;
  outerBadgeText: string;
  variant: "gray" | "primary" | "error" | "warning" | "success" | "purple";
  size: "md" | "lg";
};

const notificationBadges: NotificationBadgeProps[][] = [
  [
    {
      variant: "gray",
      size: "md",
      innerBadgePosition: "behind",
      innerBadgeType: "normal",
      showOuterBadgeIcon: false,
      innerBadgeText: "New feature",
      outerBadgeText: "We've just released a new feature",
    },
    {
      variant: "gray",
      size: "lg",
      innerBadgePosition: "behind",
      innerBadgeType: "normal",
      showOuterBadgeIcon: false,
      innerBadgeText: "New feature",
      outerBadgeText: "We've just released a new feature",
    },
    {
      variant: "gray",
      size: "md",
      innerBadgePosition: "after",
      innerBadgeType: "normal",
      innerBadgeText: "New Feature",
      outerBadgeText: "We've just released a new feature",
      showOuterBadgeIcon: false,
    },
    {
      variant: "gray",
      size: "lg",
      innerBadgePosition: "after",
      innerBadgeType: "normal",
      innerBadgeText: "New Feature",
      outerBadgeText: "We've just released a new feature",
      showOuterBadgeIcon: true,
    },
  ],
  [
    {
      variant: "primary",
      size: "md",
      innerBadgePosition: "behind",
      innerBadgeType: "normal",
      showOuterBadgeIcon: true,
      innerBadgeText: "New feature",
      outerBadgeText: "We've just released a new feature",
    },
    {
      variant: "primary",
      size: "lg",
      innerBadgePosition: "behind",
      innerBadgeType: "normal",
      showOuterBadgeIcon: false,
      innerBadgeText: "New feature",
      outerBadgeText: "We've just released a new feature",
    },
    {
      variant: "primary",
      size: "md",
      innerBadgePosition: "after",
      innerBadgeType: "with-icon",
      innerBadgeText: "New Feature",
      outerBadgeText: "We've just released a new feature",
      showOuterBadgeIcon: false,
    },
    {
      variant: "primary",
      size: "lg",
      innerBadgePosition: "after",
      innerBadgeType: "with-icon",
      innerBadgeText: "New Feature",
      outerBadgeText: "We've just released a new feature",
      showOuterBadgeIcon: true,
    },
  ],
];

type AvatarProps = {
  size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
};

const avatars: AvatarProps[] = [
  { size: "xs" },
  { size: "sm" },
  { size: "md" },
  { size: "lg" },
  { size: "xl" },
  { size: "2xl" },
];

type AvatarWithOnlineIndicatorProps = {
  size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  variant: "online" | "away";
};

const avatarsWithStatusIcon: AvatarWithOnlineIndicatorProps[] = [
  { size: "xs", variant: "online" },
  { size: "sm", variant: "online" },
  { size: "md", variant: "online" },
  { size: "lg", variant: "online" },
  { size: "xl", variant: "online" },
  { size: "2xl", variant: "online" },
];

const avatarsWithStatusIcon2: AvatarWithOnlineIndicatorProps[] = [
  { size: "xs", variant: "away" },
  { size: "sm", variant: "away" },
  { size: "md", variant: "away" },
  { size: "lg", variant: "away" },
  { size: "xl", variant: "away" },
  { size: "2xl", variant: "away" },
];

function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <h1 className="text-center font-bold text-xl mt-6 text-black">
        Component Library
      </h1>
      <h2 className="text-black text-lg my-4">Buttons</h2>
      {buttons.map((group) => (
        <div className="gap-4 flex items-center my-6">
          {group.map((variation) => (
            <WBtn {...variation}>Button</WBtn>
          ))}
        </div>
      ))}
      <h2 className="text-black my-4 mt-6 text-lg">Inputs</h2>
      <h3 className="text-gray-500 text-sm mb-4">Search Input</h3>
      <SearchInput
        onBlur={() => {}}
        onChange={(e: any) => setSearchText(e.target.value)}
        name="search"
        disabled={true}
        defaultValue="Some Value"
      />
      <SearchInput
        onBlur={() => {}}
        onChange={(e: any) => setSearchText(e.target.value)}
        name="search"
        defaultValue=""
      />

      <h3 className="text-gray-500 text-sm mb-4">Password Input</h3>
      <PasswordInput
        onBlur={() => {}}
        onChange={(e: any) => {}}
        name="password"
        placeholder="Enter your password"
        label={"Password"}
      />

      <PasswordInput
        onBlur={() => {}}
        onChange={(e: any) => {}}
        name="password"
        placeholder="Confirm Password"
        label={"Password"}
        size={"lg"}
        error="Password must contain at least one uppercase, lowercase, numeric and special character"
      />

      {/* Base Input */}
      <h3 className="text-gray-500 text-sm mb-4">Base Input</h3>
      <Input
        onBlur={() => {}}
        onChange={(e: any) => {}}
        name="firstname"
        placeholder="First name"
        label={"First name"}
        size={"sm"}
      />
      <Input
        onBlur={() => {}}
        onChange={(e: any) => {}}
        name="lastname"
        placeholder="Last name"
        label={"Last name"}
        size={"md"}
      />
      <Input
        onBlur={() => {}}
        onChange={(e: any) => {}}
        name="email"
        placeholder="Email"
        label={"Email"}
        size={"lg"}
        error="Invalid email"
      />

      <h2 className="text-black my-4 mt-6 text-lg">Info Blocks</h2>
      {infoBlocks.map((variant) => (
        <div className="mt-4">
          <InfoBlock variant={variant}>
            Email or password is incorrect
          </InfoBlock>
        </div>
      ))}
      <h2 className="text-black my-4 mt-6 text-lg">Tooltips</h2>
      <div className="grid grid-cols-4 grid-rows-3 gap-6">
        {Object.keys(tooltips).map((key: any) => {
          switch (key as TooltipTypes) {
            case "tooltip": {
              return (
                <>
                  {tooltips[key as TooltipTypes].map((tooltip: any) => (
                    <Tooltip
                      content={tooltip.content}
                      position={tooltip.position}
                    >
                      <i className="fi fi-rr-interrogation text-[#2563EB]"></i>
                    </Tooltip>
                  ))}
                </>
              );
            }
            case "tooltipWithHeader": {
              return (
                <>
                  {tooltips[key as TooltipTypes].map((tooltip: any) => (
                    <TooltipWithHeader
                      title={tooltip.title}
                      subTitle={tooltip.subTitle}
                      position={tooltip.position}
                    >
                      <i className="fi fi-rr-interrogation text-[#2563EB]"></i>
                    </TooltipWithHeader>
                  ))}
                </>
              );
            }
            case "tooltipWithHeaderAndLink": {
              return (
                <>
                  {tooltips[key as TooltipTypes].map((tooltip: any) => (
                    <TooltipWithHeaderAndLink
                      title={tooltip.title}
                      subTitle={tooltip.subTitle}
                      position={tooltip.position}
                      linkTo={tooltip.linkTo}
                      linkPlaceholder={tooltip.linkPlaceholder}
                      target="_blank"
                    >
                      <i className="fi fi-rr-interrogation text-[#2563EB]"></i>
                    </TooltipWithHeaderAndLink>
                  ))}
                </>
              );
            }
            default:
              return (
                <>
                  <Tooltip content={"Tooltip content"}>
                    <i className="fi fi-rr-interrogation text-[#2563EB]"></i>
                  </Tooltip>
                </>
              );
          }
        })}
      </div>
      <h2 className="text-black my-4 mt-6 text-lg">Badges</h2>
      {badges.map((group) => (
        <div className="gap-4 flex items-center my-6">
          {group.map((variation) => (
            <Badge {...variation}>Label</Badge>
          ))}
        </div>
      ))}
      {badges.map((group) => (
        <div className="gap-4 flex items-center my-6">
          {group.map((variation) => (
            <BadgeWithIcon {...variation} iconType="close">
              Label
            </BadgeWithIcon>
          ))}
        </div>
      ))}
      {badges.map((group) => (
        <div className="gap-4 flex items-center my-6">
          {group.map((variation) => (
            <BadgeWithIcon {...variation} iconType="right">
              Label
            </BadgeWithIcon>
          ))}
        </div>
      ))}
      {badges.map((group) => (
        <div className="gap-4 flex items-center my-6">
          {group.map((variation) => (
            <BadgeWithIcon {...variation} iconType="up" iconPostion="behind">
              Label
            </BadgeWithIcon>
          ))}
        </div>
      ))}
      {notificationBadges.map((group) => (
        <div className="gap-4 flex items-center flex-wrap my-6">
          {group.map((variation) => (
            <NotificationBadge {...variation} />
          ))}
        </div>
      ))}

      <h2 className="text-black my-4 mt-6 text-lg">Switch</h2>
      <div className="gap-4 flex items-center my-6">
        <Switch />
        <Switch checked={true} />
        <Switch disabled />
        <Switch disabled checked />
      </div>

      <h2 className="text-black my-4 mt-6 text-lg">Avatars</h2>
      <div className="gap-4 flex items-center my-6">
        {avatars.map(({ size }) => (
          <Avatar
            imageSrc="https://firebasestorage.googleapis.com/v0/b/philipthedeveloper-p.appspot.com/o/olivia%20rhye.jpeg?alt=media&token=19ef8327-5598-42e0-af24-06bace98c934"
            altText="Philip"
            size={size}
          />
        ))}
      </div>

      <div className="gap-4 flex items-center my-6">
        {avatarsWithStatusIcon.map(({ size, variant }) => (
          <AvatarWithStatusIcon
            imageSrc="https://firebasestorage.googleapis.com/v0/b/philipthedeveloper-p.appspot.com/o/olivia%20rhye.jpeg?alt=media&token=19ef8327-5598-42e0-af24-06bace98c934"
            altText="Philip"
            size={size}
            variant={variant}
            statusIconType="online-indicator"
          />
        ))}
      </div>

      <div className="gap-4 flex items-center my-6">
        {avatarsWithStatusIcon2.map(({ size, variant }) => (
          <AvatarWithStatusIcon
            imageSrc="https://firebasestorage.googleapis.com/v0/b/philipthedeveloper-p.appspot.com/o/olivia%20rhye.jpeg?alt=media&token=19ef8327-5598-42e0-af24-06bace98c934"
            altText="Philip"
            size={size}
            variant={variant}
            statusIconType="online-indicator"
          />
        ))}
      </div>

      <div className="gap-4 flex items-center my-6">
        {avatarsWithStatusIcon.map(({ size }) => (
          <AvatarWithStatusIcon
            imageSrc="https://firebasestorage.googleapis.com/v0/b/philipthedeveloper-p.appspot.com/o/olivia%20rhye.jpeg?alt=media&token=19ef8327-5598-42e0-af24-06bace98c934"
            altText="Philip"
            size={size}
            statusIconType="company"
            companyIconType="image"
            companyIconImageSrc="https://firebasestorage.googleapis.com/v0/b/philipthedeveloper-p.appspot.com/o/company-icon.jpeg?alt=media&token=c9c87246-7c2b-4b31-ae8b-1681b2ed6805"
          />
        ))}
      </div>

      {/* AVATARS WITH FEEDBACK  */}
      <div className="gap-4 flex items-center my-6">
        {avatars.map(({ size }) => (
          <Avatar imageSrc="" altText="Philip" size={size} fallbackText="OR" />
        ))}
      </div>

      <div className="gap-4 flex items-center my-6">
        {avatarsWithStatusIcon.map(({ size, variant }) => (
          <AvatarWithStatusIcon
            imageSrc=""
            altText="Philip"
            size={size}
            variant={variant}
            statusIconType="online-indicator"
            fallbackText="OR"
          />
        ))}
      </div>

      <div className="gap-4 flex items-center my-6">
        {avatarsWithStatusIcon.map(({ size }) => (
          <AvatarWithStatusIcon
            imageSrc=""
            altText="Philip"
            size={size}
            statusIconType="company"
            companyIconType="image"
            companyIconImageSrc="https://firebasestorage.googleapis.com/v0/b/philipthedeveloper-p.appspot.com/o/company-icon.jpeg?alt=media&token=c9c87246-7c2b-4b31-ae8b-1681b2ed6805"
            fallbackText="OR"
          />
        ))}
      </div>

      {/* AVATAR WITH FEEDBACK ELEMENT */}
      <div className="gap-4 flex items-center my-6">
        {avatars.map(({ size }) => (
          <Avatar
            imageSrc=""
            altText="Philip"
            size={size}
            fallbackEl={'<i class="flex fi fi-rs-user"></i>'}
          />
        ))}
      </div>

      <div className="gap-4 flex items-center my-6">
        {avatarsWithStatusIcon.map(({ size, variant }) => (
          <AvatarWithStatusIcon
            imageSrc=""
            altText="Philip"
            size={size}
            variant={variant}
            statusIconType="online-indicator"
            fallbackEl={<i className="flex fi fi-rs-user"></i>}
          />
        ))}
      </div>

      <div className="gap-4 flex items-center my-6">
        {avatarsWithStatusIcon.map(({ size }) => (
          <AvatarWithStatusIcon
            imageSrc=""
            altText="Philip"
            size={size}
            statusIconType="company"
            companyIconType="image"
            companyIconImageSrc="https://firebasestorage.googleapis.com/v0/b/philipthedeveloper-p.appspot.com/o/company-icon.jpeg?alt=media&token=c9c87246-7c2b-4b31-ae8b-1681b2ed6805"
            fallbackEl={<i className="flex fi fi-rs-user"></i>}
          />
        ))}
      </div>

      {/* CHECKBOX */}
      <h2 className="text-black my-4 mt-6 text-lg">Checkbox</h2>
      <div className="gap-4 flex items-center my-6">
        <Checkbox />
        <Checkbox checked={true} />
        <Checkbox disabled />
        <Checkbox disabled checked />
      </div>

      <div className="gap-4 flex items-center my-6">
        {/* MEDIUM SIZED CHECKBOX */}
        <Checkbox size={"md"} variant={"default-md"} iconType="minus" />
        <Checkbox
          checked={true}
          size={"md"}
          variant={"default-md"}
          iconType="minus"
        />
        <Checkbox
          disabled
          size={"md"}
          variant={"default-md"}
          iconType="minus"
        />
        <Checkbox
          disabled
          checked
          size={"md"}
          variant={"default-md"}
          iconType="minus"
        />
      </div>

      {/* CIRCULAR VARINAT CHECKBOX */}
      <div className="gap-4 flex items-center my-6">
        <Checkbox variant={"circle"} />
        <Checkbox checked={true} variant={"circle"} />
        <Checkbox disabled variant={"circle"} />
        <Checkbox disabled checked variant={"circle"} />
      </div>

      <div className="gap-4 flex items-center my-6">
        {/* MEDIUM SIZED CHECKBOX */}
        <Checkbox size={"md"} variant={"circle"} />
        <Checkbox checked={true} size={"md"} variant={"circle"} />
        <Checkbox disabled size={"md"} variant={"circle"} />
        <Checkbox disabled checked size={"md"} variant={"circle"} />
      </div>

      {/* Radio */}
      <h2 className="text-black my-4 mt-6 text-lg">Radio</h2>

      <RadioGroup className="gap-4 flex items-center my-6">
        <RadioGroupItem value={"some-value"} />
        <RadioGroupItem value={"some-value"} checked={true} />
        <RadioGroupItem value={"some-value"} disabled />
        <RadioGroupItem value={"some-value"} disabled checked />
      </RadioGroup>

      {/* MEDIUM SIZED CHECKBOX */}
      <RadioGroup className="gap-4 flex items-center my-6">
        <RadioGroupItem value={"some-value"} size={"md"} />
        <RadioGroupItem value={"some-value"} checked={true} size={"md"} />
        <RadioGroupItem value={"some-value"} disabled size={"md"} />
        <RadioGroupItem value={"some-value"} disabled checked size={"md"} />
      </RadioGroup>
    </>
  );
}

export default App;
