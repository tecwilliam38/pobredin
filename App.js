
import 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 20000);
import { NavigationContainer } from '@react-navigation/native';
// import MyStack from './src/stack';
// Navigator
import MyTabs from './src/Tabs';

export default function App() {
  return (
    <> 
      <NavigationContainer initialRouteName="Login">
        <MyTabs />
      </NavigationContainer>
    </>
  );
}
// Usar o comando npx expo start