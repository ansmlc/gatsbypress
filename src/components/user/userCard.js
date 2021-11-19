import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Avatar, Stack, Text} from "@chakra-ui/react"

const UserCard = ({ user, avatarSize }) => {
    const userData = user
    if ( userData ) {
        return (
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
              <Avatar
                src={userData.node.avatar.url}
                alt={'Author'}
                size={avatarSize}
              />
              <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                <Text fontWeight={600}>                        
                <Link to={"../../author/" + userData.node.slug.replace(/\s+/g, "-").toLowerCase()}>
                      {userData.node.name}
                  </Link>
                  </Text>
                <Text color={'gray.500'}>{userData.node.description} </Text>
              </Stack>
            </Stack>
        )
    }
}

UserCard.propTypes = {
    user: PropTypes.array,
  }
  
UserCard.defaultProps = {
    user: ``,
    avatarSize: `sm`,
  }
  
export default UserCard