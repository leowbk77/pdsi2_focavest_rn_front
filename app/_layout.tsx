import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { AutenticacaoProvider } from "@/contexts/AutenticacaoContext";
import { TaskContextProvider } from "@/contexts/TaskContext";
import { VestContextProvider } from "@/contexts/VestContext";

import { colors } from "@/styles/color";

// https://stackoverflow.com/questions/79180521/how-to-remove-ripple-effect-in-tab-navigator-react-native

export default function RootLayout() {
  return (
  <>
    <StatusBar style='light' backgroundColor={colors.primary}/>
    
    <AutenticacaoProvider>
      <TaskContextProvider>
        <VestContextProvider>

          <Stack initialRouteName="index">
            <Stack.Screen 
              name="config"
              options={{
                presentation: 'transparentModal',
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name="add-rotina"
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

        </VestContextProvider>
      </TaskContextProvider>
    </AutenticacaoProvider>
  </>);
}
