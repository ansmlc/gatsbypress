import * as React from "react"
import PropTypes from "prop-types"
import { Box, Text } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { Heading } from "@chakra-ui/layout"

const SectionHeading = ({ heading, subheading, mt, mb }) => (
  <Box mt={mt} mb={mb} textAlign="center">
    <Heading as="h3"
      fontWeight={700}
      lineHeight={1.3}
      fontSize={{ base: '1.4rem', md: '1.4rem' }}
      >
        {heading}
    </Heading>
    <Text as="p"
      textAlign="center"
      color={useColorModeValue('gray.600', 'gray.300')}
      fontWeight={400}
      lineHeight={1.3}
      mt="0.3rem"
      fontSize={{ base: '0.9rem', md: '0.9rem' }}
    >
        {subheading}
    </Text>
  </Box>
)

SectionHeading.propTypes = {
    heading: PropTypes.string,
    subheading: PropTypes.string,
  }
  
SectionHeading.defaultProps = {
    heading: `Your Title Here`,
    subheading: `Lorem ipsum dolor sit la consectetur adipiscing elit sed do eiusmod tempo`,
  }

export default SectionHeading
 