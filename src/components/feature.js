import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Box, Text, Image, Flex } from "@chakra-ui/react"
import { GatsbyImage } from "gatsby-plugin-image"
import PrimaryButton from "./button"

const Feature = ({ featuredTitle, featuredDesc, featuredImage, featuredSlug, orderBaseTxt, orderLgTxt, orderBaseImg, orderLgImg }) => (  
    <Flex mb="5rem" textAlign="center" align={{base: "flex-start", lg: "center"}}  flexDir="row" flexWrap={{base: "wrap", lg: "nowrap"}}> 
        <Box order={{ base: orderBaseTxt, lg: orderLgTxt }}  w={{base: '100%', lg: '50%' }}> 
            <Text as="h1" 
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
                <PrimaryButton>
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
                maxW={{base: '100%', lg: '80%'}}
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
 