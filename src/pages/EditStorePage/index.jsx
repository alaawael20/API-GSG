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
    store: null,
    isLoading: true,
    isGotToListPage: false,
  };

  id = this.props.params.id;

  componentDidMount() {
    fetch(`https://some-data.onrender.com/stores/${this.id}`)
      .then((response) => response.json())
      .then((data) => this.setState({ store: data, isLoading: false }));
  }

  handleEditstore = async (body) => {
    this.setState({ isLoading: true });
    try {
      const res = await axios.put(
        `https://some-data.onrender.com/stores/${this.id}`,
        body
      );
      console.log(res.data);
      this.setState({
        store: res.data,
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
          <H1>Edit Store {this.id}</H1>

          <StoreForm
            store={this.state.store}
            handleSubmit={this.handleEditstore}
            isLoading={this.state.isLoading}
          />
        </Container>

        {this.state.isGotToListPage && (
          <Navigate to={PATHS.STORES.ROOT} replace />
        )}
      </div>
    );
  }
}

export default WithParams(EditStorePage);
