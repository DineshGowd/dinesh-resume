import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import counterReducer from '../reducers/counter/counterSlice'
import { sampleApi } from '../services/sample'

const store = configureStore({
  reducer: {
    counter: counterReducer,
     // Add the generated reducer as a specific top-level slice
     [sampleApi.reducerPath]: sampleApi.reducer,
  },
   // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sampleApi.middleware),
})
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

export default store;