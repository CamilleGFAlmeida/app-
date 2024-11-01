import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Importando a logo local
import logoImage from './assets/img/logo.png';

export default function OrderScreen() {
  const [selectedTab, setSelectedTab] = useState('meusPedidos');

  return (
    <View style={styles.container}>
      {/* Barra de Navegação Superior */}
      <View style={styles.topNav}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={20} color="#007676" />
        </TouchableOpacity>
        {/* Logo no centro da barra de navegação */}
        <Image source={logoImage} style={styles.logoTopNav} />
        <View style={styles.topNavIcons}>
          <TouchableOpacity>
            <Ionicons name="pricetags" size={20} color="#007676" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartIcon}>
            <Ionicons name="cart-outline" size={20} color="#007676" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Abas "Meus Pedidos" e "Histórico de Pedidos" */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'meusPedidos' && styles.activeTab]}
          onPress={() => setSelectedTab('meusPedidos')}
        >
          <Text style={[styles.tabText, selectedTab === 'meusPedidos' && styles.activeTabText]}>Meus Pedidos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'historicoPedidos' && styles.activeTab]}
          onPress={() => setSelectedTab('historicoPedidos')}
        >
          <Text style={[styles.tabText, selectedTab === 'historicoPedidos' && styles.activeTabText]}>Histórico de Pedidos</Text>
        </TouchableOpacity>
      </View>

      {/* Informações do Pedido */}
      <ScrollView style={styles.scrollView}>
        {selectedTab === 'meusPedidos' ? (
          <View style={styles.orderBox}>
            <View style={styles.restaurantInfo}>
              <Image source={logoImage} style={styles.logo} />
              <View>
                <Text style={styles.restaurantName}>Burst Burger</Text>
                <Text style={styles.restaurantDetails}>Av Goiás, 360 - São Caetano</Text>
                <Text style={styles.time}>20 ~ 40 Min</Text>
              </View>
            </View>

            <View style={styles.orderItems}>
              <Text style={styles.item}>2x Burst Burger</Text>
              <Text style={styles.price}>R$ 43,80</Text>
            </View>
            <View style={styles.orderItems}>
              <Text style={styles.item}>1x Brownie</Text>
              <Text style={styles.price}>R$ 10,90</Text>
            </View>
            <Text style={styles.total}>Total: R$ 54,70</Text>

            <Text style={styles.address}>Endereço de Entrega</Text>
            <Text style={styles.addressDetails}>Rua Bel Alliance, 56 - São Caetano do Sul</Text>
            
            <Text style={styles.payment}>Forma de Pagamento</Text>
            <Text style={styles.paymentDetails}>Cartão de Crédito (Visa)</Text>

            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.trackButton}>
                <Text style={styles.trackButtonText}>Acompanhar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton}>
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.orderBox}>
            <Text style={styles.historicoText}>Nenhum pedido passado encontrado.</Text>
          </View>
        )}
      </ScrollView>

      {/* Barra de Navegação Inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="home-outline" size={20} color="#007676" />
          <Text style={styles.navText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="search-outline" size={20} color="#007676" />
          <Text style={styles.navText}>Busca</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="receipt-outline" size={20} color="#007676" />
          <Text style={styles.navText}>Pedidos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="person-outline" size={20} color="#007676" />
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#DDD',
  },
  logoTopNav: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  topNavIcons: {
    flexDirection: 'row',
  },
  cartIcon: {
    marginLeft: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#DDD',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: '#007676',
  },
  tabText: {
    color: '#777',
    fontSize: 16,
  },
  activeTabText: {
    color: '#007676',
    fontWeight: 'bold',
  },
  orderBox: {
    margin: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
  },
  restaurantInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  restaurantDetails: {
    color: '#666',
  },
  time: {
    color: '#666',
  },
  orderItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  item: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    color: '#666',
  },
  total: {
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 10,
  },
  address: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  addressDetails: {
    fontSize: 14,
    color: '#666',
  },
  payment: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  paymentDetails: {
    fontSize: 14,
    color: '#666',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  trackButton: {
    flex: 1,
    backgroundColor: '#fff',
    border: '2px, solid, #007676', 
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 10,
  },
  trackButtonText: {
    color: '#007676',
    fontSize: 16,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#FFF',
    border: '2px, solid, #FF0000',  
  },
  cancelButtonText: {
    color: '#FF0000',
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
    marginBottom: 60,
  },
  historicoText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderColor: '#DDD',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#007676',
    marginTop: 4,
  },
});
