import React from "react";
import { useRecoilValue } from "recoil";
import { selectedRowState } from "../../state/app-state";

function HeaderTable(){

    const selectedRowData = useRecoilValue(selectedRowState);

    function generateTableColumns() {
        let columns = [];
        
        Object.keys(selectedRowData).forEach(key=>{
            columns.push(<th id={key}>{key}</th>)
        })

        return columns;
    };

    function generateRowData(){
        let rowData = [];
        let data = [];

        for (const [key, value] of Object.entries(selectedRowData)) {
            data.push(
                <td key={key}>{value}</td>
            );
        }

        rowData.push(
            <tr>{data}</tr>
        );

        return rowData;
    };

    return(
        <table className="table-basic">
            <thead>
                <tr>
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