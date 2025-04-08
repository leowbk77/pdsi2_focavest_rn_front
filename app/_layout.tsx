import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { UserInfoContextProvider } from '@/contexts/userInfoContext';
import { AutenticacaoProvider } from "@/contexts/AutenticacaoContext";

import { colors } from "@/styles/color";

export default function RootLayout() {
  return (
  <>
    <StatusBar style='dark' backgroundColor={colors.secondary}/>
    
    <AutenticacaoProvider>
      <UserInfoContextProvider>
        <Stack initialRouteName="login">
          
          <Stack.Screen 
            name="config"
            options={{
              presentation: 'transparentModal',
              headerShown: false,
            }}
          />

          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="index"  options={{ headerShown: false }} />
          <Stack.Screen name="(main)"  options={{ headerShown: false }} />
          <Stack.Screen name="sign-up" options={{ headerShown: false }} />

          <Stack.Screen name="+not-found" />
        </Stack>
      </UserInfoContextProvider>
    </AutenticacaoProvider>
  </>);
}
