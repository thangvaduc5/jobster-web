import axios from 'axios'
import { getUserFromLocalStorage } from './localStorage'
import { clearStore } from '../features/user/userSlice'

const customFetch = axios.create({
  baseURL: 'https://redux-toolkit-jobster-api-server.onrender.com/api/v1',
})

customFetch.interceptors.request.use(
  (config) => {
    const user = getUserFromLocalStorage()

    if (user) {
      config.headers['Authorization'] = `Bearer ${user.token}`
    }

    // console.log(config)
    return config
  },
  (error) => {
    Promise.error(error)
  }
)

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore())
    return thunkAPI.rejectWithValue('Unauthorized! Logging Out...')
  }
  return thunkAPI.rejectWithValue(error.response.data.msg)
}

export default customFetch
