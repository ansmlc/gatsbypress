import * as React from "react"
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from "gatsby"
import Logo from "../header/logo"
import SocialIcons from "../marketing/socialIcons";

const Heading = ({ children }) => {
  return (
    <Text color={useColorModeValue('gray.700', 'gray.100')} fontWeight={'500'} fontSize={'lg'} mb={2}>
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
  let catMenuItems = [];
  let pageMenuItems = [];
  allMenuItems?.menuItems?.nodes?.map(item => (
    item.url?.includes('category') || item.url?.includes('tag') ?
    false : pageMenuItems.push(item)
  ))
  data?.allWpCategory?.nodes?.map(item => (
    item.uri?.includes('featured') || item.uri?.includes('uncategorized') ?
    false : catMenuItems.push(item)
  ))
  return (
    <Box
      mt={10}
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
            <Heading>Menu</Heading>
            {pageMenuItems.map(pageItem => (
                <Link 
                    activeStyle={{ fontWeight: "bold" }} 
                    partiallyActive={true}  
                    to={prefixPage + pageItem.url} 
                    key={pageItem.id}
                >
                    {pageItem.label}
                </Link>   
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <Heading>Blog</Heading>
            {catMenuItems.map(catItem => (
                <Link 
                    activeStyle={{ fontWeight: "bold" }} 
                    partiallyActive={true}  
                    to={prefixCat + catItem.uri} 
                    key={catItem.id}
                >
                    {catItem.name}
                </Link>   
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <Heading>Social</Heading>
            <SocialIcons/>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box
        as="footer"
        d="flex"
        left="0"
        right="0"
        zIndex="2"
        marginTop="2rem"
        boxShadow="xl"
      >
        <Text mx="auto" my="1rem" align="center" fontSize="xs">
          © {new Date().getFullYear()}. Built with {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a> and <a href="https://www.wpgraphql.com/">WordPress.</a> 
        </Text>
      </Box>
    </Box>
  );
}

export default Footer