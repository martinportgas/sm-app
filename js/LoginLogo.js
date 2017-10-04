import React from 'react';

import{
   Image,
   Platform,
   StyleSheet,
   Text,
   View
} from 'react-native';

const imgUrl = require('./img/logo.png');

const LoginLogo = () =>(
    <View style = {styles.header}>
        <Image 
            source={imgUrl}
        />
    </View>
);

export default LoginLogo;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 50,
        padding: 8,
        marginTop: Platform.OS === 'ios' ? 20 : 0,
    },
    image: {
        width: 280,
        height: 100,
        backgroundColor: '#FFFFFF'
    },
});
