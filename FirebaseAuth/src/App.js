import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
// import the different screens
import Loading from './Loading'
import Login from './Login'
import SignUp from './Signup'
import Home from './Home'



// create our app's navigation stack
const App = createStackNavigator(
  {
    'Loading': Loading,
    'Login':Login,
    'SignUp':SignUp,
    'Home':Home,


  },
  {
  
    initialRouteName: 'Loading'
  }
)
export default createAppContainer(App)