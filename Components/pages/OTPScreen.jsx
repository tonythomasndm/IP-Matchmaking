import { View, TextInput, Button } from 'react-native'
import React,{useState} from 'react'

const OTPScreen = (props) => {
    const [code, setCode] = useState('');


    async function confirmCode(confirm) {
        try {
          await confirm.confirm(code);
        } catch (error) {
          console.log('Invalid code.');
        }
    }
  return (
    <View>
      <TextInput style={{borderWidth:1, marginBottom:20}} value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode(props.confirm)} />
    </View>
  )
}

export default OTPScreen