import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CadastroPassword() {
  return (
    <View style={styles.container}>
      <Ionicons name="arrow-back" size={24} color="teal" style={styles.backIcon} />
      <View style={styles.logoContainer}>
        <Image source={require('./assets/img/logo-login.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Confirme seus dados</Text>
      <Text style={styles.subtitle}>Digite seus dados para avançar.</Text>

      <Text style={styles.label}>Digite sua senha</Text>
      <TextInput placeholder="Digite sua senha" style={styles.input} />

      <Text style={styles.label}>Confirme sua senha</Text>
      <TextInput placeholder="Confirme sua senha" style={styles.input} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf1f1',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backIcon: {
    alignSelf: 'flex-start',
  },
  logoContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginTop: 50, 
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
    marginBottom: 5,
    color: '#007676', 
  },
  subtitle: {
    fontSize: 11,
    marginBottom: 20, 
  }, 
  label: {
    fontSize: 12,
    color: '#333',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'teal',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 11, 
  },
  button: {
    backgroundColor: 'teal',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
