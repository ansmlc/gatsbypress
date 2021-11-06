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
import { PostInfo } from "../components/postInfo"

// Create Post Card Component
const PostCard = ({ postSlug, postTitle, postExcerpt, postImage, postDate, postTags, postAuthor, key }) => {
  let postAuthorStack = ""
  if (postAuthor) {
    postAuthorStack = 
      <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
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
  } else {
    postAuthorStack =
      <Text color={'gray.500'}><time>{postDate}</time></Text>
  }
  return (
  <Box key={key} maxW="md">
    {postImage ?
      <Link to={"../../post/" + postSlug.replace(/\s+/g, "-").toLowerCase()}>
        <AspectRatio ratio={16 / 9}>
          <Image
            as={GatsbyImage}
            image={postImage}
            alt={postTitle}
            rounded={'2xl'} />
        </AspectRatio>
      </Link>
      :
      <Link to={"../../post/" + postSlug.replace(/\s+/g, "-").toLowerCase()}>
        <AspectRatio ratio={16 / 9}>
          <Image
            src="https://via.placeholder.com/1920x1080"
            alt={postTitle || ""}
            rounded={'2xl'} />
        </AspectRatio>
      </Link>}
    <Box p="4">
      <Box
        as="h2"
        mb="2"
        fontWeight="semibold"
        lineHeight="tight"
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
        {postTags.slice(0, 3).map(tag => (
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
      <Box mt="2">
        <Text
          noOfLines={[3]}
          color="gray"
          fontSize="sm"
        >
          <div dangerouslySetInnerHTML={{ __html: postExcerpt }} />
        </Text>
      </Box> 
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
 