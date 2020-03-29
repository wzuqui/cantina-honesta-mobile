import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#F0F0F5'
  },

  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },

  voltar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  voltarTexto: {
    color: '#e02041',
    fontWeight: 'bold',
    marginLeft: 10
  },

  titulo: {
    marginTop: 20,
    fontSize: 18
  },

  detalheNome: {
    marginTop: 20,
    color: '#737380',
    fontWeight: 'bold'
  },

  detalheEmail: {
    color: '#737380'
  },

  pedido: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: 'bold'
  },

  carrinhoList: {
    marginTop: 20
  },

  carrinhoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopColor: '#DDD',
    borderTopWidth: 1,
    paddingVertical: 20
  },

  carrinhoQuantidade: {
    backgroundColor: '#DDD',
    padding: 2,
    borderRadius: 2,
    marginRight: 5
  },

  totalContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopColor: '#DDD',
    borderTopWidth: 1,
    paddingVertical: 20
  },

  totalTexto: {
    fontSize: 14,
    fontWeight: 'bold'
  },

  totalValor: {
    fontSize: 14,
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
