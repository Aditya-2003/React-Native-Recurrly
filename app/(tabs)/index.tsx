import { View, Text} from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/Onboarding" 
      style={{
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
        color: 'white',
        fontWeight: 'bold',
      }}>    
        Go to Onboarding
      </Link>

      <Link 
      style={{
        marginTop: 20,
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 5,
        color: 'white',
        fontWeight: 'bold',
      }}
      href="/subscriptions/spotify">Spotify Sub</Link>
      <Link 
      style={{
        marginTop: 20,
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 5,
        color: 'white',
        fontWeight: 'bold',
      }}
      href={{
        pathname : "/subscriptions/[id]",
        params: {id: 'claude'}
      }}>Claude Sub</Link>
    </View>
  );
}