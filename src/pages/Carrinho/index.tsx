import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { List } from 'linqts';
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import logoImg from '../../assets/logo.png';
import { styles } from './styles';

export function Carrinho() {
  const navigation = useNavigation();
  const route = useRoute();

  const { cliente, carrinho } = route.params as {
    cliente: ICliente;
    carrinho: List<ICarrinho>;
  };

  function valorTotal(carrinho: ICarrinho) {
    return carrinho.quantidade * carrinho.valor;
  }

  function navigateConfirmar() {
    alert(
      `Um e-mail para ${cliente.email} será enviado com os detalhes do pedido`
    );
    navigation.navigate('Clientes');
  }

  function navigateClientes() {
    navigation.navigate('Clientes');
  }

  function navigateVoltar() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Image source={logoImg} />

        <TouchableOpacity style={styles.voltar} onPress={navigateVoltar}>
          <Feather name='arrow-left' color='#e02041' size={18} />
          <Text style={styles.voltarTexto}>Continuar à comprar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.titulo}>Detalhes do carrinho</Text>
      <Text style={styles.detalheNome}>{cliente.nome}</Text>
      <Text style={styles.detalheEmail}>{cliente.email}</Text>

      <Text style={styles.pedido}>Pedido nº 9350</Text>

      <FlatList
        style={styles.carrinhoList}
        data={carrinho.ToArray()}
        keyExtractor={item => item.nome}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.carrinhoItem}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.carrinhoQuantidade}>
                <Text style={{ color: '#000' }}>{item.quantidade}</Text>
              </View>
              <Text>{item.nome}</Text>
            </View>
            <Text>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(valorTotal(item))}
            </Text>
          </View>
        )}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalTexto}>Total</Text>
        <Text style={styles.totalValor}>R$ 23,00</Text>
      </View>
      <View style={styles.acoes}>
        <TouchableOpacity style={styles.button} onPress={navigateClientes}>
          <Feather name='x' color='#FFF' />
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={navigateConfirmar}>
          <Feather name='mail' color='#FFF' />
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
