import React from "react";
import { selectedRowState } from "../state/app-state";
import {
    useRecoilValue,
  } from 'recoil';
import HeaderTable from "./header-table/header-table";

function Header(){
    
    const seletedRowData = useRecoilValue(selectedRowState);

    return(
        <div className="selected-row-details-region">

            {seletedRowData
                ? <HeaderTable />
                : <label>{"No Row Selected."}</label>
            }
        </div>
    );
}

export default Header;