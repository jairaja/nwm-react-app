import React from "react";
import Grid from "../common/grid/grid";
import { svcDataGridState, selectedRowState, loadingDataState } from "../state/app-state";
import {useRecoilState} from 'recoil';
import FetchData from "../common/service/svc";
import Spinner from "../common/spinner/spinner";

const Body = () => {
    const [gridData, setGridData] = useRecoilState(svcDataGridState);
    const [, setSelectedRow] = useRecoilState(selectedRowState);
    const [loadingState, setLoadingState] = useRecoilState(loadingDataState);

    const fetchData = async() => {
        setLoadingState(true);
        var fetchedData = await FetchData();
        
        if(!gridData){
            var timer = setTimeout(() => {
                setGridData(fetchedData.pokemon);
                setLoadingState(false);
                clearTimeout(timer);
            }, 1000);
        }
    }

    return (
        <div className="body-region-grid">
            { loadingState ?
                <Spinner />
                : <>
                    { !gridData ?
                        <input type="submit" value="Fetch Data" onClick={fetchData}/>
                        : <Grid setGridData={setGridData} setSelectedRow={setSelectedRow} gridData={gridData}/>
                    }
                </>
            }
        </div>
    );
}

export default Body;