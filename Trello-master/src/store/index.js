import { configureStore } from "@reduxjs/toolkit";
import AuthorizationSlices from "./reducers/LoginSlices";
import KolonkaListSlices from "./reducers/KolonkaListSlices";

const store = configureStore({
    reducer: {
        user: AuthorizationSlices.reducer,
        listItem: KolonkaListSlices.reducer
    }
})

export default store;