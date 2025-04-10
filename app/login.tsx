import Login from '@/views/Login';
import { SafeAreaView } from 'react-native-safe-area-context';

/* links
  ========rn
  https://reactnative.dev/docs/style
  https://reactnative.dev/docs/safeareaview
  https://reactnative.dev/docs/imagebackground
*/

const LoginScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Login />
    </SafeAreaView>
  );
}

export default LoginScreen;