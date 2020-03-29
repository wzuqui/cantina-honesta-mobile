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
    alignItems: 'center'
  },

  titulo: {
    fontSize: 16,
    marginTop: 40,
    fontWeight: 'bold'
  },

  descricao: {
    fontSize: 13,
    marginTop: 14,
    color: '#737380'
  },

  pessoasList: {
    marginTop: 32
  },

  card: {
    marginBottom: 16
  },

  cardFoto: {
    aspectRatio: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },

  cardFotoStyle: {
    borderRadius: 18
  }
});
