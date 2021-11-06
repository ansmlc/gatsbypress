import * as React from "react"

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { 
  Link
} from "gatsby"

import Logo from "./logo"

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const Footer = function ({ data }) {
  const title = data?.wp?.allSettings?.generalSettingsTitle;
  const description = data?.wp?.allSettings?.generalSettingsDescription;
  const logoMediaItem = data?.allFile?.edges[0]?.node


  const prefixPage = '../../page';
  const prefixCat = '../..';
  const allMenuItems = data?.footer?.nodes[0];
  console.log(allMenuItems, 'footer menu');
  let catMenuItems = [];
  let pageMenuItems = [];
  {allMenuItems?.menuItems?.nodes.map(item => (
    item.url.includes('category')?
    catMenuItems.push(item)
    :
    pageMenuItems.push(item)
  ))}
  {data?.allWpCategory?.nodes.map(item => (
    item.uri.includes('featured')?
    false : catMenuItems.push(item)
  ))}
  console.log(pageMenuItems, 'page items')
  return (
    <Box
      mt={10}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container 
        as={Stack} 
        maxW="container.lg" 
        py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Logo
              siteTitle={title}
              siteLogo={logoMediaItem}
              color={useColorModeValue('gray.700', 'white')} 
            />
            <Text fontSize={'normal'}>
              {description}
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Menu</ListHeader>
            {pageMenuItems.map(pageItem => (
                <Link 
                    activeStyle={{ color: "red" }} 
                    partiallyActive={true}  
                    to={prefixPage + pageItem.url.replace(/\s+/g, "-").toLowerCase()} 
                    key={pageItem.id}
                    href={'#'}
                >
                    {pageItem.label}
                </Link>   
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Blog</ListHeader>
            {catMenuItems.map(catItem => (
                <Link 
                    activeStyle={{ color: "red" }} 
                    partiallyActive={true}  
                    to={prefixCat + catItem.uri.replace(/\s+/g, "-").toLowerCase()} 
                    key={catItem.id}
                    href={'#'}
                >
                    {catItem.name + "(" + catItem.count + ")"}
                </Link>   
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Social</ListHeader>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box
        as="footer"
        bg="white"
        d="flex"
        left="0"
        right="0"
        zIndex="2"
        borderTop="1px"
        borderTopColor="lightgray"
        marginTop="2rem"
        centerContent
      >
        <Text mx="auto" my="1rem" align="center" fontSize="sm">
          {new Date().getFullYear()}, Created by <a href="https://github.com/ansmlc/">@ansmlc</a>. Built with
          {` `}
          <a href="https://www.gatsbyjs.com">React, Gatsby</a> and <a href="https://chakra-ui.com">ChakraUI</a>
        </Text>
      </Box>
    </Box>

  );
}

export default Footer