import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

/* ICONES
  https://icons.expo.fyi/

  TABS
  https://docs.expo.dev/router/advanced/tabs/

*/

export default function TabLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: '#616E7D'}}>
      <Tabs.Screen 
        name="home" 
        options={{ 
          title: 'Home', 
          headerShown: false,
          tabBarIcon: () => <Ionicons name="home-sharp" size={24} color="#82BFAB" />
        }} 
      />

      <Tabs.Screen 
        name="calendario" 
        options={{
          title: 'Calendario',
          headerShown: false,
          tabBarIcon: () => <Ionicons name="calendar-number-sharp" size={24} color="#82BFAB" />  
        }} 
      />

      <Tabs.Screen 
        name="perfil" 
        options={{ 
          title: 'Perfil',
          headerShown: false,
          tabBarIcon: () => <Ionicons name="person-circle-sharp" size={24} color="#82BFAB" />
        }} 
      />

    </Tabs>
  );
}