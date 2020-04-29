import React from 'react';
//must have for react-navigation
import 'react-native-gesture-handler';

//redux, redux-persist
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';

//react-navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HOME_SCREEN,
  EXPLORE_SCREEN,
  REVIEW_SCREEN,
  LESSON_SCREEN,
  MULTIPLE_CHOICE,
} from './environments/Routes';

//views
import Home from './src/views/Home';
import Explore from './src/views/Explore';
import Lesson from './src/views/Lesson';
import Review from './src/views/Review';
import {getImage} from './src/helpers/downImage';
//components
import MultipleChoice from './src/components/multiple-choice/MultipleChoice';
getImage();
const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={MULTIPLE_CHOICE}>
            <Stack.Screen name={HOME_SCREEN} component={Home} />
            <Stack.Screen name={EXPLORE_SCREEN} component={Explore} />
            <Stack.Screen name={REVIEW_SCREEN} component={Review} />
            <Stack.Screen name={LESSON_SCREEN} component={Lesson} />
            <Stack.Screen name={MULTIPLE_CHOICE} component={MultipleChoice} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
