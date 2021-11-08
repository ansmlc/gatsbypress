import React from 'react';
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image
} from '@chakra-ui/react';
import PrimaryButton from "./primaryButton"

const Hero = ({ heroHeading, heroText, heroSlug, heroImage }) => {
    return (
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10, lg: 12 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 6, lg: 8}}>
          <Heading 
            as="h2"
            color={'gray.700'}
            fontWeight={700}
            lineHeight={1.3}
            fontSize={{ base: '3xl', md: '3xl' }}
          >
              {heroHeading}
          </Heading>
          <Text color={'gray.500'} dangerouslySetInnerHTML={{ __html: heroText }}>
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
              <Link to={"../../post/" + heroSlug.replace(/\s+/g, "-").toLowerCase()}>
                <PrimaryButton arrowRight>
                  Read more
                </PrimaryButton>
              </Link>
              <Link to={"https://github.com/ansmlc/websby"}>
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                  colorScheme={'gray'}
                >
                  GitHub
                </Button>
              </Link>
          </Stack>
        </Stack>
        <Flex
          flex={2}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box
            position={'relative'} 
            width={{ base: '100%', lg: '90%' }}   
            overflow={'hidden'}    
          >
            {heroImage?.node?.localFile?.childImageSharp.gatsbyImageData?
              <Image 
                as={GatsbyImage}
                image={heroImage?.node?.localFile?.childImageSharp.gatsbyImageData} 
                alt={heroHeading}
                rounded={'2xl'} 
                maxW={{base: '100%'}}
                loading="eager"
                fadeIn={false}
              />              
              :
              <img src="https://via.placeholder.com/1920x1080" alt={heroHeading || ""}/>
            }     
          </Box>
        </Flex>
      </Stack>
    )
}

export default Hero













