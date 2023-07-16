import React, { Component } from 'react';
import axios from 'axios';
import { H1 } from '../../components/Typography';
import Container from '../../components/Container';
import { Navigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';
import StoreForm from '../../components/StoreForm';

class CreateStorePage extends Component {
  state = {
    isLoading: false,
    isGoToListPage: false,
  };

  handleCreateStore = async (body) => {
    this.setState({ isLoading: true });
    try {
      const res = await axios.post(
        'https://some-data.onrender.com/stores',
        body
      );
      this.setState({ isLoading: false, isGoToListPage: true });

      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Container>
          <H1>Create Store</H1>

          <StoreForm
            handleSubmit={this.handleCreateStore}
            isLoading={this.state.isLoading}
          />
        </Container>
        {this.state.isGoToListPage && <Navigate to={PATHS.STORES.ROOT} />}
      </div>
    );
  }
}

export default CreateStorePage;
