// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  colors: {
    brand: {
      50: '#fff7f7', 
      100: '#fef0f0', 
      200: '#fdd9d9', 
      300: '#fbc1c1', 
      400: '#f89393', 
      500: '#f56565', 
      600: '#dd5b5b', 
      700: '#b84c4c', 
      800: '#933d3d', 
      900: '#783131'
    },
    secondary: {
      50: '#E2F6FF',
      100: '#CDF0FF',
      200: '#A4E4FF',
      300: '#7CD8FF',
      400: '#53CBFF',
      500: '#2ABFFF',
      600: '#00A9F1',
      700: '#0081B9',
      800: '#005A81',
      900: '#003349',
    },
    gray: {
      50: '#F4F5F6', 
      100: '#E9EBEE', 
      200: '#D2D7DC', 
      300: '#BBC2CA', 
      400: '#A4AEB8', 
      500: '#8D99A6', 
      600: '#6E7D8D', 
      700: '#55616D', 
      800: '#3D454E', 
      900: '#24292E'
    },
  },
  styles: {
    global: (props) => ({
      body: {
        backgroundColor: props.colorMode === "dark" ? "gray.800" : "gray.50",
      },
      p: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.700",
      },
      ol: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.700",
      },
      ul: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.700", 
      },
      h1: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.700",
      },
      h2: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.700",
      },
      h3: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.700",
      },
      h4: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.700",
      },
      h5: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.700",
      },
      blockquote: {
        p: {       
          color: props.colorMode === "dark" ? "gray.50" : "gray.700",
        }
      },
      ".wysiwyg": {
        img: {
          borderRadius: "2xl",
        },
        a: {
          color: "secondary.500",
          textDecoration: "underline"
        },
      },
    }),
  },

})


export default extendTheme(theme)

