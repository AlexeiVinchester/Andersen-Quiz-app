import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const loadQuestions = createAsyncThunk(
    'fetchedQuestions/fetchQuestions',
    async () => {
        const response = await fetch('https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple');
        const data = await response.json();
        return data.results;
    }
);

export const loadedQuestionsSlice = createSlice({
    name: 'loadedQuestions',
    initialState: { data: null, loading: false, error: null},
    reducers: {
        clearLoadedQuestions(state) {
            state.data = null;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
      builder
        .addCase(loadQuestions.pending, (state) => {
          state.loading = true;
        })
        .addCase(loadQuestions.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
         
        })
        .addCase(loadQuestions.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message
        });
    },
  });
  export const { clearLoadedQuestions } = loadedQuestionsSlice.actions;
  export default loadedQuestionsSlice.reducer;