import { Link, router } from "expo-router";
import { Button, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.viewBtn}>
          <Button title="Tela de Login" onPress={() => router.push("/login")} color={"#82BFAB"}/>
        </View>
        <View style={styles.viewBtn}>
          <Button title="Tela de Sign-up" onPress={() => router.push("/sign-up")} color={"#82BFAB"}/>
        </View>
        <View style={styles.viewBtn}>
          <Button title="Tela Principal" onPress={() => router.push("/main")} color={"#82BFAB"}/>
        </View>
        <View style={styles.viewBtn}>
          <Button title="Tela inexistente (teste)" onPress={() => router.push("/inexistente")} color={"#82BFAB"}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  viewBtn: {
    marginVertical: 8,
  },
});
