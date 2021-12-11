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
  Icon
} from '@chakra-ui/react';
import PrimaryButton from "../buttons/primaryButton"
import { HiStar } from "@react-icons/all-files/hi/HiStar"
import {
  Alert,
  AlertIcon,
} from "@chakra-ui/react"

const Hero = ({ heroHeading, heroText, heroSlug, heroImage }) => {
  const heroTextShort = heroText.substring(0, 200)
  const HeroCard = () => (
    <Flex flexDir="row" flexWrap={{base: "wrap", md: "nowrap"}}
      overflow="hidden" boxShadow="2xl" maxW="full" rounded="2xl" bg={useColorModeValue('white', 'gray.700')}
    > 
      <Flex 
        // order={{ base: 2, md: 1 }} 
        flexDirection="column" 
        p="8"  
        maxW={{base: '100%', md: '30%' }}> 
        <Badge
          rounded="md"
          colorScheme="secondary"
          maxWidth="52px"
          verticalAlign="center"
        >
          <Icon as={HiStar} mt="-2px"/> New
        </Badge>
        <Text 
          as="h1" 
          mt="6"
          mb="5"
          color={useColorModeValue('gray.800', 'gray.50')}
          fontWeight={700}
          lineHeight={1.1}
          fontSize={'3xl'}
          noOfLines={4}
        >
          {heroHeading}
        </Text>
        <Text as="p"
          mb="7" 
          color={'gray.600'}
        >
          <div dangerouslySetInnerHTML={{ __html: heroText }}/>
        </Text>
        <Spacer/>
          <Link to={"../../post/" + heroSlug?.replace(/\s+/g, "-").toLowerCase()}>
            <PrimaryButton arrowRight>
              Read Post
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













