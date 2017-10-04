import React from 'react';
import { 
        View, 
        Text, 
        TextInput, 
        KeyboardAvoidingView,
        StyleSheet 
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import globalStyles from './style/Global';
import { 
        FormLabel, 
        FormInput, 
        FormValidationMessage,
        Button
} from 'react-native-elements';
import LoginLogo from './LoginLogo';
function test(){

}
const MyNavScreen = ({ navigation, banner }) => (
    <KeyboardAvoidingView behavior='padding' style={globalStyles.container}>
      <View style={styles.inputContainer}>
        <LoginLogo />
        <FormLabel color='red'>Username</FormLabel>
        <FormInput underlineColorAndroid='#D7C5C5' onChangeText={test}/>


        <FormLabel>Password</FormLabel>
        <FormInput underlineColorAndroid='#D7C5C5' onChangeText={test} secureTextEntry={true}/>

        
        <View style={{marginTop: 20}}>
        <Button
            raised
            icon={{
                name: 'unlock-alt',
                type: 'font-awesome'    
            }}
            backgroundColor= '#D21111'
            title='LOGIN' />
        </View>
       
      </View>
      <View style={globalStyles.contentFooter}>

      </View>
    </KeyboardAvoidingView>
);

const MyActivationScreenConfirm = ({ navigation }) => (
  <MyNavScreen banner="Home Screen" navigation={navigation} />
);

const ActivationScreen = StackNavigator({
  Home: {
    screen: MyActivationScreenConfirm,
  }
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#D21111',
      height: 80
    },
    textHeader: {
      fontSize: 18,
      fontWeight: 'bold',
      paddingLeft: 15
    },
    content: {
        flex: 1
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center'
      },
      inputText: {
        height: 50,
        backgroundColor: '#FFFFFF',
        fontSize: 16,
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 5
      }
});

export default ActivationScreen;
