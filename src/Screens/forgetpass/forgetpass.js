import React, {useState} from 'react';

import {View, Text, SafeAreaView, TextInputComponent, Image,  KeyboardAvoidingView,  TouchableOpacity, Alert } from 'react-native';
import ConstButton from '../../asset/button';
import TextInputWithLable from '../../Component/TextInputWithLable';
import navigationString from '../../constants/navigationString';
import styles from './styles';
import validator from '../../utils/validations';
import {showError} from '../../utils/helperFunction';
import SocialButton from '../../asset/socialButton';





export default function Forgetpass({navigation}) {
    const showAlert = () =>
  Alert.alert(
    "Successful",
    "Please check your email",
    // [
    //   {
    //     text: "Cancel",
    //     onPress: () => Alert.alert("Cancel Pressed"),
    //     style: "cancel",
    //   },
    // ],
    // {
    //   cancelable: true,
    //   onDismiss: () =>
    //     Alert.alert(
    //       "This alert was dismissed by tapping outside of the alert dialog."
    //     ),
    // }
  );
  
  return (
    <View style={styles.container}>

      <KeyboardAvoidingView behavior="position">

      <View style={styles.img}> 
      <Image source={require('../../asset/forget.png')} style={{ width: 250, height: 250}}/>
      <Text style={styles.header}>Create a new password</Text>


      </View>

      <TextInputWithLable
        placeholder="abc@gmail.com"
        label="Email"
        onChangeText={userName => updateState({userName})}
      />

      {/* <TextInputWithLable
        placeholder="Your Email"
        label="E-mail"
        onChangeText={email => updateState({email})}
      />

      <TextInputWithLable
        placeholder="Your Password"
        label="Password"
        isSecure={isSecure}
        secureTextEntry={isSecure}
        onChangeText={password => updateState({password})}
      /> */}

<ConstButton text="Submit" onPress={showAlert} />
      </KeyboardAvoidingView>

      <TouchableOpacity style={styles.new_acc} onPress={()=> navigation.navigate(navigationString.SIGNIN)}>

        <Text style={{color:'#6902FC', fontWeight: 'bold'}}>Back to Login</Text>

        </TouchableOpacity>




    </View>
  );
}
