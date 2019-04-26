
import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';


class App extends Component {
  state = {
    bands: [],
    columns: [
    {
      dataField: 'name',
      text: 'Band Name',
       sort: true,
       filter: textFilter()
    },
    {
      dataField: 'year',
      text: 'Year Formed',
      sort: true,
      filter: textFilter()
    },
    {
      dataField: 'active',
      text: 'Still Active?',
      sort: true,
      filter: textFilter()
    }],
  }

  componentDidMount() {
    axios.get('http://localhost:3001/band-results')
      .then(response => {
        this.setState({
          bands: response.data
        });
      });
  }
  
  render() {
    return (
      <div className="container" style={{ marginTop: 100 }}>
        <BootstrapTable 
        striped
        hover
        keyField='id' 
        data={ this.state.bands } 
        columns={ this.state.columns }
        filter={ filterFactory() } />
      </div>
    );
  }
}

export default App;
