import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "movie/fetchData",
  async function fetchMovies(value: IState) {
    const response = await fetch(`${value.url}&type=${value.type}&s=${value.search}&page=${value.page}&y=${value.year}`,
      { method: "GET" }
    );
    const data = await response.json();
    return data;
  }
);

export interface IState {
  year: string,
  search: string,
  type: string,
  page: number,
  url: string,
  lastStatus: string
}

const linkSlice = createSlice({
  name: "link",
  initialState: {
    year: "",
    search: "avengers",
    type: "movie",
    page: 1,
    url: "https://www.omdbapi.com/?apikey=ee37e9cf",
    lastStatus: ''
  },
  reducers: {
    getSearch: (state: IState, action: {type: string;payload: { year: string; search: string; type: string };}
    ) => {
      state.search = action.payload.search.toLowerCase().replace("", "-");
      state.type = action.payload.type;
      state.year = action.payload.year;
      state.page = 1;
    },
    getSearchHeader: (state: IState, action: {type: string; payload: string}) => {
      state.search = action.payload.toLowerCase().replace("", "-");
    },
    page: (state: IState) => {
      state.page++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.lastStatus = action.payload.Response
    })
  }
});

export const { page, getSearch, getSearchHeader } = linkSlice.actions;

export default linkSlice.reducer;
