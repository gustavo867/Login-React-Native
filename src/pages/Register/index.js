import React, { useState, useEffect } from 'react';
import { Text, Image, StyleSheet, KeyboardAvoidingView, View, TouchableOpacity, TextInput, Animated } from 'react-native'
import { Ionicons, MaterialIcons, Entypo, Fontisto } from '@expo/vector-icons'

export default function Register({ navigation }) {
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
    const [opacity] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.parallel([
          Animated.spring(offset.y, {
            toValue: 0,
            speed: 4,
            bounciness: 30
          }),
          Animated.timing(opacity, {
            toValue: 1,
            duration: 200,
          })
        ]).start();
        
      }, [])

    return(
        <KeyboardAvoidingView style={styles.container}>
            <Ionicons
            style={{ marginTop: 40, marginRight: 350 }}
             name="ios-arrow-back" 
             size={35} color="#FFF" 
             onPress={() => navigation.navigate('Login')}/>
             <View style={styles.containerlogo}>
                <Image source={require('../../assets/logo.png')}/>
            </View>
            <Animated.View 
                style={[
                    styles.containertext,
                    {
                    opacity: opacity,
                    transform: [
                        { translateY: offset.y }
                    ]
                    }
                ]}
            >
                
                    <KeyboardAvoidingView style={{ width: '90%', flexDirection: 'row' }}>
                    <Fontisto style={{ marginTop: 10, marginRight: 8,}} name="person" size={24} color="black" />
                    <TextInput
                    style={styles.input}
                    placeholder="Name"
                    /> 
                    </KeyboardAvoidingView>

                    <KeyboardAvoidingView style={{ width: '90%', flexDirection: 'row' }}>
                    <MaterialIcons style={{ marginTop: 10, marginRight: 5,}} name="email" size={24} color="black" />
                    <TextInput
                    type="email"
                    autoCorrect={false}
                    style={styles.input}
                    placeholder="E-mail"
                    />  
                    </KeyboardAvoidingView> 

                    <KeyboardAvoidingView style={{ width: '90%', flexDirection: 'row' }}>
                    <Entypo style={{ marginTop: 10, marginRight: 5,}} name="lock" size={24} color="black" />
                    <TextInput
                    secureTextEntry={true}
                    autoCorrect={false}
                    style={styles.input}
                    placeholder="Password"
                    /> 
                    </KeyboardAvoidingView>
                    
                      
                    <TouchableOpacity onPress={() => navigation.navigate('Transactions')} style={styles.btnRegister}>
                        <Text style={{ fontSize: 20, }} >Sign In</Text>
                    </TouchableOpacity>
             </Animated.View>

                    
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    containerlogo: {
        height: 200,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 40,
    },

    container: {
        flex: 1,
        backgroundColor: '#757083',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containertext: {
        flex: 1,
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },

    input: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 8,
        padding: 10,
    },

    btnRegister: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
      },
    
})