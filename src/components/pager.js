import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link } from "@chakra-ui/react"
import { Stack } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { BiLeftArrowAlt } from "@react-icons/all-files/bi/BiLeftArrowAlt"
import { BiRightArrowAlt } from "@react-icons/all-files/bi/BiRightArrowAlt"

const Pager = ({ pageContext, pathPrefix }) => {
const { previousPagePath, nextPagePath } = pageContext
  return (
    <Stack direction="row" spacing={4}>b
      {previousPagePath && (
        <Button leftIcon={<BiLeftArrowAlt />} colorScheme="teal" variant="outline">
          <Link as={GatsbyLink} to={`/${previousPagePath}`}>Prev</Link>
        </Button>
      )}
      {nextPagePath && (
        <Button rightIcon={<BiRightArrowAlt />} colorScheme="teal" variant="outline">
          <Link as={GatsbyLink} to={`/${nextPagePath}`}>Next</Link>
        </Button>
      )}
    </Stack>
  )
}
export default Pager

