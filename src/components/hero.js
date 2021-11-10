import React from 'react';
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  Spacer,
  Flex,
  Box,
  Text,
  Image,
  useColorModeValue,
  Badge,
  Icon,
  AspectRatio
} from '@chakra-ui/react';
import PrimaryButton from "./primaryButton"
import { HiStar } from "@react-icons/all-files/hi/HiStar"
import {
  Alert,
  AlertIcon,
} from "@chakra-ui/react"

const Hero = ({ heroHeading, heroText, heroSlug, heroImage }) => {
  const HeroCard = () => (
    <Flex mt="4" flexDir="row" flexWrap={{base: "wrap", md: "nowrap"}}
      overflow="hidden" boxShadow="2xl" maxW="full" rounded="2xl" bg={useColorModeValue('white', 'gray.700')}
      data-sal="slide-up" data-sal-duration={600}> 
      <Flex 
        // order={{ base: 2, md: 1 }} 
        flexDirection="column" 
        p="8"  
        maxW={{base: '100%', lg: '30%' }}> 
        <Badge
          colorScheme="secondary"
          maxWidth="52px"
          verticalAlign="center"
          marginBottom={{ base: 2, md: 6 }}
        >
          <Icon as={HiStar} mt="-2px"/> New
        </Badge>
        <Text 
          as="h1" 
          mt={{base: "1rem", lg: "0"}}
          mb="6"
          color={'gray.700'}
          fontWeight={700}
          lineHeight={1.1}
          fontSize={'3xl'}
          noOfLines={4}
        >
          {heroHeading}
        </Text>
        <Text as="p"
          mb="6"
          color={'gray.600'}
          lineHeight="normal"
          noOfLines={4}         
        >
          <div dangerouslySetInnerHTML={{ __html: heroText }}/>
        </Text>
        <Spacer/>
          <Link to={"../../post/" + heroSlug?.replace(/\s+/g, "-").toLowerCase()}>
            <PrimaryButton arrowRight>
              Read more
            </PrimaryButton>
          </Link>
      </Flex>
      <Box 
        // order={{ base: 1, md: 2 }} 
        maxW={{base: '100%', lg: '70%' }}
        // maxHeight={{base: "auto", lg: "460px"}}
      >
        {heroImage?.node?.localFile?.childImageSharp.gatsbyImageData?
        <Image 
          height="100%"
          loading="eager"
          fadeIn={false}
          as={GatsbyImage}
          image={heroImage?.node?.localFile?.childImageSharp.gatsbyImageData} 
          alt={heroHeading}
          rounded={'2xl'} 
          borderBottomLeftRadius="0"
          borderTopLeftRadius="0"
          borderBottomRightRadius="0"
          borderTopRightRadius="0"
        />
        :
        <Alert borderRadius="xl" boxShadow="xl" status="warning">
          <AlertIcon />
          Featured image not found.
        </Alert>
        } 
      </Box>
    </Flex>
  ) 

  if (heroHeading && heroText && heroSlug) {
    return (
      <HeroCard/>
    )
  }
  else {
    return (
      <Alert borderRadius="xl" boxShadow="xl" status="warning">
        <AlertIcon />
        Nothing found. Add some posts. 
    </Alert>
    )
  }
}

export default Hero













