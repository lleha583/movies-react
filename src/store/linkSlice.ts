import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "/fetchData",
  async function fetchMovies(value: any) {
    const response = await fetch(
      `${value.url}&type=${value.type}&s=${value.search}&page=${value.page}&y=${value.year}`,
      { method: "GET" }
    );
    const data = await response.json();
    return data.Search;
  }
);

export let result: any[] = [];

const linkSlice = createSlice({
  name: "link",
  initialState: {
    year: "",
    search: "avengers",
    type: "movie",
    page: 1,
    url: "https://www.omdbapi.com/?apikey=ee37e9cf",
  },
  reducers: {
    getSearch: (
      state: any,
      action: {
        type: string;
        payload: { year: string; search: string; type: string };
      }
    ) => {
      console.log(state);
      state.search = action.payload.search;
      state.type = action.payload.type;
      state.year = action.payload.year;
      state.page = 1;
      result = [];
      console.log(action);
    },
    page: (state: any) => {
      state.page++;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      result = [...result, ...action.payload];
    });
  },
});

export const { page, getSearch } = linkSlice.actions;

export default linkSlice.reducer;
