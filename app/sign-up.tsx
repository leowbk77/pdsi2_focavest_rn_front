import { SafeAreaView } from "react-native-safe-area-context";
import SignUp from '@/views/SignUp';
    
const SignUpScreen = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <SignUp/>
        </SafeAreaView>
    );
};

export default SignUpScreen;