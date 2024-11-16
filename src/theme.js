import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light", //default is light
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    },
    text: {
      secondary: red[500]
    }
  },
  typography: {
    subtitle1: {
      fontSize: 12
    },
    body1: {
      fontWeight: 700
    },
    button: {
      fontStyle: "italic"
    }
  }
})

export default theme
