import React from "react"
import { 
  Link } from "gatsby"
import { 
  Avatar, 
  Stack, 
  Text } from "@chakra-ui/react"

const PostInfo = ({ user, date }) => {
    const userData = user
    const postDate = date
        return (
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
              <Avatar
                src={userData.node.avatar.url}
                alt={'Author'}
              />
              <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                <Text fontWeight={600}>                        
                <Link to={userData.node.uri.replace(/\s+/g, "-").toLowerCase()}>
                      {userData.node.name}
                  </Link>
                  </Text>
                <Text color={'gray.500'}><time>{postDate}</time></Text>
              </Stack>
            </Stack>
        )
}

export default PostInfo