import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CalendarioScreen from '@/views/CalendarioScreen';

export default function Calendario() {
  return(
    <SafeAreaView style={{flex: 1}}>
      <CalendarioScreen />
    </SafeAreaView>
  );
}