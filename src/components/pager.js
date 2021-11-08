import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link } from "@chakra-ui/react"
import { Stack } from "@chakra-ui/react"
import PrimaryButton from "./primaryButton"


const Pager = ({ pageContext, pathPrefix }) => {
const { previousPagePath, nextPagePath } = pageContext
  return (
    <Stack marginY="8" direction="row" spacing={4}>
      {previousPagePath && (
        <Link as={GatsbyLink} to={`/${previousPagePath}`}>
          <PrimaryButton arrowLeft>Previous page</PrimaryButton>
        </Link>
      )}
      {nextPagePath && (
        <Link as={GatsbyLink} to={`/${nextPagePath}`}>
          <PrimaryButton arrowRight>Next page</PrimaryButton>
        </Link>
      )}
    </Stack>
  )
}
export default Pager

