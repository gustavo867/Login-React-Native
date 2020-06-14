import React from 'react';
import { FontAwesome5, AntDesign } from '@expo/vector-icons'
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
    return(
    <View style={styles.container}>

        <View style={styles.informationsContainer}>
            <AntDesign 
            onPress={() => navigation.navigate('Login')}
            name="back" 
            size={20} 
            color="#FFF" 
            style={{ paddingLeft: 40, marginBottom: 20, }}/>
            <Text style={styles.textBalance}>Your Balance</Text>
            <Text style={styles.textInformation}>$900.000.00</Text>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button}>
                    <FontAwesome5 name="piggy-bank" size={40} color="#273043"/>
                    <Text style={styles.number}>$500.000</Text>
                    <Text style={styles.text}>Expense</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <AntDesign name="creditcard" size={40} color="#273043"/>
                    <Text style={styles.number}>$50.000</Text>
                    <Text style={styles.text}>Spend to Goals</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.transactionsContainer}>
            <View style={styles.transactions}>
                <Text style={styles.transaction}>Transactions</Text>
                <TouchableOpacity style={styles.buttonSee}>
                    <Text style={{ color: 'blue', fontWeight: 'bold' }}>See All</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', paddingLeft: 20, marginTop: 20}}>
                <Image source={require('../../assets/icons8-carro-48.png')}/>
                <View style={{ flexDirection: 'column', paddingLeft: 20, marginTop: 3}}> 
                    <Text style={styles.purchases}>Car Purchase</Text>
                    <Text style={styles.purchasesName}>Shell</Text>
                </View>
                <Text style={styles.puchasesTotal}> -$250 </Text>
            </View>

            <View style={{ flexDirection: 'row', paddingLeft: 20, marginTop: 20}}>
                <Image source={require('../../assets/icons8-casa-48.png')}/>
                <View style={{ flexDirection: 'column', paddingLeft: 20, marginTop: 3}}> 
                    <Text style={styles.purchases}>House Purchase</Text>
                    <Text style={styles.purchasesName}>Airnbnb Home</Text>
                </View>
                <Text style={{ color: '#DC143C', marginTop: 10, fontSize: 16, marginLeft: 70, }}> -$900 </Text>
            </View>

            <View style={{ flexDirection: 'row', paddingLeft: 20, marginTop: 20}}>
                <Image source={require('../../assets/icons8-presente-48.png')}/>
                <View style={{ flexDirection: 'column', paddingLeft: 20, marginTop: 3}}> 
                    <Text style={styles.purchases}>Gift Purchase</Text>
                    <Text style={styles.purchasesName}>Apple</Text>
                </View>
                <Text style={{ marginLeft: 88, color: '#DC143C', marginTop: 10, fontSize: 16 }}> -$500 </Text>
            </View>

            <View style={{ flexDirection: 'row', paddingLeft: 20, marginTop: 20}}>
                <Image source={require('../../assets/icons8-shopaholic-48.png')}/>
                <View style={{ flexDirection: 'column', paddingLeft: 20, marginTop: 3}}> 
                    <Text style={styles.purchases}>Shopping</Text>
                    <Text style={styles.purchasesName}>Wish</Text>
                </View>
                <Text style={{ marginLeft: 115, color: '#DC143C', marginTop: 10, fontSize: 16}}> -$250 </Text>
            </View>

        </View>
        
    </View>
    )   
}

const styles = StyleSheet.create({
    purchasesContainer: {
        width: '100%',
        backgroundColor: 'blue',
    },

    transactionsContainer: {
        flex: 1,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flexDirection: 'column',
        backgroundColor: '#f0f0f5'
    },

    transactions: {
        paddingLeft: 0,
        width: '100%',
        height: 50,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    buttonSee: {
        width: '30%',
        height: 45,
        backgroundColor: 'rgba(204, 204, 204, 0.3)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    buttons: {
        paddingLeft: 20,
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
        backgroundColor: 'blue'
    },


    container: {
        flex: 1,
        backgroundColor: 'blue',
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
        paddingLeft: 40,
        fontSize: 20,
        fontWeight: '200', 
        color: 'rgba(255, 255, 255, 0.4)'
    },

    textInformation: {
        paddingLeft: 40,
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold'
    },

    transaction: {
        fontWeight: '700',
        fontSize: 23,
        marginRight: 80,
    },

    purchases: {
        fontSize: 15,
        color: '#000',
    },

    purchasesName: {
        fontSize: 15,
        color: 'rgba(0, 0, 0, 0.3)'
    },

    puchasesTotal: {
        color: '#DC143C', 
        marginTop: 10, 
        fontSize: 16, 
        marginLeft: 90,
    }
})