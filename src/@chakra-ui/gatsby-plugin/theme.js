// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
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
      50: '#f2fcfe',
      100: '#e6f8fd',
      200: '#c0eefb',
      300: '#99e3f9',
      400: '#4dcff4',
      500: '#01baef',
      600: '#01a7d7',
      700: '#018cb3',
      800: '#01708f',
      900: '#005b75',
    },
 
    gray: {
      50: '#f7f7f7', 
      100: '#f0f0f0', 
      200: '#d9d9d9', 
      300: '#c2c2c2', 
      400: '#949494', 
      500: '#666666', 
      600: '#5c5c5c', 
      700: '#4d4d4d', 
      800: '#3d3d3d', 
      900: '#323232'
    }
  },
  styles: {
    global: {
      ".wysiwyg": {
        a: {
          color: "secondary.500",
          textDecoration: "underline"
        },
      },
    },
  },
  components: {
    Link: {
      variants: {
        // you can name it whatever you want
        primary: ({ colorScheme = "secondary" }) => ({
          color: `${colorScheme}.500`,
          textDecoration: `underline`,
          _hover: {
            color: `${colorScheme}.400`,
          },
        }),
      },
      defaultProps: {
        // you can name it whatever you want
        variant: "primary",
      },
    },
  },
})


export default extendTheme(theme)

