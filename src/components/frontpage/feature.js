import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { 
    Box, 
    Text, 
    Image, 
    Flex, 
    useColorModeValue,
    Spacer
} from "@chakra-ui/react"
import { GatsbyImage } from "gatsby-plugin-image"
import PrimaryButton from "../buttons/primaryButton"
import { Badge, Icon } from "@chakra-ui/react"
import { HiStar } from "@react-icons/all-files/hi/HiStar"

const Feature = ({ featuredTitle, featuredDesc, featuredImage, featuredSlug, orderBaseTxt, orderLgTxt, orderBaseImg, orderLgImg }) => ( 
    <Flex width="100%" justify={"center"}>
        <Flex 
            mb="12" textAlign="left" align={{base: "flex-start", md: "center"}} flexDir="row" flexWrap={{base: "wrap", md: "nowrap"}}
            overflow="hidden" boxShadow="2xl" maxW={'100%'} rounded="2xl" bg={useColorModeValue('white', 'gray.700')}
        > 
            <Box p="8" order={{ base: orderBaseTxt, md: orderLgTxt }} maxW={{base: '100%', md: '50%' }}> 
                <Badge
                rounded="md"
                colorScheme="secondary"
                maxWidth="105px"
                marginBottom="0"
                >
                <Icon as={HiStar} mt="-2px"/> Featured
                </Badge>            
                <Text 
                    as="h1" 
                    mt="5"
                    mb="4"
                    fontWeight={700}
                    lineHeight={1.1}
                    fontSize={'3xl'}
                    noOfLines={{ base: 2, md: 1}}
                >
                    {featuredTitle}
                </Text>
                <Text as="p"
                    m="0 auto"
                    mb="7"
                    color={'gray.500'}
                    fontWeight={400}
                    lineHeight={1.3}
                    noOfLines={{base: 4, md: 2}}
                    >
                        <div dangerouslySetInnerHTML={{ __html: featuredDesc }}/>
                </Text>
                <Spacer/>
                <Link to={"../../post/" + featuredSlug.replace(/\s+/g, "-").toLowerCase()}>
                    <PrimaryButton arrowRight>
                        Read more
                    </PrimaryButton>
                </Link>
            </Box>
            <Box 
                order={{ base: orderBaseImg, md: orderLgImg }} 
                maxW={{base: '100%', md: '50%' }}
            >
                {featuredImage?
                <Image 
                    height="100%"
                    as={GatsbyImage}
                    image={featuredImage}
                    alt={featuredTitle}
                    rounded={'2xl'} 
                    borderBottomLeftRadius="0"
                    borderTopLeftRadius="0"
                    borderBottomRightRadius="0"
                    borderTopRightRadius="0"
                    maxW={{base: '100%', md: '100%'}}
                />
                :
                <Image
                    src="https://via.placeholder.com/400x400"
                    alt="placeholder image"
                    rounded={'2xl'} 
                />
                }     
            </Box>
        </Flex>
    </Flex>
)

Feature.propTypes = {
    feaeturedSlug: PropTypes.string,
    featuredTitle: PropTypes.string,
    featuredDesc: PropTypes.string,
    featuredImage: PropTypes.string,
    orderBaseTxt: PropTypes.number,
    orderLgTxt: PropTypes.number,
    orderBaseImg: PropTypes.number,
    orderLgImg: PropTypes.number,
  }
  
Feature.defaultProps = {
    featuredSlug: ``,
    featuredTitle: `Your Title Here`,
    featuredDesc: ``,
    featuredImage: ``,
    orderBaseTxt: 2,
    orderLgTxt: 2,
    orderBaseImg: 1,
    orderLgImg: 1,
  }

export default Feature
 