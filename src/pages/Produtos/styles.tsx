import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#F0F0F5'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  clienteNome: {
    color: '#737380',
    textAlign: 'right',
    fontWeight: 'bold'
  },

  headerCheckouButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  headerCheckout: {
    marginLeft: 6,
    lineHeight: 22,
    color: '#e02041',
    textAlign: 'right'
  },

  headerTotalProdutos: {
    color: '#737380',
    textAlign: 'right'
  },

  headerTotalProdutosBold: {
    fontWeight: 'bold'
  },

  headerTotalValor: {
    color: '#737380',
    lineHeight: 22,
    textAlign: 'right'
  },

  headerTotalValorBold: {
    fontWeight: 'bold'
  },

  titulo: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold'
  },

  descricao: {
    fontSize: 13,
    marginTop: 10,
    color: '#737380'
  },

  produtosList: {
    marginTop: 20
  },

  produto: {
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 18
  },

  produtoDetail: {
    padding: 18
  },

  produtoNome: {
    marginTop: -5,
    fontSize: 16,
    lineHeight: 20
  },
  produtoDescricao: {
    marginTop: 10,
    fontSize: 13,
    color: '#737380'
  },

  produtoAdicionar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10
  },

  produtoTexto: {
    color: '#e02041',
    alignItems: 'center'
  },

  produtoValor: {
    color: '#e02041',
    fontWeight: 'bold'
  },

  acoes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopColor: '#DDD',
    borderTopWidth: 1,
    paddingVertical: 20
  },

  button: {
    backgroundColor: '#e02041',
    padding: 15,
    borderRadius: 8,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  }
});
