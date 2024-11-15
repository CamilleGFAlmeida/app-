import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CadastroScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#047377" />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/img/logo-login.png')} style={styles.logoImage} />
      </View>
      <Text style={styles.title}>Entrar</Text>
      <Text style={styles.subtitle}>Entre com sua conta para continuar suas compras!</Text>
      

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.input} secureTextEntry />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirme sua senha</Text>
        <TextInput style={styles.input} secureTextEntry />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    backgroundColor: '#E7F0F3',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 55,
    left: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40, 
  },
  logoImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#007676',
    textAlign: 'left', 
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 11, 
    textAlign: 'left',
    marginBottom: 24,  
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 11,
    color: '#000',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: '#047377',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 11,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#047377',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
