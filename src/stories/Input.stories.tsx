import { Meta, StoryObj } from "@storybook/react";
import { Input as InputEl } from "@/registry/ui/inputs/Input";
import { PasswordInput as PasswordInputEl } from "@/registry/ui/inputs/PasswordInput";
import { SearchInput as SearchInputEl } from "@/registry/ui/inputs/SearchInput";

const meta: Meta<typeof InputEl> = {
  title: "Components/Input",
  component: InputEl,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      descripton: "The size of the input.",
      defaultValue: "md",
    },
    disabled: {
      control: "boolean",
      description: "Disable the input field",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input field",
    },
    error: {
      control: "text",
      description: "Error message to display",
    },
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `Input` component displays a form input field or a component that looks like an input field.",
      },
    },
    layout: "centered",
  },
};

export default meta;

type InputStory = StoryObj<typeof InputEl>;

export const Default: InputStory = {
  args: {
    placeholder: "Placeholder text",
    label: "Label text",
  },
};

export const InputWithError: InputStory = {
  args: {
    placeholder: "Placeholder text",
    error: "This field has an error.",
    label: "Label text",
  },
};

const commonArgTypes: any = {
  disabled: {
    control: "boolean",
    description: "Disable the password input field",
  },
  placeholder: {
    control: "text",
    description: "Placeholder text for the password field",
  },
  error: {
    control: "text",
    description: "Error message to display",
  },
  size: {
    control: "select",
    options: ["md", "lg"],
    description: "The size of the input.",
    defaultValue: "md",
  },
  className: {
    control: "text",
    description: "Input container classnames",
  },
};

const baseArgs = {
  placeholder: "Enter password",
  className: "min-w-[400px]",
  label: "Password",
};

type PasswordInputStory = StoryObj<typeof PasswordInputEl>;

// Base configuration for the PasswordInput stories
const BasePasswordInputStory: PasswordInputStory = {
  render: (args) => <PasswordInputEl {...args} onChange={() => {}} />,
  argTypes: commonArgTypes,
};

// Stories
export const PasswordInput: PasswordInputStory = {
  ...BasePasswordInputStory,
  args: {
    ...baseArgs,
    disabled: false,
    error: "",
  },
};

export const PasswordInputWithError: PasswordInputStory = {
  ...BasePasswordInputStory,
  args: {
    ...baseArgs,
    error: "Password is incorrect.",
  },
};

const commonSearchArgTypes: any = {
  disabled: {
    control: "boolean",
    description: "Disable the password input field",
  },
  error: {
    control: "text",
    description: "Error message to display",
  },
  size: {
    control: "select",
    options: ["md", "lg"],
    description: "The size of the input.",
    defaultValue: "md",
  },
  className: {
    control: "text",
    description: "Input container classnames",
  },
};

const baseSearchArgs = {
  placeholder: "Search...",
  className: "min-w-[400px]",
};

type SearchInputStory = StoryObj<typeof SearchInputEl>;

// Base configuration for the SearchInput stories
const BaseSearchInputStory: SearchInputStory = {
  render: (args) => <SearchInputEl {...args} onChange={() => {}} />,
  argTypes: commonSearchArgTypes,
};

// Stories
export const SearchInput: PasswordInputStory = {
  ...BaseSearchInputStory,
  args: {
    ...baseSearchArgs,
    disabled: false,
  },
};
