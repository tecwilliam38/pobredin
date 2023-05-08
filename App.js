
import 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 10000);
import { NavigationContainer } from '@react-navigation/native';

// Navigator
import MyTabs from './src/Tabs';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </>
  );
}
// Usar o comando npx expo start
{/* <MyStack /> */ }