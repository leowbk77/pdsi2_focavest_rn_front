import { Link, router, Redirect  } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@/contexts/AutenticacaoContext";

export default function Index() {
  const {isAuthenticated} = useAuth();
  return (
    isAuthenticated ? <Redirect href={'/(main)/home'}/> : <Redirect href={'/login'}/>
  );
}
