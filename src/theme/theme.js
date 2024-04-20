const color = {
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  slateGray: "#6E7E91",
  dodgerBlue: "#2188FF",
  scienceBlue: "#0366D6",
  mineShaft: "#252525",
};

export const lightTheme = {
  colors: {
    background: {
      body: color.whiteLilac,
      mailButton: color.scienceBlue,
      listWrapper: color.white,
      repoTile: color.white,
      errorButton: color.scienceBlue,
      footerMailButton: color.whiteLilac,
    },
    font: {
      headerCaption: color.slateGray,
      headerName: color.mineShaft,
      headerAboutMe: color.slateGray,
      headerButtonText: color.white,
      listTitleText: color.mineShaft,
      listBullet: color.scienceBlue,
      listItem: color.slateGray,
      portfolioTitle: color.mineShaft,
      portfolioDescription: color.mineShaft,
      repoTitle: color.scienceBlue,
      repoDescription: color.slateGray,
      linkTitle: color.slateGray,
      directLink: color.scienceBlue,
      loadingText: color.mineShaft,
      errorButton: color.white,
      errorMainInfo: color.mineShaft,
      errorExtraInfo: color.mineShaft,
      footerCaption: color.slateGray,
      footerInfo: color.mineShaft,
      footerMailButton: color.mineShaft,
      footerMailButtonHover: color.scienceBlue,
      themeButtonText: color.slateGray,
    },
    border: {
      listHeaderTitle: "rgba(209, 213, 218, 0.3)",
      repoTile: "rgba(3, 102, 214, 0.2)",
      directLink: color.scienceBlue,
    },
    fill: {
      portfolioIcon: color.scienceBlue,
      footerIcon: color.mineShaft,
      footerIconHover: color.scienceBlue,
    },
  },
  breakpoints: {
    extraLarge: 1280,
    large: 1024,
    medium: 768,
    small: 640,
    extraSmall: 480,
  },
};

export const darkTheme = {
  colors: {
    background: {
      body: color.mineShaft,
      mailButton: color.dodgerBlue,
      listWrapper: "rgba(54, 54, 54, 0.72)",
      repoTile: "rgba(54, 54, 54, 0.72)",
      errorButton: color.dodgerBlue,
      footerMailButton: color.mineShaft,
    },
    font: {
      headerCaption: color.white,
      headerName: color.white,
      headerAboutMe: color.white,
      headerButtonText: color.white,
      listTitleText: color.white,
      listBullet: color.dodgerBlue,
      listItem: color.white,
      portfolioTitle: color.white,
      portfolioDescription: color.white,
      repoTitle: color.white,
      repoDescription: color.white,
      linkTitle: color.white,
      directLink: color.dodgerBlue,
      loadingText: color.white,
      errorButton: color.white,
      errorMainInfo: color.white,
      errorExtraInfo: color.white,
      footerCaption: color.white,
      footerInfo: color.white,
      footerMailButton: color.white,
      footerMailButtonHover: color.dodgerBlue,
      themeButtonText: color.white,
    },
    border: {
      listHeaderTitle: "rgba(209, 213, 218, 0.1)",
      repoTile: "rgba(3, 102, 214, 0.5)",
      directLink: color.dodgerBlue,
    },
    fill: {
      portfolioIcon: color.dodgerBlue,
      footerIcon: color.white,
      footerIconHover: color.dodgerBlue,
    },
  },
  breakpoints: {
    extraLarge: 1280,
    large: 1024,
    medium: 768,
    small: 640,
    extraSmall: 480,
  },
};
