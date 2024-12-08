module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Estedad: ["Estedad-regular"],
        EstedadMedium: ["Estedad-medium"],
        EstedadBold: ["Estedad-bold"],
        EstedadSemiBold: ["Estedad-semibold"],
        RokhLight: ["Rokh-light"],
        RokhMedium: ["Rokh-medium"],
        RokhNormal: ["Rokh-normal"],
        RokhSemiBold: ["Rokh-semibold"],
        RokhBold: ["Rokh-bold"],
      },
      colors: {
        "gray-tint-4": "#999999",
        "gray-tint-1": "#E6E6E6",

        "brand-black": "#212121",
        "orange-brand": "#FF9447",
        "blue-brand": "#4455E8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
