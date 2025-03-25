import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
  <>
    <StatusBar style='light' backgroundColor='#000000'/>
    <Stack initialRouteName="login">
      <Stack.Screen name="login" options={{ headerShown: true }} />
      <Stack.Screen name="index"  options={{ headerShown: false }} />
      <Stack.Screen name="main"  options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: true }} />
      
      <Stack.Screen name="+not-found" />
    </Stack>
  </>);
}
