import { Link, router, Redirect  } from "expo-router";
import { Button, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <Redirect href={'/login'}/>
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
