import React, { Component } from 'react';
import './grid.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { log } from '../logging/log';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: 'Name',
          field: 'name',
          sortable: true,
          filter: true,
          checkboxSelection: true
        },
        {
          headerName: 'Num',
          field: 'num',
          sortable: true,
          filter: true
        },
        {
          headerName: 'Type',
          field: 'type',
          sortable: true,
          filter: true
        },
        {
          headerName: 'Image',
          field: 'img',
          sortable: false,
          filter: false,
          cellRenderer:({ value }) => `<img style="height: 14px; width: 14px" src=${value} />`
        }
      ],
      rowData: []
    };
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
        .then(result => result.json())
        .then(rowData => this.setState({ rowData: rowData.pokemon },
          () => {
            log(rowData.pokemon);
            this.props.setGridData(rowData.pokemon);
          }));
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
  };

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: '1000px',
          width: '800px'
        }}
      >
        <AgGridReact
          onGridReady={this.onGridReady}
          rowSelection="single"
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          onRowSelected={(e) => this.props.setSelectedRow(e.data)}
        ></AgGridReact>
      </div>
    );
  }
}

export default Grid;