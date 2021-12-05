import React, { Component } from 'react';
import './grid.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: 'Name',
          field: 'name',
        },
        {
          headerName: 'Num',
          field: 'num',
        },
        {
          headerName: 'Type',
          field: 'type',
        },
        {
          headerName: 'Image',
          field: 'img',
          sortable: false,
          filter: false,
          cellRenderer:({ value }) => `<img style="height: 14px; width: 14px" src=${value} />`
        }
      ],
      rowData: props.gridData
    };
  }

  defaultColDef =  {
    flex: 1,
    minWidth: 80,
    sortable: true,
    filter: true,
  };

  onGridReady = params => {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
  };

  handlerOnRowSelected = (event) => {
    if (!event.node.selected){
        return;
    }  

    this.props.setSelectedRow(event.data);
  };

  getRowStyle = params => {
    if (params.node.rowIndex % 2 !== 0) {
        return { background: '#E0E0E0' };
    }
  };

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: '900px',
          width: '800px'
        }}
      >
        <AgGridReact
          getRowStyle={this.getRowStyle}
          onGridReady={this.onGridReady}
          rowSelection="single"
          defaultColDef={this.defaultColDef}
          sideBar='columns'
          columnDefs={this.state.columnDefs}
          columnD
          rowData={this.state.rowData}
          onRowSelected={this.handlerOnRowSelected}
        ></AgGridReact>
      </div>
    );
  };
}

export default Grid;