import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { Alert, AlertIcon } from "@chakra-ui/alert"
import { 
  Box, 
  Text, 
  Image, 
  Badge, 
  Avatar,
  SimpleGrid,
  AspectRatio,
  Stack
} from "@chakra-ui/react"
import { Fade } from "react-awesome-reveal"
  // Show author info in the card only if not in user profile page
  const PostAuthorInfo = ({ postAuthor, postDate }) => (
    <Stack  direction={'row'} spacing={4} align={'center'}>
    <Image
      borderRadius='full'
      boxSize='30px'
      htmlHeight='30px'
      htmlWidth='30px'
      src={postAuthor.avatar.url}
      alt={'Author'}
    />
    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
      <Link to={"../../author/" + postAuthor.slug.replace(/\s+/g, "-").toLowerCase()}>
        <Text fontWeight={600} color={useColorModeValue('gray.800', 'gray.100')}>
            {postAuthor.name}
        </Text>
      </Link>
      <Text color={'gray.500'}><time>{postDate}</time></Text>
    </Stack>
  </Stack>
  )

// Create Post Card Component
const PostCard = ({ postSlug, postTitle, postExcerpt, postImage, postDate, postTags, postAuthor, key, salAnimationDuration }) => {
  return (
  <Box
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
              rounded="md"
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
      <Box
        as="p"
        mb="5"
        noOfLines={[3]}
        color="brand.500"
        fontSize="normal"
      >
        <div dangerouslySetInnerHTML={{ __html: postExcerpt }} />
      </Box>
      <Box>
      <PostAuthorInfo 
        postAuthor={postAuthor} 
        postDate={postDate} 
      />
      </Box>
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
        <Fade damping={0.3} duration={500} cascade triggerOnce>
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
        </Fade>
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
 