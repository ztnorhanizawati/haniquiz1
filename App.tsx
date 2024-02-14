import React, { FC } from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import HeaderClass from './src/screens/Header';
import Quiz from './src/components/Quiz';


const App: FC=() => {
  

  return (
    <SafeAreaView style={{backgroundColor:'white',flex:1}}>
      <HeaderClass title={"Quiz App"}/>
     <Quiz/>
    </SafeAreaView>
  );
};



export default App;