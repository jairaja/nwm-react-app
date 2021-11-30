import {
    atom,
  } from 'recoil';

const selectedRowState = atom({
    key: 'selectedRowState',
    default: null,
});

const svcDataGridState = atom({
    key: 'svcDataGridState',
    default: [],
});

export {
    selectedRowState, svcDataGridState
};