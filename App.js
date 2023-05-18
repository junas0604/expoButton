import React from "react";
import {Stack,Button, AppBar} from "@react-native-material/core";

const App =() =>(

  <Stack fill center spacing={4}>
  <Button title ="Register" onPress={()=> alert("Registration Form")}/>

  <Button title ="Login" onPress={()=> alert("Login Form")}/>
  </Stack>

  
);

export default App;


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Junas Nazarito Gutib</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
