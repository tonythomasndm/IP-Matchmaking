import {TouchableOpacity, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import OtpLogin from '../pages/OtpLogin';

export const VolLogin=(props)=>{
    return(
        <View style={styles.container}>
            <Text 
            style={{
                fontSize:30,
                fontWeight:'bold',
                marginBottom:30,
            }}
            >Volunteer Login</Text>
            
            <TextInput placeholder="Enter your Phone Number" 
            style={styles.inputfields}/>
            
            <TouchableOpacity
                onPress={()=>props.navigation.navigate("OtpPageVol")}>
            
                <Text
                style={styles.container_element}
                >
                    Get the OTP
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>props.navigation.navigate("VolSignUp")}>
            
                <Text
                style={{
                    marginTop:50,
                    fontSize:25,
                    color:"blue",
                    
                }}
                >
                    SignUp
                </Text>
            </TouchableOpacity>

        </View>
    )
}
export const OtpPageVol=(props)=>{
    return(
        <View style={styles.container}>
            <Text 
            style={{
                fontSize:30,
                fontWeight:'bold',
                marginBottom:30,
            }}
            >Enter Your OTP</Text>
            <Text>You must have received a 4-digit OTP on your number, please enter it here</Text>
            <Text>If you think, your phone number is incorrect,Go back and change it</Text>
            
            <OtpLogin/>
            {/* <OtpInput 
                numberOfDigits={4}
                focusColor="green"
                onTextChange={text => console.log(text)}
                containerStyle={styles.container}
                inputsContainerStyle={styles.inputsContainer}
                pinCodeContainerStyle={styles.pinCodeContainer}
                pinCodeTextStyle={styles.pinCodeText}
                focusStickStyle={styles.focusStick}
                focusStickBlinkingDuration={500}
            /> */}
            
            <TouchableOpacity
                >
            
                <Text
                style={styles.container_element}
                >
                     Login
                </Text>


            </TouchableOpacity>
            
        </View>
    )
}

export const VolSignUp=(props)=>{
    return(
        <View >
            <ScrollView>
                <View style={{
                    flex:1,
                    backgroundColor: '#fff',
                    // alignItems: 'flex-start',
                    // justifyContent: 'center',
                }}>
                <Text style={{
                    fontSize:30,
                    fontWeight:"bold",
                    marginLeft:10,
                    marginBottom:30,
                    marginTop:10,
                    padding:10,

                }}>Create account</Text>

                <View style={{
                    margin:10,
                }}>
                    <Text style={styles.form_text}>Name</Text>
                    
                    <TextInput style={styles.form_textfield} placeholder="" />

                    <Text style={styles.form_text}>Date of Birth</Text>
                    <TextInput style={styles.form_textfield} placeholder="" />

                    <Text style={styles.form_text}>Gender</Text>
                    <TextInput style={styles.form_textfield} placeholder="" />

                    <Text style={styles.form_text}>Email</Text>
                    <TextInput style={styles.form_textfield} placeholder="" />

                    <Text style={styles.form_text}>Aadhar Card Number</Text>
                    <TextInput style={styles.form_textfield} placeholder="" />

                </View>

               
                <View style={{
                     marginTop:50,
                     marginBottom:10,
                     marginLeft:10,
                     marginRight:10,
                }}>

                    <Text style={styles.form_text}>Address</Text>
                    <TextInput style={styles.form_textfield} placeholder="" />

                    <Text style={styles.form_text}>Village/District</Text>
                    <TextInput style={styles.form_textfield} placeholder="" />

                    <Text style={styles.form_text}>Pincode</Text>
                    <TextInput style={styles.form_textfield} placeholder="" />


                </View>
                
                <View style={{
                    marginTop:50,
                    marginBottom:10,
                    marginLeft:10,
                    marginRight:10,
                }}>
                    <Text style={styles.form_text}>Select your Skills</Text>
                    <TextInput style={styles.form_textfield} placeholder="Skill 1" />
                    <TextInput style={styles.form_textfield} placeholder="Skill 2" />
                    <TextInput style={styles.form_textfield} placeholder="Skill 3" />
                </View>
                

                <View style={{
                    // backgroundColor:"yellow",
                    alignItems:"center",
                    marginBottom:40
                }}>
                <TouchableOpacity

                onPress={()=>props.navigation.navigate("VolCongratsPage")}>
                
            
                <Text
                style={{
                    backgroundColor:"blue",
                    color:"#fff",
                    padding:10,
                    fontSize:20,
                    width:200,
                    textAlign:'center',
                    borderRadius:10,
                    marginTop:20,
                }}
                >
                     Register
                </Text>


            </TouchableOpacity>

                </View>
                
            </View>

            </ScrollView>
            
        </View>
    );
}

export const VolCongratsPage=()=>{
    return(
        <View style={styles.container}>
            <Text style={{
                fontSize:30,
                fontWeight:"bold",
            }}>Congratulations</Text>
            <Text>Your Account has been created</Text>
            <Text>Welcome!</Text>
            <TouchableOpacity
>                
                <Text style={styles.container_element}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
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
      form_textfield:{
        marginBottom:10,
        marginTop:0,
        marginLeft:10,
        marginRight:10,
        padding: 10,
        fontSize:20,
        // borderWidth:2,
        borderRadius:10,
        borderBottomWidth:1,
        borderColor:"blue",
        marginBottom:20,

      },
      form_text:{
        marginLeft:20,
        marginBottom:0,
        fontSize:20,

      }
    
});