import react from 'react';
import {
    StyleSheet
} from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    contentHeader: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        paddingTop: 40,
        paddingLeft: 20
    },
    contentMiddle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentMiddleChild: {
        flexDirection: 'row'
    },
    contentFooter: {
        backgroundColor: '#FFFFFF',
        padding: 10
    },
    btnItem : {
        backgroundColor: '#D21111',
        paddingHorizontal: 30,
        paddingVertical: 30,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#FFFFFF',
        margin: 3,
        borderRadius: 3
    },
    imageHeader: {
        width: 70,
        height: 70,
        alignSelf: 'center',
        marginBottom: 20,
        resizeMode: 'contain',
    },
    textHeader: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    textFooter: {
        color: '#FE5151',
        fontStyle: 'italic',
        textDecorationLine: 'underline'
    },
    textBtn: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
});

export default globalStyles;