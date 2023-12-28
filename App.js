import { StatusBar } from 'expo-status-bar';
import { Button,TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AdminLogin } from './Components/Admin/adminLogin';
import { VolLogin } from './Components/Volunteer/VolLogin';
import { SeekLogin } from './Components/Seeker/SeekLogin';
import { OtpPageVol } from './Components/Volunteer/VolLogin';
import { OtpPageSeek } from './Components/Seeker/SeekLogin';
import { VolSignUp } from './Components/Volunteer/VolLogin';
import { VolCongratsPage } from './Components/Volunteer/VolLogin';
import { SeekSignUp } from './Components/Seeker/SeekLogin';
import{comp} from './comp';

const Stack=createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Started" component={Started} 
      options={{title:""}}
      />
      <Stack.Screen name="Home" 
      component={HomeScreen} />

      <Stack.Screen name="AdminLogin"
      options={{title:""}}
      component={AdminLogin} />

      <Stack.Screen name="VolLogin"
      options={{title:""}}
      component={VolLogin} />
      <Stack.Screen name="OtpPageVol" 
      options={{title:""}}
      component={OtpPageVol} />
      <Stack.Screen name="VolSignUp" 
      options={{title:""}}
      component={VolSignUp} />
      <Stack.Screen name="VolCongratsPage" 
      options={{title:""}}
      component={VolCongratsPage} />


      <Stack.Screen name="SeekLogin"
      options={{title:""}}
      component={SeekLogin} />
      <Stack.Screen name="SeekSignUp" 
      options={{title:""}}
      component={SeekSignUp} />
      <Stack.Screen name="OtpPageSeek" 
      options={{title:""}}
      component={OtpPageSeek} />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
function Started(props){
  return(
    <View style={styles.container}>
      <TouchableOpacity
      onPress={()=>props.navigation.navigate("Home")}>
        <Text
        style={styles.container_element}
        >Get Started
        </Text>
        <comp/>
      </TouchableOpacity>

      {/* <StatusBar style="auto" /> */}
    </View>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  container_element:{
    
    backgroundColor:"blue",
    color:"#fff",
    padding:10,
    fontSize:20,
    width:200,
    textAlign:'center',
    borderRadius:10,
    marginBottom:10,
    
  },
});

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Text style={{fontSize:35,marginBottom:50}}>Welcome User</Text>
      <View>
      <TouchableOpacity
      onPress={()=>props.navigation.navigate("AdminLogin")}>
        <Text
        style={styles.container_element}
        >Admin</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>props.navigation.navigate("VolLogin")}>
        <Text
        style={styles.container_element}
        >Volunteer</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>props.navigation.navigate("SeekLogin")}>

        <Text
        style={styles.container_element}
        >Seeker</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
}


