import { Feather } from '@expo/vector-icons';
import { List } from 'linqts';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import logoImg from '../../assets/logo.png';
import { data } from './data';
import { styles } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';

export function Produtos() {
  const navigation = useNavigation();
  const route = useRoute();

  const [produtos] = useState<ICarrinho[]>(data as ICarrinho[]);
  const { cliente } = route.params as { cliente: ICliente };
  const [carrinho, setCarrinho] = useState<List<ICarrinho>>(
    new List<ICarrinho>()
  );

  console.log(`Cliente ${cliente.email} entrou na página de produtos`);

  const valorTotal = carrinho.Select(p => p.quantidade * p.valor).Sum();

  async function adicionarCarrinho(produto: ICarrinho) {
    const novoCarrinho = carrinho.ToArray();

    let novoProduto = novoCarrinho.find(p => p.nome === produto.nome);

    if (novoProduto === undefined) {
      novoProduto = produto as ICarrinho;
      novoProduto.quantidade = 0;

      novoCarrinho.push(novoProduto);
    }
    novoProduto.quantidade += 1;

    setCarrinho(new List(novoCarrinho));
  }

  async function navigateCarrinho() {
    navigation.navigate('Carrinho', { cliente, carrinho });
  }

  function navigateClientes() {
    navigation.navigate('Clientes');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <View>
          <Text style={styles.clienteNome}>{cliente.nome}</Text>

          <Text style={styles.headerTotalProdutos}>
            Total de{' '}
            <Text style={styles.headerTotalProdutosBold}>
              {carrinho.Count()}
            </Text>{' '}
            produtos
          </Text>

          <Text style={styles.headerTotalValor}>
            Valor total{' '}
            <Text style={styles.headerTotalValorBold}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(valorTotal)}
            </Text>
          </Text>

          <TouchableOpacity
            style={styles.headerCheckouButton}
            onPress={navigateCarrinho}
          >
            <Feather name='shopping-cart' color='#e02041' />
            <Text style={styles.headerCheckout}>Ver carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.titulo}>Produtos</Text>
      <Text style={styles.descricao}>Selecione um dos produtos abaixo</Text>

      <FlatList
        style={styles.produtosList}
        data={produtos}
        keyExtractor={item => item.nome}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.produto}
            onPress={() => adicionarCarrinho(item)}
          >
            <ImageBackground
              source={{ uri: item.foto }}
              style={{
                height: 150
              }}
              imageStyle={{
                borderTopLeftRadius: 18,
                borderTopRightRadius: 18
              }}
            />
            <View style={styles.produtoDetail}>
              <Text style={styles.produtoNome}>{item.nome}</Text>
              <Text style={styles.produtoDescricao}>{item.descricao}</Text>

              <View style={styles.produtoAdicionar}>
                <Text style={styles.produtoTexto}>
                  <Feather name='plus' color='#e02041' />
                  Adicionar no carrinho
                </Text>
                <Text style={styles.produtoValor}>
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(item.valor)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <View style={styles.acoes}>
        <TouchableOpacity style={styles.button} onPress={navigateClientes}>
          <Feather name='arrow-left' color='#FFF' />
          <Text style={styles.buttonText}>Clientes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateCarrinho}>
          <Feather name='shopping-cart' color='#FFF' />
          <Text style={styles.buttonText}>Ver carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
