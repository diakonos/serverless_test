import gql from 'graphql-tag';
import React from 'react';
import { graphql } from 'react-apollo';

function PostList(props) {
  const loading = props.data.loading;
  if (loading) {
    return <p>Loading list of posts...</p>;
  }

  const error = props.data.error;
  if (error) {
    return <p>{error}</p>;
  }

  const posts = props.data.allPosts;
  const postsElements = posts.map((post) => {
    return (
      <div key={post.id}>
        <p>{ post.text }</p>
        <p>by: { post.user }</p>
      </div>
    );
  });

  return (
    <div>
      { postsElements }
    </div>
  );
}

const POSTS_QUERY = gql`query { allPosts { id, text, user } }`;

const PostListWithData = graphql(POSTS_QUERY)(PostList);

export default PostListWithData;
