import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Cadastro() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Ionicons name="arrow-back" size={24} color="teal" style={styles.backIcon} />
      <View style={styles.logoContainer}>
        <Image source={require('./assets/img/logo-login.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Criar Conta</Text>
      <Text style={styles.subtitle}>Comece a fazer suas compras!</Text>

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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#eaf1f1',
    paddingHorizontal: 20,
    paddingTop: 55,
  },
  backIcon: {
    alignSelf: 'flex-start',
  },
  logoContainer: {
    alignItems: 'flex-start', // Alinha o logo à esquerda
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
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
    fontWeight: '400', 
    marginBottom: 20, 
  },
  input: {
    borderWidth: 1,
    borderColor: 'teal',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 11, 
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
    marginBottom: 40, // Para dar espaço extra no final do scroll
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
