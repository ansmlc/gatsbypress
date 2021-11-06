import * as React from "react"
import PropTypes from "prop-types"
import Feature from '../components/feature'

const Features = ({ featured }) => {
    if (featured && featured.length) {
        const featuredPosts = featured.map((featuredPost, index) =>
            index % 2 ?
                <Feature 
                    featuredDesc={featuredPost.excerpt}
                    featuredImage={featuredPost.featuredImage?.node?.localFile?.childImageSharp.gatsbyImageData}
                    featuredTitle={featuredPost.title}
                    featuredSlug={featuredPost.slug}
                />
            : 
                <Feature 
                    featuredDesc={featuredPost.excerpt}
                    featuredImage={featuredPost.featuredImage?.node?.localFile?.childImageSharp.gatsbyImageData}
                    featuredTitle={featuredPost.title}
                    featuredSlug={featuredPost.slug}
                    orderBaseTxt={2}
                    orderLgTxt={1}
                    orderBaseImg={1}
                    orderLgImg={2}
                />
        )
        return featuredPosts
    }  
    else  {
        return <Feature 
            featuredDesc="Add a new post in 'featured' category with a title, excerpt and a featured image. See it magically show up here." 
            featuredImage="https://via.placeholder.com/200x200" 
            featuredTitle="This is an example excerpt from a featured post."
        />
    }
}

Features.propTypes = {
    featured: PropTypes.array,
    featuredDesc: PropTypes.string,
    featuredImage: PropTypes.string,
    orderBaseTxt: PropTypes.number,
    orderLgTxt: PropTypes.number,
    orderBaseImg: PropTypes.number,
    orderLgImg: PropTypes.number,
}
  
Features.defaultProps = {
    featured: ``,
    featuredTitle: `Your Title Here`,
    featuredDesc: ``,
    featuredImage: ``,
    orderBaseTxt: 2,
    orderLgTxt: 2,
    orderBaseImg: 1,
    orderLgImg: 1,
}

export default Features
 