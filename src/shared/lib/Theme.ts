import { createTheme } from "@material-ui/core";

interface ICustomTheme {
    fontSize: {
        sizeName: number
    },
    font: {
        fontName: string
    },
    colors: {
        primary: string
    },
    typography: {
        primary: string
    }
}

declare module '@material-ui/core/styles/createTheme' {
    interface Theme extends ICustomTheme { }
    interface ThemeOptions extends ICustomTheme { }
}

const theme = createTheme({
    fontSize: {
       sizeName: 16
    },

    font: {
      fontName: 'InterRegular, sans-serif'
    },

    colors: {
        primary: "red"
    },

});

export default theme;
