import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { List } from 'linqts';
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import logoImg from '../../assets/logo.png';
import { styles } from './styles';
import axios from 'axios';

export function Carrinho() {
  const navigation = useNavigation();
  const route = useRoute();

  const { cliente, carrinho } = route.params as {
    cliente: ICliente;
    carrinho: List<ICarrinho>;
  };

  function valorSubTotal(carrinho: ICarrinho) {
    return carrinho.quantidade * carrinho.valor;
  }

  function valorTotal() {
    return carrinho.Select(p => valorSubTotal(p)).Sum();
  }

  async function email({ para, assunto, html }) {
    return await axios.post('https://cantina-honesta-backend.herokuapp.com/', {
      para,
      assunto,
      html
    });
  }

  console.log(
    `Cliente ${
      cliente.email
    } entrou na página de carrinho, valor total: ${valorTotal()}`
  );

  function sanitizaValor(valor: number) {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  }

  function converteCarrinhoEmTableHtml(car: List<ICarrinho>) {
    const carrinho = new List(car.ToArray())
      .Select(({ quantidade, nome, valor }) => ({
        quantidade,
        nome,
        valor: sanitizaValor(valorSubTotal({ quantidade, valor } as ICarrinho))
      }))
      .ToArray();
    return `
<table border='1' cellpadding='5'>
<thead><tr>${Object.keys(carrinho[0])
      .map(propriedade => `<th>${propriedade}</th>`)
      .join(' ')}</tr></thead>
<tbody>${carrinho
      .map(
        item =>
          `<tr>${Object.values(item)
            .map(propriedade => `<td>${propriedade}</td>`)
            .join(' ')}</tr>`
      )
      .join(' ')}</tbody>
</table>`;
  }

  async function navigateConfirmar() {
    alert(
      `Um e-mail para ${cliente.email} será enviado com os detalhes do pedido`
    );
    const resposta = await email({
      para: cliente.email,
      assunto: 'Foi realizado uma nova compra na Cantina Honesta',
      html: [
        'Detalhes do pedido:',
        `Horário ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
        converteCarrinhoEmTableHtml(carrinho),
        `Total: ${sanitizaValor(valorTotal())}`
      ].join('</br>')
    });
    console.log(resposta);
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
              }).format(valorSubTotal(item))}
            </Text>
          </View>
        )}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalTexto}>Total</Text>
        <Text style={styles.totalValor}>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(valorTotal())}
        </Text>
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
