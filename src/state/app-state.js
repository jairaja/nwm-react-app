import {
    atom,
  } from 'recoil';

const selectedRowState = atom({
    key: 'selectedRowState',
    default: null,
});

const loadingDataState = atom({
    key:'loadingDataState',
    default: false,
});

const svcDataGridState = atom({
    key: 'svcDataGridState',
    default: null,
});

export {
    selectedRowState, svcDataGridState, loadingDataState
};