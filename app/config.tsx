import ConfigModal from "@/views/ConfigModal";
import { SafeAreaView } from 'react-native-safe-area-context';

const config = () => {
    return (
        <SafeAreaView>
            <ConfigModal />
        </SafeAreaView>
    );
};

export default config;