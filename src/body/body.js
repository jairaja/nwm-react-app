import React from "react";
import Grid from "../common/grid/grid";
import { svcDataGridState } from "../state/app-state";
import {useRecoilValue} from 'recoil';

function Body(){
    const gridData = useRecoilValue(svcDataGridState);

    const fetchData = (event) => {
        setGridData(event.target.value);    
    };

    return(
        <div className="body-region-grid">

        {gridData && Array.isArray(gridData) &&
            <>
                {gridData.length === 0 ?
                    <input type={"submit"} onClick={fetchData} value={"Get Data"}/> :
                    <Grid />
                }
            </>
        }
        </div>
    );
}

export default Body;