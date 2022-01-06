import { extendTheme } from "@chakra-ui/react"

const Heading = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
  },
}

const theme = extendTheme({
  components: {
    Heading,
  },
  // Default color mode
  initialColorMode: "light",
  useSystemColorMode: false,
  // Colors used in the site
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
        color: props.colorMode === "dark" ? "gray.50" : "gray.800",
      },
      ol: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.800",
      },
      ul: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.800", 
      },
      h1: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.800",
      },
      h2: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.800",
      },
      h3: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.800",
      },
      h4: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.800",
      },
      h5: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.800",
      },
      blockquote: {
        p: {       
          color: props.colorMode === "dark" ? "gray.50" : "gray.800",
        }
      },
      // Style content field in postTemplate.js & pageTemplate.js
      ".wysiwyg": {
        
        img: {
          borderRadius: "xl",
        },
        a: {
          color: "secondary.500",
          textDecoration: "underline"
        },
      },
      ".mailchimpMessage": {
        a: {
          textDecoration: "underline",
          color: "secondary.600"
        }
      }
    }),
  },
})


export default extendTheme(theme)

