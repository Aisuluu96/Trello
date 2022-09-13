import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    columns: [],
    isModal: false,
    prevItem: {
        text: '',
        itemId: '',
        columnId: ''
    },
    searchValue: ''
};

const KolonkaListSlices = createSlice({
    name: 'List',
    initialState,
    reducers: {
        searchChange(state, action){
            state.searchValue = action.payload.value;
        }, 
        removeItemOrColumn(state){
            let itemId = '';
            const columnId = state.prevItem.columnId;
            const column = state.columns.find(elem=>elem.id===columnId);
            if(state.prevItem.itemId !== ''){
                itemId = state.prevItem.itemId;
                let newItems = column.items.filter(elem=>elem.id!==itemId);
                state.columns.find(elem=>elem.id===columnId).items = newItems;
            } else {
                state.columns = state.columns.filter(elem=>elem.id !== columnId);
            }
            state.isModal = !state.isModal;
        },
        saveItem(state, action) {
            state.isModal = !state.isModal;
            let itemId = '';
            const columnId = state.prevItem.columnId;
            const text = action.payload.text;
            if(state.prevItem.itemId !== ''){
                itemId = state.prevItem.itemId;
                state.prevItem.itemId = '';
                state.columns.find(elem=>elem.id === columnId).items.find(elem=>elem.id === itemId).text = text;
            } else {
                state.columns.find(elem=>elem.id === columnId).header = text;
            }
        },
        isModaBool(state, action) {
            state.isModal = !state.isModal;
            if(action.payload.itemId !== ''){
                state.prevItem.itemId = action.payload.itemId;
            } else {
                state.prevItem.itemId = '';
            }
            state.prevItem.text = action.payload.text;
            state.prevItem.columnId = action.payload.columnId;
        },
        addItem(state, action) {
            const columnId = action.payload.columnId;
            state.columns.find(elem => elem.id===columnId).items.push({
                id: action.payload.id,
                text: action.payload.text
            }) 
        },
        addKolonka(state, action) {
            state.columns.push({
                id: action.payload.id,
                header: action.payload.header,
                items: action.payload.items
            })
        }
    }
})

export const KolonkaListAction = KolonkaListSlices.actions;

export default KolonkaListSlices;