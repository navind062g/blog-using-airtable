import React from 'react';
import { graphql } from 'gatsby';
import unified from 'unified';
import markdown from 'remark-parse';
import html from 'remark-html';
import Link from 'gatsby-link';
import { Box } from '../../components/Layout';
import { Timestamp, Link } from '../components/Misc';
import colors from '../../utils/colors';
import PageWrapper from '../../components/PageWrapper';
import { css } from 'react-emotion';

const listStyle = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const linkStyles = css`
  box-shadow: none;
`;

const BlogIndex = ({ data }) => {
  console.log(data.allAirtable);
  const { edges: posts } = data.allAirtable;
  return (<p>blog data</p>);
  // return (
  //   <>
  //     <PageWrapper>
  //       <Box bg={colors.primary}>
  //         <Box
  //           width={[1, 1, 1 / 2]}
  //           m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
  //           px={[3, 3, 0]}
  //           color={colors.secondary}
  //         >
  //           <h1>Blog</h1>
  //           <ul className={listStyle}>
  //             {posts
  //               .filter(post => post.node.data.title && post.node.data.title.length > 0)
  //               .map(({ node: post }, index) => {
  //                 return (
  //                 <Box key={post.id}>
  //                   <Link to={post.data.slug} className={linkStyles}>
  //                     <Timestamp>{post.data.date}</Timestamp>
  //                     <h3>{post.data.title}</h3>
  //                     <div
  //                     style={{
  //                       backgroundImage: 'url(' + post.data.image[0].url + ')',
  //                       backgroundSize: '100%',
  //                       backgroundPosition: 'center',
  //                       width:'100%',
  //                       height:'15rem'
  //                       }}>
  //                     </div>
  //                     <p
  //                     style={{
  //                       marginTop: '1rem',
  //                       marginBottom: '2rem',
  //                     }}>
  //                       <div
  //                       dangerouslySetInnerHTML={{
  //                       __html: String(unified()
  //                       .use(markdown)
  //                       .use(html)
  //                       .processSync(post.data.PostMarkdown.split(/\s+/).slice(0,35).join(" ")))
  //                       }} />
  //                     </p>
  //                 </Link>
  //               </Box>
  //                 );
  //               })}
  //           </ul>
  //         </Box>
  //       </Box>
  //     </PageWrapper>
  //   </>
  // );
};

export const blogQuery = graphql`
  {
    allAirtable {
      edges {
        node {
          data {
            slug
          }
        }
      }
    }
  }
`;

export default BlogIndex;
