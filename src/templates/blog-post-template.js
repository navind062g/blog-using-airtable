/* eslint-disable no-undef, react/prop-types, react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import unified from 'unified';
import markdown from 'remark-parse';
import html from 'remark-html';
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

const Template = ({ data }) => {
  const { airtable: post } = data.airtable.data;
  return (
    <>
      <Box>
        <Box color={colors.secondary}>
          <Back>
            <Link to="/blog">&larr; Blog</Link>
          </Back>
          <h1>{post.title}</h1>
          <Timestamp>{post.date}</Timestamp>
          <h5>Written by {post.author}</h5>
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