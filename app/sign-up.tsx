import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from 'react-native';
import SignUp from '@/views/SignUp';
    
const SignUpScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <SignUp/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default SignUpScreen;