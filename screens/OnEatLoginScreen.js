import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

// Importa a imagem da logo diretamente
const logoImage = require('./assets/img/logo-login.png'); // Caminho relativo à pasta do componente
const loginImage = require('./assets/img/login.png'); // Caminho da imagem de login

export default function OnEatLoginScreen() {
  return (
    <View style={styles.container}>
      {/* Imagem ocupando a parte de cima da tela */}
      <View style={styles.imagePlaceholder}>
        <Image
          source={loginImage} // Usa a imagem importada
          style={styles.topImage}
        />
      </View>

      {/* Substitui o logo em texto por uma imagem */}
      <View style={styles.logoContainer}>
        <Image source={logoImage} style={styles.logoImage} />
      </View>

      <Text style={styles.welcomeText}>
        Bem-Vindo ao <Text style={styles.appBold}>OnEat</Text>
      </Text>
      <Text style={styles.subText}>O que deseja fazer hoje?</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>ou</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>

      <View style={styles.socialContainer}>
        {/* Ícones do Google e Facebook lado a lado */}
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Google_icon.svg' }} // URL atualizada do ícone do Google
          style={styles.socialIcon}
        />
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' }}
          style={styles.socialIcon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  imagePlaceholder: {
    width: '100%',
    height: Dimensions.get('window').height * 0.50, // Ocupa 50% da altura da tela
    overflow: 'hidden',
  },
  topImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  logoContainer: {
    position: 'absolute',  // Adiciona a sobreposição
    top: '20%', // Ajusta a distância da parte superior da tela
    left: '47%',
    transform: [{ translateX: -42.5 }], // Centraliza a logo horizontalmente
    zIndex: 1, // Certifica-se de que a logo fica sobre o fundo
  },
  logoImage: {
    width: 120, // Aumenta o tamanho da logo
    height: 120,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 50, 
  },
  appBold: {
    fontWeight: 'bold',
    color: '#0D7B72',
  },
  subText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    width: '80%',
    paddingVertical: 12,
    backgroundColor: '#0D7B72',
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  orText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  socialIcon: {
    width: 36,
    height: 36,
    marginHorizontal: 10,
  },
});
