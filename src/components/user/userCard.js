import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Avatar, Stack, Text} from "@chakra-ui/react"

const UserCard = ({ user, avatarSize }) => {
    const userData = user
    if ( userData ) {
        return (
            <Stack maxW={'md'} mt={6} direction={'row'} spacing={4} align={'start'}>
              <Avatar
                src={userData.node.avatar.url}
                alt={'Author'}
                size={avatarSize}
              />
              <Stack direction={'column'} spacing={0}>
                <Text fontWeight={600}>                        
                <Link to={"../../author/" + userData.node.slug}>
                      {userData.node.name}
                  </Link>
                  </Text>
                <Text fontSize={'sm'}>{userData.node.description} </Text>
              </Stack>
            </Stack>
        )
    }
}

UserCard.propTypes = {
    user: PropTypes.object,
  }
  
UserCard.defaultProps = {
    user: ``,
    avatarSize: `sm`,
  }
  
export default UserCard