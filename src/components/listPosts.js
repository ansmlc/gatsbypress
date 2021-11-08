import * as React from "react"
import PropTypes, { object } from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { 
  Box, 
  Text, 
  Spacer, 
  Image, 
  Badge, 
  Flex,
  Avatar,
  Stack
} from "@chakra-ui/react"
import { SimpleGrid } from "@chakra-ui/react"
import { AspectRatio } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/color-mode"

// Create Post Card Component
const PostCard = ({ postSlug, postTitle, postExcerpt, postImage, postDate, postTags, postAuthor, key }) => {
  let postAuthorStack = ""
  // Remove author if page is author page
  if (postAuthor) {
    postAuthorStack = 
      <Stack mt={4} direction={'row'} spacing={4} align={'center'}>
        <Avatar
          src={postAuthor.avatar.url}
          alt={'Author'}
          size={'sm'} 
        />
        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
          <Text fontWeight={600}>
            <Link to={"../../author/" + postAuthor.slug.replace(/\s+/g, "-").toLowerCase()}>
              {postAuthor.name}
            </Link>
          </Text>
          <Text color={'gray.500'}><time>{postDate}</time></Text>
        </Stack>
      </Stack>
  }
  return (
  <Box 
    key={key} 
    maxW="md"
    bg={useColorModeValue('white', 'gray.700')}
    borderRadius="2xl"
    overflow="hidden"
    boxShadow="2xl">
    {postImage ?
      <Link to={"../../post/" + postSlug.replace(/\s+/g, "-").toLowerCase()}>
        <AspectRatio ratio={16 / 9}>
          <Image
            as={GatsbyImage}
            image={postImage}
            alt={postTitle}
            rounded={'2xl'} 
            roundedBottomLeft={0}
            roundedBottomRight={0} />
        </AspectRatio>
      </Link>
      :
      <Link to={"../../post/" + postSlug.replace(/\s+/g, "-").toLowerCase()}>
        <AspectRatio ratio={16 / 9}>
          <Image
            src="https://via.placeholder.com/1920x1080"
            alt={postTitle || ""}
            rounded={'2xl'} 
            roundedBottomLeft={0}
            roundedBottomRight={0}/>
        </AspectRatio>
      </Link>}
    <Box p="6">
      <Box noOfLines={2}
        as="h2"
        mb="3"
        fontWeight="semibold"
        lineHeight="1.1"
        fontSize="1.4rem"
        fontWeight="bold"
      >
        <Link
          to={"../../post/" + postSlug.replace(/\s+/g, "-").toLowerCase()}>

          {postTitle}
        </Link>
      </Box>
      {
        // List TAGS
        // Limit number of tags and lines
        // Truncate text in case of large tags
      }
      <Text noOfLines={1} isTruncated>
        {postTags?.slice(0, 3).map(tag => (
          <Text
            as={Link}
            display="inline"
            marginRight="0.5rem"
            to={"../../tag/" + tag.name.replace(/\s+/g, "-").toLowerCase()}
          >
            <Badge
              colorScheme="secondary"
            >
              {"# " + tag.name}
            </Badge>
          </Text>
        ))}
      </Text>
      <Text
        my="4"
        noOfLines={[3]}
        color="gray"
        fontSize="sm"
      >
        <div dangerouslySetInnerHTML={{ __html: postExcerpt }} />
      </Text>
      {postAuthorStack}
      <Spacer />
    </Box>
  </Box>
  )
}

const  AllPosts = ({ posts, context }) => {
  const allBlogPosts = posts
  // Get data and return post cards
  if (context == 'author') {
      return ( 
        <SimpleGrid minChildWidth="240px" spacing="20px">
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
  else if (context == 'blog') {
    console.log(allBlogPosts, 'allBlogPosts')
      return (
        <SimpleGrid minChildWidth="240px" spacing="20px">
          {allBlogPosts.map((post) => (
            <PostCard 
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
    return "nothing to see here"
  }
}


AllPosts.propTypes = {
  posts: PropTypes.array,
  context: PropTypes.string,
}

AllPosts.defaultProps = {
  posts: ``,
  context: `default`,
}

export default AllPosts
 