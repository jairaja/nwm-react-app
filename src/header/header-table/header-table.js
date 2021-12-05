import React from "react";
import { useRecoilValue } from "recoil";
import { log } from "../../common/logging/log";
import { selectedRowState } from "../../state/app-state";
import './header-table.css';

// function herel

function HeaderTable(){

    const selectedRowData = useRecoilValue(selectedRowState);
    const columnsHeaders = {id:"ID", num:"Num", name:"Name", height:"Height", weight:"Weight", candy:"Candy"};

    function generateTableColumns() {
        let columns = [];
        
        for (const [key, value] of Object.entries(columnsHeaders)) {
            columns.push(
                <th key={key}>{value}</th>
            );
        }

        log('Columns for Table in Page Header'+columns);
        return columns;
    };

    function generateRowData(){
        let rowData = [];
        let data = [];
        const avalableColumns = Object.keys(columnsHeaders);

        for (const [key, value] of Object.entries(selectedRowData)) {
            if(avalableColumns.indexOf(key) !== -1){
                data.push(
                    <td key={key}>{value}</td>
                );
            }
        }

        rowData.push(
            <tr key="header-table-row">{data}</tr>
        );

        log('Rows Data for Table in Page Header'+rowData);
        return rowData;
    };

    return(
        <table className="table-basic">
            <thead>
                <tr key="header-table-columns">
                    {generateTableColumns()}
                </tr>
            </thead>
            <tbody>
                {generateRowData()}
            </tbody>
        </table>
    );
}

export default HeaderTable;