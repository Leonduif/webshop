const SCREENSIZES = {
  mobile: 700,
  tablet: 900,
  desktop: 1200,
};

const makeMedia = (from: null | number, to?: null | number) =>
  `@media screen${from ? ` and (min-width: ${from}px)` : ""}${
    to ? ` and (max-width: ${to - 1}px)` : ""
  }`;

export const COLORS = {
  primary: "#30bced",
  secondary: "#303036",
  white: "#fffaff",
  standout: "#fc5130",
  black: "#050401",
};

export const media = {
  mobile: makeMedia(SCREENSIZES.mobile),
  tablet: makeMedia(SCREENSIZES.tablet),
  desktop: makeMedia(SCREENSIZES.desktop),
};
