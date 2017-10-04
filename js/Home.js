
import React from 'react';
import { Icon } from 'react-native-elements'
import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Header from './Header';
import SimpleStack from './SimpleStack';
import ActivationScreen from './ActivationScreen';
import globalStyles from './style/Global';

const MainScreen = ({ navigation }) => (
    <View style={globalStyles.container}>
      <Header />
      <View style={globalStyles.contentHeader}>
        <Text style={globalStyles.textHeader}>Mobile Loan Origination</Text>
        <Text>Kami hadir dengan aplikasi untuk membantu anda</Text>
      </View>
      <View style={globalStyles.contentMiddle}>
        <View style={globalStyles.contentMiddleChild}>
            {Object.keys(AppRoutes).map((routeName: string) => (
              <TouchableOpacity
                key={routeName}
                onPress={() => {
                  const { path, params, screen } = AppRoutes[routeName];
                  const { router } = screen;
                  const action = path && router.getActionForPathAndParams(path, params);
                  navigation.navigate(routeName, {}, action);
                }}>
            <View style={globalStyles.btnItem}>
             <Text 
                style={globalStyles.textBtn}>
             {AppRoutes[routeName].name == 'Login' ? 'Log in' : 'Aktivasi'}
            </Text>
            </View>
          </TouchableOpacity>
        ))}
        </View>
      </View>
      <View style={globalStyles.contentFooter}>
        <Text style={globalStyles.textFooter}>Butuh Bantuan? Hubungi kami</Text>
      </View>
    </View>
);

const AppRoutes = {
  Login: {
    name: 'Login',
    description: 'Login Screen',
    screen: SimpleStack,
  },
  Activate: {
    name: 'Aktivasi',
    description: 'Aktivasi Screen',
    screen: ActivationScreen,
  },
};

const AppNavigator = StackNavigator(
  {
    ...AppRoutes,
    Index: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);
export default () => <AppNavigator />;