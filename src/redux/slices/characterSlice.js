import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = { 
  characters: [],
  error: null,
  status: 'idle'
}

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      if(action.payload.characters.error) {
        return state.error = action.payload.characters.error
      }

      state.characters = action.payload.characters.characters
    },
  }
})

export const { setCharacters } = charactersSlice.actions;

export const stateCharacters = state => state.characters

export const getAllCharacters = () => async (dispatch) => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    dispatch(setCharacters(data.results))
  } catch (error) {
    dispatch(setError(error.message))
  }
}


export default charactersSlice.reducer