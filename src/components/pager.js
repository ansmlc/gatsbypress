import React from "react"
import { Link  } from "gatsby"
import { Stack } from "@chakra-ui/react"
import PrimaryButton from "./primaryButton"


const Pager = ({ pageContext, pathPrefix }) => {
const { previousPagePath, nextPagePath } = pageContext
  return (
    <Stack marginY="8" direction="row" spacing={4}>
      {previousPagePath && (
        <Link to={`/${previousPagePath}`}>
          <PrimaryButton arrowLeft>Previous page</PrimaryButton>
        </Link>
      )}
      {nextPagePath && (
        <Link to={`/${nextPagePath}`}>
          <PrimaryButton arrowRight>Next page</PrimaryButton>
        </Link>
      )}
    </Stack>
  )
}
export default Pager

