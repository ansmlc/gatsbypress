import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Stack, Text, useColorModeValue, Image } from "@chakra-ui/react"

const UserDescription = ({ user }) => {
  const userData = user 
  return ( 
    <Stack maxW={'md'} align={'start'} my={6} direction={'row'} spacing={4}>
      <Image
        borderRadius='brandRadius.avatar'
        boxSize='50px'
        htmlHeight='50px'
        htmlWidth='50px'
        src={userData.node.avatar.url}
        alt={'Author'} 
      />
      <Stack direction={'column'} spacing={0}>
        <Link to={"../../author/" + userData.node.slug}>
          <Text fontWeight={'bold'} color={useColorModeValue('gray.800', 'gray.100')}>
            {userData.node.name}
          </Text>
        </Link>
        <Text fontSize={'sm'}>{userData.node.description}</Text>
      </Stack>
    </Stack>
  )
}

UserDescription.propTypes = {
    user: PropTypes.object,
  }
  
UserDescription.defaultProps = {
    user: ``,
}
  
export default UserDescription