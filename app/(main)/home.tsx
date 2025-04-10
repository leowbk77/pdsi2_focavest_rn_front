import HomeScreen from '@/views/HomeScreen';
import { SafeAreaView } from 'react-native';

export default function Home() {
  return (
      <SafeAreaView style={{flex: 1}}>
        <HomeScreen />
      </SafeAreaView>
  );
}