import React, { Component } from 'react';
import './style.css'
import axios from 'axios';
import Table from '../../components/Table';
import { Navigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';
import { STORES_COLUMNS } from '../../constants/stores';
import { Container } from './../../components/Container/index';

class StoresPage extends Component {
  state = {
    stores: [],
    isLoading: true,
  };

  componentDidMount() {
    fetch('https://some-data.onrender.com/stores')
      .then((response) => response.json())
      .then((data) => this.setState({ stores: data, isLoading: false }));
  }

  handleDelete = async (id) => {
    console.log(id, 'is deleted');
    try {
      axios.delete(`https://some-data.onrender.com/stores/${id}`)
      .then((data) => data.data.id)
      .then((id) => this.setState(prev => ({stores: [...prev.stores.filter(data => data.id !== id)]})))
    } catch (err) {
      console.log(err);
    }
  };

  handleEdit = (id) => {
    console.log(id, 'is edited');
    this.setState({ editId: id });
  };

  handleView = (row) => {
    console.log(row.id, 'is viewed');
    this.setState({ rowId: row.id });
  };

  render() {
    return (
      <Container>
        <h1>Stores</h1>

        <button onClick={() => this.setState({ isCreating: true })}>
          Create Store
        </button>

        <Table
          columns={STORES_COLUMNS(this.handleDelete, this.handleEdit)}
          data={this.state.stores}
          onRowClick={this.handleView}
          isLoading={this.state.isLoading}
        />

        {this.state.rowId && <Navigate to={`${this.state.rowId}`} replace />}
        {this.state.editId && (
          <Navigate
            to={PATHS.STORES.EDIT.replace(':id', this.state?.editId)}
            replace
          />
        )}
        {this.state?.isCreating && <Navigate to={PATHS.STORES.CREATE} replace />}
      </Container>
    );
  }
}

export default StoresPage;
