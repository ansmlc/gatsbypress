import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Box, Text, Image, Flex, useColorModeValue} from "@chakra-ui/react"
import { GatsbyImage } from "gatsby-plugin-image"
import PrimaryButton from "./primaryButton"
import { Badge, Icon } from "@chakra-ui/react"
import { HiStar } from "@react-icons/all-files/hi/HiStar"

const Feature = ({ featuredTitle, featuredDesc, featuredImage, featuredSlug, orderBaseTxt, orderLgTxt, orderBaseImg, orderLgImg, txtAlign }) => (  
    <Flex my="16" textAlign={{ base: "left", md: txtAlign}} align={{base: "flex-start", lg: "center"}}  flexDir="row" flexWrap={{base: "wrap", lg: "nowrap"}}
        overflow="hidden" boxShadow="2xl" maxW="full" rounded="2xl" bg={useColorModeValue('white', 'gray.700')}
            data-sal="slide-up" data-sal-duration={600}> 
        <Box p="8" order={{ base: orderBaseTxt, lg: orderLgTxt }} w={{base: '100%', lg: '50%' }}> 
            <Badge
              colorScheme="secondary"
              maxWidth="105px"
              marginBottom="2"
            >
              <Icon as={HiStar} mt="-2px"/> Featured
            </Badge>            
            <Text 
                as="h1" 
                mb="1rem"
                mt={{base: "1rem", lg: "0"}}
                color={'gray.700'}
                fontWeight={700}
                lineHeight={1.1}
                fontSize={'3xl'}
            >
                {featuredTitle}
            </Text>
            <Text as="p"
                m="0 auto"
                mb="1rem"
                color={'gray'}
                fontWeight={400}
                lineHeight={1.3}
                fontSize={'0.9rem'}>
                    <div dangerouslySetInnerHTML={{ __html: featuredDesc }}/>
            </Text>
            <Link to={"../../post/" + featuredSlug.replace(/\s+/g, "-").toLowerCase()}>
                <PrimaryButton arrowRight>
                    Read more
                </PrimaryButton>
            </Link>
        </Box>
        <Box 
            order={{ base: orderBaseImg, lg: orderLgImg }} 
            maxW={{base: '100%', lg: '50%' }}
        >
            {featuredImage?
            <Image 
                as={GatsbyImage}
                image={featuredImage}
                alt={featuredTitle}
                rounded={'2xl'} 
                borderBottomLeftRadius="0"
                borderTopLeftRadius="0"
                borderBottomRightRadius="0"
                borderTopRightRadius="0"
                maxW={{base: '100%', lg: '100%'}}
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
 