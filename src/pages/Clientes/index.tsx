import { useNavigation } from '@react-navigation/native';
import React from 'react';
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

export function Clientes() {
  const navigation = useNavigation();

  function navigateToProdutos(cliente: ICliente) {
    navigation.navigate('Produtos', { cliente });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
      </View>

      <Text style={styles.titulo}>Bem Vindo!</Text>
      <Text style={styles.descricao}>
        Escolhe um dos clientes abaixo que deseja iniciar a compra.
      </Text>

      <FlatList
        data={data}
        style={styles.pessoasList}
        keyExtractor={item => String(item.nome)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigateToProdutos(item)}
          >
            <ImageBackground
              style={styles.cardFoto}
              imageStyle={styles.cardFotoStyle}
              source={item.foto}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
