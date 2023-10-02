import {TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';


export const AdminLogin=(props)=>{
    return(
        <View style={styles.container}>
            <TextInput placeholder="Username" 
            style={styles.inputfields}/>
            <TextInput placeholder="Password"
            style={styles.inputfields}
            secureTextEntry={true}/>
            <TouchableOpacity
            >
                <Text

                style={styles.container_element}
                >
                    Sign in as Admin
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputfields:{
        width:300,
        padding:10,
        fontSize:20,
        borderWidth:2,
        borderRadius:10,
        borderBottomWidth:1,
        borderColor:"blue",
        marginBottom:20,
    },
    container_element:{
    
        backgroundColor:"blue",
        color:"#fff",
        padding:10,
        fontSize:20,
        width:200,
        textAlign:'center',
        borderRadius:10,
        marginTop:100,
        
      },
    
});