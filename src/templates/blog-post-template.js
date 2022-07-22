/* eslint-disable no-undef, react/prop-types, react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import DOMPurify from 'dompurify';
import Showdown from 'showdown';
import { Box } from '../components/Layout';
import { Timestamp, Link } from '../components/Misc';
import styled from 'react-emotion';
import colors from '../utils/colors';

const Back = styled.div`
  color: #666;
  float: right;
  position: relative;
  bottom: 1.5rem;
`;

const convertMarkDownToHTML = (postMarkDown) => {
  if(postMarkDown) 
  {
    let htmlData;
    const sanitizedData = DOMPurify.sanitize(postMarkDown);
    const converter = new Showdown.Converter();
    htmlData = converter.makeHtml(sanitizedData);
    return { __html: htmlData };
  }
  else {
    return { __html: "<p>Missing Data</p>" };
  }
}

const Template = ({ data }) => {
  console.log(data);
  const { airtable: post } = data;
  return (
    <>
      <Box bg={colors.primary}>
        <Box 
          width={[1, 1, 1 / 2]}
          m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
          px={[3, 3, 0]}
          color={colors.secondary}
          >
          <Back>
            <Link to="/blog">&larr; Blog</Link>
          </Back>
          <h1>{post.data.title}</h1>
          <Timestamp>{post.data.date}</Timestamp>
          <h5>Written by {post.data.author}</h5>
          <img
            src={post.data.image[0].url}
            style={{
              display: 'block',
              marginBottom: '1rem',
              marginTop: '1rem',
              width: '100%',
              height: 'auto'
            }}
            alt=""
          />
          <div dangerouslySetInnerHTML={convertMarkDownToHTML(post.data.PostMarkdown)}/>
        </Box>
      </Box>
    </>
  );
};

export const query = graphql`
  query BlogPostByPath($slug: String!) {
    airtable(data: { slug: {eq: $slug}}) {
      data {
        slug
        title
        author
        PostMarkdown
        image {
          url
        }
        date
      }
    }
  }
`;

export default Template;