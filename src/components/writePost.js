import gql from 'graphql-tag';
import React from 'react';
import { graphql } from 'react-apollo';

class WritePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postText: '',
    };

    this.savePost = this.savePost.bind(this);
    this.setPostText = this.setPostText.bind(this);
  }

  savePost() {
    this.props.mutate({
      variables: {
        text: this.state.postText,
        user: this.props.user,
      },
    })
      .then(({ data }) => console.log(data))
      .catch(error => console.log(error));
  }

  setPostText(event) {
    this.setState({ postText: event.target.value });
  }

  render() {
    return (
      <div>
        <textarea value={this.state.postText} onChange={this.setPostText} />
        <button onClick={this.savePost}>Submit</button>
      </div>
    );
  }
}

const createPost = gql`
  mutation createPost($text: String!, $user: String!) {
    createPost(text: $text, user: $user) {
      text,
      user,
    }
  }
`;

export default graphql(createPost)(WritePost);
