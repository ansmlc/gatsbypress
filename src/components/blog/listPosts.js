import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { Alert, AlertIcon } from "@chakra-ui/alert"
import { 
  Box, 
  Text, 
  Spacer, 
  Image, 
  Badge, 
  Avatar,
  Flex,
  SimpleGrid,
  AspectRatio
} from "@chakra-ui/react"

  // Show author info in the card only if not in user profile page
  const PostAuthorInfo = ({ postAuthor, postDate }) => (
    <Flex alignItems="center">
      <Box>
        <Avatar
          src={postAuthor.avatar.url}
          alt={'Author'}
          size={'sm'}
          alignSelf={'bottom'} />
      </Box>
      <Box fontSize="sm">
        <Flex marginLeft={'2'} direction={'column'}>
          <Box mb="-0.5">
            <Link 
              to={"../../author/" + postAuthor.slug.replace(/\s+/g, "-").toLowerCase()}
            >
              <Text fontWeight={600} color={useColorModeValue('gray.800', 'gray.100')}>
                {postAuthor.name}
              </Text>
            </Link>
          </Box>
          <Box>
            <Text
              as="time"
              color={useColorModeValue('gray.600', 'gray.300')}
            >
              {postDate}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )


// Create Post Card Component
const PostCard = ({ postSlug, postTitle, postExcerpt, postImage, postDate, postTags, postAuthor, key, salAnimationDuration }) => {
  return (
  <Box
    data-sal="slide-up"
    data-sal-delay={salAnimationDuration}
    data-sal-duration={600}
    key={key} 
    maxW="md"
    bg={useColorModeValue('white', 'gray.700')}
    borderRadius="2xl"
    overflow="hidden"
    boxShadow="2xl">
    <AspectRatio ratio={16/9}>
    {postImage ?
    <Link to={"../../post/" + postSlug.replace(/\s+/g, "-").toLowerCase()}>
        <Image
          as={GatsbyImage}
          image={postImage}
          alt={postTitle}
          borderRadius={'2xl'}
          borderBottomRadius="0"  />
    </Link>
    :
    <Link to={"../../post/" + postSlug.replace(/\s+/g, "-").toLowerCase()}>
        <Image
          src="https://via.placeholder.com/1920x1080"
          alt={postTitle || ""}
          rounded={'2xl'} 
          roundedBottomLeft={0}
          roundedBottomRight={0}/>
    </Link>}
    </AspectRatio>
    <Box p="6">
    {
        // Limit number of tags and lines
        // Truncate text in case of large tags
      }
      <Text             
        marginBottom="4"
        noOfLines={1} 
        isTruncated
      >
        {postTags?.slice(0, 3).map(tag => (
          <Text
            as={Link}
            lineHeight="1"
            display="inline"
            marginRight="2"
            to={"../../tag/" + tag.name.replace(/\s+/g, "-").toLowerCase()}
          >
            <Badge
              colorScheme="secondary"
              rounded="full"
              py="1"
              px="2"
            >
              {"# " + tag.name}
            </Badge>
          </Text>
        ))}
      </Text> 
      <Box noOfLines={2}
        as="h2"
        mt="5"
        mb="4"
        fontWeight="semibold"
        lineHeight="1.2"
        fontSize="2xl"
        fontWeight="bold"
      >              
      <Link
          to={"../../post/" + postSlug.replace(/\s+/g, "-").toLowerCase()}>

          {postTitle}
        </Link>
      </Box>
      <Text
        mb="5"
        noOfLines={[3]}
        color="brand.500"
        fontSize="normal"
      >
        <div dangerouslySetInnerHTML={{ __html: postExcerpt }} />
      </Text>
      <PostAuthorInfo 
        postAuthor={postAuthor} 
        postDate={postDate} 
      />
    </Box>
  </Box>
  )
}
const  ListPosts = ({ posts, context }) => {
  const allBlogPosts = posts
  // Get data and return post cards
  if (context === 'author') {
      return ( 
        <SimpleGrid minChildWidth="236px" spacing="20px">
          {allBlogPosts.map((post) => (
            <PostCard 
              key={post.id}
              postSlug={post.slug}
              postTitle={post.title}
              postDate={post.date}
              postImage={post.featuredImage?.node?.localFile?.childImageSharp.gatsbyImageData}
              postTags={post.tags.nodes.slice(0, 3)}
              postExcerpt={post.excerpt}
            />
          ))}
        </SimpleGrid>
      )
  }
  else if (context === 'blog') {
    return (
      <SimpleGrid minChildWidth="236px" spacing="6">
        {allBlogPosts.map((post, i) => (
          <PostCard 
            // salAnimationDuration={i*90}
            key={post.node.id}
            postSlug={post.node.slug}
            postTitle={post.node.title}
            postDate={post.node.date}
            postImage={post.node.featuredImage?.node?.localFile?.childImageSharp.gatsbyImageData}
            postTags={post.node.tags.nodes.slice(0, 3)}
            postExcerpt={post.node.excerpt}
            postAuthor={post.node.author.node}
          />
        ))}
      </SimpleGrid>
    )
  }
  else {
    return (
        <Alert my="4" borderRadius="xl" boxShadow="xl" status="warning">
          <AlertIcon />
          Nothing found. Please add some posts to your WordPress site.
        </Alert>
      )
  }
}

ListPosts.propTypes = {
  posts: PropTypes.array,
  context: PropTypes.string,
}

ListPosts.defaultProps = {
  posts: ``,
  context: `default`,
}

export default ListPosts
 