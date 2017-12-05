import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.saveName = this.saveName.bind(this);
    this.setName = this.setName.bind(this);
  }

  saveName() {
    if (this.state.name) {
      this.props.saveName(this.state.name);
    }
  }

  setName(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>Please enter your name:</h2>
        <input type='text' value={this.state.name} onChange={this.setName} />
        <button onClick={this.saveName}>Save</button>
      </div>
    );
  }
}

export default SignIn;
