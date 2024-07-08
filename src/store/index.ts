import { configureStore } from '@reduxjs/toolkit'
import linkSlice from './linkSlice'

export default configureStore({
  reducer: {
    link: linkSlice
  }
})