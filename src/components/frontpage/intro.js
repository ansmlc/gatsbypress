import * as React from "react"
import { Link } from "gatsby";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';

import PrimaryButton from "../buttons/primaryButton";
export default function GatsbyPressIntro() {
  return (
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 24 }}>
          <Heading
            fontWeight={'bold'}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'1'}
            >
            Your favourite CMS <br />
            <Text as={'span'} color={'brand.600'}>
              meets JAMStack
            </Text>
          </Heading>
        <Text color={useColorModeValue('gray.700', 'gray.300')}>
            Use WordPress, world's most popular CMS, to manage your content,                along with Gatsby 
            along with Gatsby, to deploy a fast front-end.
        </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Link alt="" to="">
                <PrimaryButton arrowRight>
                    Read Post
                </PrimaryButton>
            </Link>
            <Button variant={'link'} colorScheme={'secondary'} size={'sm'}>
              GitHub
            </Button>
          </Stack>
        </Stack>
      </Container>
  );
}
