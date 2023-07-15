import React, { Component } from 'react';
import axios from 'axios';
import WithParams from '../../components/WithParams';
import { H1 } from '../../components/Typography';
import Container from '../../components/Container';
import { PATHS } from '../../router/paths';
import { Navigate } from 'react-router-dom';
import StoreForm from '../../components/StoreForm';

class EditStorePage extends Component {
  state = {
    post: null,
    isLoading: true,
    isGotToListPage: false,
  };

  id = this.props.params.id;

  componentDidMount() {
    fetch(`https://some-data.onrender.com/stores/${this.id}`)
      .then((response) => response.json())
      .then((data) => this.setState({ post: data, isLoading: false }));
  }

  handleEditPost = async (body) => {
    this.setState({ isLoading: true });
    try {
      const res = await axios.put(
        `https://some-data.onrender.com/stores/${this.id}`,
        body
      );
      console.log(res.data);
      this.setState({
        post: res.data,
        isLoading: false,
        isGotToListPage: true,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    return (
      <div>
        <Container>
          <H1>Edit Post {this.id}</H1>

          <StoreForm
            post={this.state.post}
            handleSubmit={this.handleEditPost}
            isLoading={this.state.isLoading}
          />
        </Container>

        {this.state.isGotToListPage && (
          <Navigate to={PATHS.POSTS.ROOT} replace />
        )}
      </div>
    );
  }
}

export default WithParams(EditStorePage);
