import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';


import { UserInfoContextProvider } from '@/contexts/userInfoContext';


export default function RootLayout() {
  return (
  <>
    <StatusBar style='light' backgroundColor='#000000'/>
    
    <UserInfoContextProvider>
      <Stack initialRouteName="login">
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="index"  options={{ headerShown: false }} />
        <Stack.Screen name="main"  options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />

        <Stack.Screen name="+not-found" />
      </Stack>
    </UserInfoContextProvider>
  </>);
}
