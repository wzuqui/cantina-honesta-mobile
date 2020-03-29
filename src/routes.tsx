import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import { Clientes } from './pages/Clientes';
import { Produtos } from './pages/Produtos';
import { Carrinho } from './pages/Carrinho';

export function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen component={Clientes} name='Clientes' />
        <AppStack.Screen component={Produtos} name='Produtos' />
        <AppStack.Screen component={Carrinho} name='Carrinho' />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
