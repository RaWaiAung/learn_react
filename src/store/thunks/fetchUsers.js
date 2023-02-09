import axios from "axios";
const { createAsyncThunk } = require("@reduxjs/toolkit");

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users');
    await pause(10000);
    return response.data;
});

const pause = (durations) => {
    return new Promise((resolve) => {
        setTimeout(resolve, durations)
    })
};

export { fetchUsers };