import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <Ionicons name="arrow-back" size={20} color="teal" style={styles.backIcon} />
      <View style={styles.logoContainer}>
        <Image source={require('./assets/img/logo-login.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput placeholder="Nome" style={styles.input} />
      <TextInput placeholder="Sobrenome" style={styles.input} />
      <View style={styles.row}>
        <TextInput placeholder="CPF" style={[styles.input, styles.halfInput]} />
        <TextInput placeholder="CEP" style={[styles.input, styles.halfInput]} />
      </View>
      <TextInput placeholder="Rua" style={styles.input} />
      <View style={styles.row}>
        <TextInput placeholder="Número" style={[styles.input, styles.halfInput]} />
        <TextInput placeholder="Complemento" style={[styles.input, styles.halfInput]} />
      </View>
      <View style={styles.row}>
        <TextInput placeholder="Estado" style={[styles.input, styles.halfInput]} />
        <TextInput placeholder="Cidade" style={[styles.input, styles.halfInput]} />
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
    backgroundColor: '#eaf1f1',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backIcon: {
    alignSelf: 'flex-start',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 120, // Ajuste conforme o tamanho desejado
    height: 120, // Ajuste conforme o tamanho desejado
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', 
  },
  input: {
    borderWidth: 1,
    borderColor: 'teal',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
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
