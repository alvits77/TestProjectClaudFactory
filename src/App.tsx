import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MAIN_ROUTE, QUOTES_ROUTE} from './lib/constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from './screens/MainScreen';
import QuotesScreen from './screens/QuotesScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {orange} from './lib/styles';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  const getTabBarLabel = (route: string): string => {
    switch (route) {
      case MAIN_ROUTE:
        return 'О приложении';
      case QUOTES_ROUTE:
        return 'Котировки';
      default:
        return '?';
    }
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={props => ({
            headerShown: false,
            tabBarLabel: params => (
              <Text style={{color: params.focused ? orange : params.color}}>
                {getTabBarLabel(props.route.name)}
              </Text>
            ),
          })}>
          <Tab.Screen name={MAIN_ROUTE} component={MainScreen} />
          <Tab.Screen name={QUOTES_ROUTE} component={QuotesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
