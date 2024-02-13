import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import auth from '../../firebase/firebase.config';

interface Candidate {
    password: string
    email: string
    name: string,
}
interface LoginUser {
    password: string
    email: string
}

interface AuthState {
  user: Candidate | null;
  loading: boolean;
  error: string | null;
}

export const initialState: AuthState = {
  user: {
    email: "",
    password: "",
    name: ""
  } ,
  loading: false,
  error: null,
};
// import navigate from singup

export const createCandidate = createAsyncThunk(
  'auth/createCandidate',
  async (candidate: Candidate, { rejectWithValue }) => {
    try {
      const {name, email, password } = candidate;
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


const candidateSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser: (state, action) =>{
        state.user = action.payload
        state.loading = false;
    }
  },
  extraReducers: (builder) => {
      builder.addCase(createCandidate.pending, (state) => {
        state.loading = true;
      })
      builder.addCase(createCandidate.fulfilled, (state, action: any) => {
        state.user = action.payload;
        state.loading = false;
        toast.success("Candidate account created");
        window.location.replace("/dashboard")
      })
      builder.addCase(createCandidate.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })

      builder.addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      builder.addCase(loginUser.fulfilled, (state, action: any) => {
        state.user = action.payload;
        state.loading = false;
      })
      builder.addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })
  },
});

export const {setCurrentUser} = candidateSlice.actions

export default candidateSlice.reducer;
