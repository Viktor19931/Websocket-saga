import { css, ThemedCssFunction } from "styled-components";

type MediaSizes = {
  [key in keyof DesktopFirstSizes<number>]: ThemedCssFunction<any>;
};

type DesktopFirstSizes<T> = {
  phone: T;
};

export const setMedia = (size: number) => (
  strings: TemplateStringsArray,
  ...args: string[]
) => css`
  @media (max-width: ${size}px) {
    ${css(strings, ...args)};
  }
`;

const desktopFirstSizes: DesktopFirstSizes<number> = {
  phone: 400,
};

export const media: MediaSizes = Object.keys(desktopFirstSizes).reduce<
  MediaSizes
>((acc: MediaSizes, label: keyof DesktopFirstSizes<number>) => {
  acc[label] = setMedia(desktopFirstSizes[label]);
  return acc;
}, {} as MediaSizes);
