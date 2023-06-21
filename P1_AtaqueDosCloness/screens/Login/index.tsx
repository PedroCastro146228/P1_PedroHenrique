import React from "react";
import { Text, View, TouchableOpacity, Button, Image, TextInput } from 'react-native';
import { styles } from "./styles";
import facebookLiteIcone from '../../src/assets/images/facebookLiteIcone.png'
import { StatusBar } from "expo-status-bar";

export const Login = () => {
    return (
        <View style={styles.container}> 
            <Image style={styles.image} source={facebookLiteIcone}/>
            <View style={styles.espacamento}>
            <TextInput 
                style={styles.inputEmail} 
                placeholderTextColor={'white'}
                placeholder='Name or Email'
                />

                <TextInput 
                style={styles.inputPassword}
                placeholderTextColor={'white'}
                placeholder='Password'
                />
            </View>
            <TouchableOpacity style={[styles.button, styles.prop]}>
            <Text style={styles.buttonText}>
                Enter
            </Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={styles.SUFF}>
                Sign Up for Facebook
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.FP}>
                Forgot password?
            </Text>
            </TouchableOpacity>
            <StatusBar style="light"/>
        </View>
    )
}