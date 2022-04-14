import React, { useState } from 'react'
import {Home} from './screens'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

const getFonts = () =>
  Font.loadAsync({
    'urbanist-regular': require('./assets/fonts/Urbanist-Regular.ttf'),
    'urbanist-bold': require('./assets/fonts/Urbanist-Bold.ttf'),
  })

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {
    return <Home />
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} onError={(error)=>console.log("Error Occured loading fonts", error)} />
    )
  }
}
