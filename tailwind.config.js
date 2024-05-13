import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      "ANA": "#F47A38",
      "UTA": "#b0d4e8",
      "BOS": "#FFB81C",
      "BUF": "#003087",
      "CGY": "#D2001C",
      "CAR": "#CE1126",
      "CHI": "#CF0A2C",
      "COL": "#6F263D",
      "CBJ": "#002654",
      "DAL": "#006847",
      "DET": "#CE1126",
      "EDM": "#FF4C00",
      "FLA": "#C8102E",
      "LAK": "#A2AAAD",
      "MIN": "#154734",
      "MTL": "#AF1E2D",
      "NSH": "#FFB81C",
      "NJD": "#CE1126",
      "NYI": "#F47D30",
      "NYR": "#0038A8",
      "OTT": "#DA1A32",
      "PHI": "#F74902",
      "PIT": "#CFC493",
      "STL": "#002F87",
      "SJS": "#006D75",
      "SEA": "#99D9D9",
      "TBL": "#002868",
      "TOR": "#00205B",
      "VAN": "#00205B",
      "VGK": "#B4975A",
      "WSH": "#C8102E",
      "WPG": "#004C97"
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    addCommonColors: true,
  })],
}
