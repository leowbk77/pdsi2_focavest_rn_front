import { Image } from "expo-image";
import { View, StyleSheet } from "react-native";

//<a href="https://www.flaticon.com/free-icons/math" title="math icons">Math icons created by deemakdaksina - Flaticon</a> -> math
// // https://www.freepik.com/icon/physics_5948546#fromView=resource_detail&position=13 -> physics

interface Props {
    subject?: string,
};

export default function Icon({subject}: Props) {
    let fileName = '-icon.png';

    if (subject) {
        fileName = subject + fileName;
    } else {
        fileName = 'default' + fileName;
    }
    
    return(
        <View style={styles.container}>
            <Image source={require(`@/assets/images/${fileName}`)} style={{width: 50, height: 50}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});