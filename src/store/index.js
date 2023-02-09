const { configureStore } = require("@reduxjs/toolkit");
const { usersReducer } = require("./slices/userSlice");

export const store = configureStore({
    reducer: {
        users: usersReducer
    },
});

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";
