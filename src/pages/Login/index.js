import React, { useState, useEffect } from 'react';
import { StyleSheet, 
  Text, 
  View, 
  KeyboardAvoidingView, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Animated,
 } from 'react-native';

export default function Login({ navigation }) {
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

  return (
    <KeyboardAvoidingView style={styles.container}>
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
        <TextInput
        style={styles.input}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={() => {}}
        />
         <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        autoCorrect={false}
        onChangeText={() => {}}
        />

        <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Criar conta gratuita</Text>
        </TouchableOpacity>

      </Animated.View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#757083',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerlogo: {
    flex: 1,
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
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 8,
    padding: 10,
  },

  btnSubmit: {
    backgroundColor: '#EAF4F4',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  btnRegister: {
    marginTop: 10,
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  submitText: {
    color: '#020300',
    fontSize: 16,
  },

  registerText: {
    color: '#020300',
  },
});