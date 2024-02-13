import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import auth from '../../firebase/firebase.config';

interface Employer {
    password: string
    email: string
    name: string
}
interface LoginUser {
    password: string
    email: string
}


export const initialState = {
  user: {
    email: "",
    name: "",
  } ,
  loading: false,
  error: null,
};

export const createEmployer = createAsyncThunk(
  'auth/createEmployer',
  async (employer: Employer, {rejectWithValue}) => {
    try {
      const {name, email, password } = employer;
      const { user: newUser } = await createUserWithEmailAndPassword(auth,email,password);
      const currentUser = auth.currentUser;
      if(currentUser !== null){
          await updateProfile(currentUser, {displayName: name})
          return newUser;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({email, password}: LoginUser, { rejectWithValue }) => {
    try {
      const { user: newUser } = await signInWithEmailAndPassword(auth,email,password);
          return newUser;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


const employerSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser: (state, action: any) =>{
        state.user = action.payload
        state.loading = false;
    }
  },
  extraReducers: (builder) => {
      builder.addCase(createEmployer.pending, (state) => {
        state.loading = true;
      })
      builder.addCase(createEmployer.fulfilled, (state, action: any) => {
        state.user = action.payload;
        state.loading = false;
        toast.success("Employer account created");
        window.location.replace("/")
      })
      builder.addCase(createEmployer.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload
      })

      builder.addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      builder.addCase(loginUser.fulfilled, (state, action: any) => {
        state.user = action.payload;
        state.loading = false;
      })
      builder.addCase(loginUser.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload
      })
  },
});

export const {setCurrentUser} = employerSlice.actions

export default employerSlice.reducer;
