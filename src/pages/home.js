import React from 'react';
import PostList from '../components/postList';
import WritePost from '../components/writePost';

function Home(props) {
  return (
    <div>
      <h2>Write something!</h2>
      <WritePost />
      <PostList />
    </div>
  );
}

export default Home;
