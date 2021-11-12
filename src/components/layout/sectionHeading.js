import * as React from "react"
import PropTypes from "prop-types"
import { Box, Text } from "@chakra-ui/react"

const SectionHeading = ({ heading, subheading }) => (
  <Box marginY={14} textAlign="center">
    <Text as="h3"
      color={'gray.700'}
      fontWeight={700}
      lineHeight={1.3}
      fontSize={{ base: '1.4rem', md: '1.4rem' }}
      >
        {heading}
    </Text>
    <Text as="p"
      textAlign="center"
      color={'gray.500'}
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
 