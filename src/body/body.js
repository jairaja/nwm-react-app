import React from "react";
import Grid from "../common/grid/grid";
import { svcDataGridState, selectedRowState } from "../state/app-state";
import {useRecoilState} from 'recoil';

const Body = () => {
    const [, setGridData] = useRecoilState(svcDataGridState);
    const [, setSelectedRow] = useRecoilState(selectedRowState);

    return(
        <div className="body-region-grid">
            <Grid setGridData={setGridData} setSelectedRow={setSelectedRow}/>
        </div>
    );
}

export default Body;