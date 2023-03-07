import React from 'react'
import { View, Text } from 'react-native'
import AuthNavigator from './src/AuthNavigator'
import Register from './src/Register'
import { Provider } from 'react-redux'
import myStote from './src/ReduxTollkit/MyStore'


const App = () => {
  (

     <Provider store={myStote}>
      <AuthNavigator/>
     </Provider>

  )
}

export default App