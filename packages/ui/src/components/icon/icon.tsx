import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export const LightModeIcon = () => {
  return (
    <SunIcon height={'1.6rem'} width={'1.6rem'} />
  );
};

export const DarkModeIcon = () => {
  return (
    <MoonIcon height={'1.6rem'} width={'1.6rem'} />
  )
}
