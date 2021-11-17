import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { BiHomeAlt } from "@react-icons/all-files/bi/BiHomeAlt";
import { HiChevronRight } from "@react-icons/all-files/hi/HiChevronRight"

import {
    Text,
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from "@chakra-ui/react"

const Crumb = ({ pageContext, data, otherContext }) => {
    const catUri = data?.allWpPost?.edges[0]?.node?.categories?.nodes[0]?.uri
    const pageUri = data?.nodeType
    const tagUri = data?.allWpPost?.edges[0]?.node?.tags?.nodes[0]?.uri
    const authorUri = data?.nodeType
    const postUri = data?.nodeType
    const otherUri = otherContext
    const blogArchiveUri = pageContext?.type
    const isCategory = (catUri?.includes('category')) ? true : false
    const isPage = (pageUri?.includes('Page')) ? true : false
    const isTag = (tagUri?.includes('tag')) ? true : false
    const isAuthor = (authorUri?.includes('User')) ? true : false
    const isPost = (postUri?.includes('Post')) ? true : false
    const isOther = (otherUri?.includes('contact')) ? true : false
    const isBlogArchive = (blogArchiveUri?.includes('blog')) ? true : false
    var theCrumb = ""
    console.log(pageUri, 'pageUri')
    console.log(pageContext?.type, 'context : type')
    isBlogArchive?
        theCrumb = 
        <Breadcrumb separator={<HiChevronRight color="gray.200"/>}>
            <BreadcrumbItem minHeight="21.05px" verticalAlign="top">
                <BreadcrumbLink as={Link} key="frontpage" to="/"><BiHomeAlt/></BreadcrumbLink>
            </BreadcrumbItem>     
            <BreadcrumbItem verticalAlign="top" isCurrentPage>
                <BreadcrumbLink as={Link} key="blog" to="../../blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    :
    isCategory? 
        theCrumb = 
        <Breadcrumb separator={<HiChevronRight color="gray.200"/>}>
            <BreadcrumbItem minHeight="21.05px" verticalAlign="top">
                <BreadcrumbLink as={Link} key="frontpage" to="/"><BiHomeAlt/></BreadcrumbLink>
            </BreadcrumbItem>     
            <BreadcrumbItem verticalAlign="top">
                <BreadcrumbLink as={Link} key="blog" to="../../blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem verticalAlign="top" isCurrentPage>
                <BreadcrumbLink as={'p'} fontStyle="italic" key="category">{pageContext.category}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    :
    isPage? 
        theCrumb = 
        <Breadcrumb separator={<HiChevronRight color="gray.200"/>}>
            <BreadcrumbItem minHeight="21.05px" verticalAlign="top">
                <BreadcrumbLink as={Link} key="frontpage" to="/"><BiHomeAlt/></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={Link} key="page" to="/">{data.title}</BreadcrumbLink>
            </BreadcrumbItem>  
        </Breadcrumb> 
    :
    isTag? 
        theCrumb = 
        <Breadcrumb separator={<HiChevronRight color="gray.200"/>}>
            <BreadcrumbItem minHeight="21.05px" verticalAlign="top">
                <BreadcrumbLink as={Link} key="frontpage" to="/"><BiHomeAlt/></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem verticalAlign="top">
                <BreadcrumbLink as={Link} key="blog" to="../../blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem verticalAlign="top" isCurrentPage>
                <BreadcrumbLink as={'span'} fontStyle="italic" key="tag">{"#" + pageContext.tag}</BreadcrumbLink>
            </BreadcrumbItem>  
        </Breadcrumb>  
    :isAuthor?
        theCrumb = 
        <Breadcrumb separator={<HiChevronRight color="gray.200"/>}>
            <BreadcrumbItem minHeight="21.05px" verticalAlign="top">
                <BreadcrumbLink as={Link} key="frontpage" to="/"><BiHomeAlt/></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem verticalAlign="top" isCurrentPage>
                <BreadcrumbLink as={'p'} key="author">{data?.name}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>  
    :isPost? 
        theCrumb = 
        <Breadcrumb separator={<HiChevronRight color="gray.200"/>}>   
            <BreadcrumbItem minHeight="21.05px" verticalAlign="top">
                <BreadcrumbLink as={Link} key="frontpage" to="/"><BiHomeAlt/></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem verticalAlign="top">
                <BreadcrumbLink as={Link} key="blog" to="../../blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem verticalAlign="top">    
                <BreadcrumbLink 
                    as={Link} 
                    key="pagecategory" 
                    to={"../../category/" + data.categories?.nodes[0]?.slug}>{data.categories?.nodes[0]?.name}
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem verticalAlign="top" isCurrentPage>
                <BreadcrumbLink key="post"><Text maxW="150px" fontStyle="italic" textColor="gray.400" isTruncated>{data?.title}</Text></BreadcrumbLink>
            </BreadcrumbItem>       
        </Breadcrumb>
    :isOther?
        theCrumb =
        <Breadcrumb separator={<HiChevronRight color="gray.200"/>}>
            <BreadcrumbItem minHeight="21.05px" verticalAlign="top">
                <BreadcrumbLink as={Link} key="frontpage" to="/"><BiHomeAlt/></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem verticalAlign="top" isCurrentPage>
                <BreadcrumbLink as={Link} key="contact" to="#">Contact</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>  
    :
    theCrumb = "No breadcrumbs to display."
    return (
        <Box
            fontSize="0.9rem"
            textColor="gray.500"
            marginTop="1"
            marginBottom="5"
        >
          {theCrumb}
        </Box>
    )

}
Crumb.propTypes = {
  pageContext: PropTypes.object,
  data: PropTypes.object
}
Crumb.defaultProps = {
  pageContext:``,
  data: ``,
}

export default Crumb
