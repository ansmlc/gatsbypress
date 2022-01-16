import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { 
    Box, 
    Heading, 
    Image, 
    Flex, 
    useColorModeValue,
    Spacer
} from "@chakra-ui/react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Fade } from "react-awesome-reveal"
import SecondaryButton from "../buttons/secondaryButton"

const Feature = ({ featuredTitle, featuredDesc, featuredImage, featuredSlug, orderBaseTxt, orderLgTxt, orderBaseImg, orderLgImg }) => ( 
    <Fade delay={200} duration={500} triggerOnce>
        <Flex width="100%" justify={"center"}>
            <Flex 
                mb="20" textAlign="left" align={{base: "flex-start", md: "center"}} flexDir="row" flexWrap={{base: "wrap", md: "nowrap"}}
                maxW={'100%'}
            > 
                <Box p={{ base: 6, md: 8}} order={{ base: orderBaseTxt, md: orderLgTxt }} maxW={{base: '100%', md: '50%' }}> 
                    <Heading 
                        mt="5"
                        mb="4"
                        lineHeight={1.1}
                        fontSize={'4xl'}
                        color={useColorModeValue('brand.600', 'brand.500')}
                    >
                        {featuredTitle}
                    </Heading>
                    <Box
                        m="0 auto"
                        mb="7"
                        color={'gray.500'}
                        fontWeight={400}
                        lineHeight={1.3}
                        noOfLines={{base: 4, md: 4}}
                    >
                            <div dangerouslySetInnerHTML={{ __html: featuredDesc }}/>
                    </Box>
                    <Spacer/>
                    <Link alt={featuredTitle} to={"../../post/" + featuredSlug}>
                        <SecondaryButton arrowRight>
                            Read Post
                        </SecondaryButton>
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
                        rounded={'brandRadius.image'} 
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
                        rounded={'brandRadius.image'} 
                    />
                    }     
                </Box>
            </Flex>
        </Flex>
    </Fade>
)

Feature.propTypes = {
    feaeturedSlug: PropTypes.string,
    featuredTitle: PropTypes.string,
    featuredDesc: PropTypes.string,
    featuredImage: PropTypes.object,
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
 