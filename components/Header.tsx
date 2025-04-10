import { StyleSheet, View, Text } from "react-native";
import { Image } from 'expo-image';
import { PropsWithChildren } from "react";
import { Link } from 'expo-router';

type Props = PropsWithChildren<{
    iconhref: string,
    style?: any,
    top?: number | undefined,
}>;

const Header = ({children, iconhref, top, style}: Props) => {
    return(
        <View style={[styles.main, {paddingTop: top}, style]}>
            <Image style={styles.img} source={require('@/assets/images/FocaVestPLogo.png')} contentFit="scale-down"/>
            <View style={styles.center}>
            </View>
            <View style={styles.icon}>
                <Link href={iconhref}>
                    {children}
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        maxHeight: '15%'
    },
    img: {
        flex: 2,
        height: '100%',
        alignSelf: 'center',
        alignItems: 'center'

    },
    center: {
        flex: 7,
    },
    icon: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center'
    }
});

export default Header;