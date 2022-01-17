import * as React from "react"
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Icon
} from '@chakra-ui/react';
import { Fade } from "react-awesome-reveal";
import { BiMouse } from "@react-icons/all-files/bi/BiMouse"
import { BiChevronDown } from "@react-icons/all-files/bi/BiChevronDown"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import PrimaryButton from "../buttons/primaryButton";

export default function GatsbyPressIntro({ introData }) {
  return (
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 20 }}
        >
          <Fade duration={200} triggerOnce>
            <Heading
              fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
              lineHeight={'1'}
              >
              {introData?.firstTagline} <br />
              <Fade delay={200} triggerOnce>
                  <Text as={'span'} color={'brand.600'}>
                    {introData?.secondTagline}
                  </Text>
              </Fade>
            </Heading>
          </Fade>
          <Text color={useColorModeValue('gray.800', 'gray.300')}>
            {introData?.description}          
          </Text>
          <AnchorLink to="/#newsletter">
              <PrimaryButton>Subscribe</PrimaryButton>
            </AnchorLink>
          <Stack
            direction={'column'}
            spacing={6}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <AnchorLink to="/#features">
                <Icon as={BiMouse} display={'block'} boxSize={5}/>
                <Icon mt={-3} as={BiChevronDown} boxSize={5}/>
            </AnchorLink>
          </Stack>
        </Stack>
  );
}
