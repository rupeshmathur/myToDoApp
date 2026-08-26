import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#2F5D8C"
        },

        background: {
            default: "#F4F6F8",
            paper: "#FFFFFF"
        },

        text: {
            primary: "#263238",
            secondary: "#607080"
        },

        success: {
            main: "#4F7658"
        },

        error: {
            main: "#B54A4A"
        },

        divider: "#D9E0E7"
    },

    shape: {
        borderRadius: 8
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#F4F6F8",
                    margin: 0
                }
            }
        }
    }
});

export default theme;