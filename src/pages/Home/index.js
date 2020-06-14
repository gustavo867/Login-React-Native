import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity } from 'react-native';

export default function Home() {
    return(
    <View style={styles.container}>

        <View style={styles.informationsContainer}>
            <Text style={styles.textBalance}>Your Balance</Text>
            <Text style={styles.textInformation}>$900.000.00</Text>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button}>
                    <FontAwesome5 name="piggy-bank" size={40} color="#273043"/>
                    <Text style={styles.number}>$500.000</Text>
                    <Text style={styles.text}>Expense</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.number}>$50.000</Text>
                    <Text style={styles.text}>Spend to Goals</Text>
                </TouchableOpacity>
            </View>

        </View>

        <View style={styles.transactionsContainer}>
            <Text style={styles.transaction}>Transactions</Text>
            <Text style={styles.transactiontext}>Car Purchase</Text>
        </View>

    </View>
    )   
}

const styles = StyleSheet.create({
    transactionsContainer: {
        flex: 1,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: '#EAF2EF',
        paddingLeft: 20,
    },

    buttons: {
        flexDirection: 'row',
    },

    button: {
        marginTop: 20,
        marginLeft: 20,
        backgroundColor: '#A9D3FF',
        width: '40%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        flexDirection: 'column',
    }, 

    transactiontext: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
    },

    informationsContainer: {
        flex: 1,
        width: '100%',
        height: 50,
        marginTop: 90,
        backgroundColor: '#759AAB'
    },

    logo: {
        marginTop: 40,
    },

    container: {
        flex: 1,
        backgroundColor: '#759AAB',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        paddingLeft: 10,
        fontSize: 15,
        color: '#000',
        fontWeight: '300'
    },

    number: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: '600'
    },

    textBalance: {
        paddingLeft: 20,
        fontSize: 20,
        fontWeight: '200', 
        color: 'rgba(255, 255, 255, 0.4)'
    },

    textInformation: {
        paddingLeft: 20,
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold'
    },

    transaction: {
        fontWeight: 'bold',
        fontSize: 20,
    },
})