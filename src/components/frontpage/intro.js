import * as React from "react"
import { Link } from "gatsby";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Icon
} from '@chakra-ui/react';
import { Fade } from "react-awesome-reveal";
import { BiMouse } from "@react-icons/all-files/bi/BiMouse"
import { BiChevronDown } from "@react-icons/all-files/bi/BiChevronDown"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default function GatsbyPressIntro() {
  return (
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 24 }}>
        <Fade duration={200} triggerOnce>
          <Heading
            fontWeight={'bold'}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'1'}
            >
            Your favourite CMS <br />
            <Fade delay={200} triggerOnce>
                <Text as={'span'} color={'brand.600'}>
                meets JAMStack
                </Text>
            </Fade>
          </Heading>
        </Fade>
        <Text color={useColorModeValue('gray.700', 'gray.300')}>
            Use WordPress along with Gatsby, to manage your content via world's
            post popular CMS, and deploy it on a blazing fast front-end.
        </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <AnchorLink to="/#features">
                <Icon as={BiMouse} display={'block'} boxSize={5}/>
                <Icon mt={-2} as={BiChevronDown} boxSize={5}/>
            </AnchorLink>
          </Stack>
        </Stack>
      </Container>
  );
}
