import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Auth } from '../../models/Auth';

interface InitialStateType{
    loading:'rejected'|'fulfilled'|'pending'|null;
    users:Auth[];
    error:any|null;
    user:Auth|null;
    token:string|null
}
const initialState : InitialStateType = {
    loading: null,
    users: [],
    error: null,
    user: null,
    token: null,
}

export const signInUser:any = createAsyncThunk(
    'auth/login',
    async (
      {email}: Auth,
      {rejectWithValue},
    ) => {
      try {
        const response = await axios.post('http://192.168.1.68:8800/api/user/login', {
          email
        });
        console.log(response.data.token);
        return response.data.token;
       
        
      } catch (error: any) {
        return rejectWithValue(error.response.data.error);
      }
    },
  );

  export const signupUser:any = createAsyncThunk(
    'auth/signup',
    async (
      {
        email,
      }: Auth,
      {rejectWithValue},
    ) => {
      try {
        console.log(email,'geldi');
        
        const response = await axios.post(
          'http://192.168.1.68:8800/api/user/register',
          {
            email,
          },
        );
  
        return response.data;
      } catch (error: any) {
        if (error) {
          return rejectWithValue(error.response.data);
        }
        return rejectWithValue('Signup failed');
      }
    },
  );
  // Define the confirmCode async thunk
export const confirmCode:any = createAsyncThunk(
    'auth/confirmCode',
    async ({ email, code }: { email: string; code: string }, thunkAPI) => {
      try {
        const response = await axios.post('http://192.168.1.68:8800/api/user/confirm', {
          email,
          code,
        });
  
        // Assuming the response contains the JWT token after successful confirmation
        const { token } = response.data;
  
        // Save the token in AsyncStorage
        await AsyncStorage.setItem('token', token);
  
        return token;
      } catch (error:any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  

const authSlice = createSlice({
    name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    //Login
    builder
      .addCase(signInUser.pending, (state: InitialStateType) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(
        signInUser.fulfilled,
         (state: InitialStateType, action: any) => {
          state.loading = 'fulfilled';
          state.error = null;
          state.token = action.payload;
          console.log('oldu');
          
          // kind of added token here ?
          try {
             AsyncStorage.setItem('token', action.payload);
          } catch (error) {
            console.log('Error storing token in AsyncStorage:', error);
          }
        },
      )
      .addCase(signInUser.rejected, (state: InitialStateType, action: any) => {
        state.loading = 'rejected';
        state.error = action.error.message;
        state.token = null;
        console.log('errr');
        
      });
    //Register
    builder
      .addCase(signupUser.pending, (state: any) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state: InitialStateType, action: any) => {
        state.loading = 'fulfilled';
        state.error = null;

        state.token = action.payload;
      })
      .addCase(signupUser.rejected, (state: InitialStateType, action: any) => {
        state.loading = 'rejected';
        state.error = action.error;

        state.error = action.payload || 'Signup failed';
        state.token = null;
      });
       // Confirm Code
       builder
       .addCase(confirmCode.pending, (state: InitialStateType) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(confirmCode.fulfilled, (state: InitialStateType, action: any) => {
        state.loading = 'fulfilled';
        state.error = null;
        state.token = action.payload;
      })
      .addCase(confirmCode.rejected, (state: InitialStateType, action: any) => {
        state.loading = 'rejected';
        state.error = action.payload || 'Confirm code failed';
        state.token = null;
      });
  },
})
export default authSlice.reducer;