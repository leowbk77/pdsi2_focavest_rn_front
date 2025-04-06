import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CalendarioScreen from '@/views/CalendarioScreen';

export default function Calendario() {
  return(
    <SafeAreaView style={styles.container}>
      <CalendarioScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
