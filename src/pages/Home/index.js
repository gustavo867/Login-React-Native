import React, { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import { Ionicons, MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';


export default function Home({ navigation }) {
    const [isVisible, setIsVisible] = useState(true);

    function handleToggleVisibility() {
        setIsVisible((prevState) => !prevState)
    }

    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.bar}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Ionicons name="ios-list" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 300, }} onPress={handleToggleVisibility}>
                <MaterialIcons name={isVisible ? 'notifications' : 'notifications-off'} size={24} color="black" />
            </TouchableOpacity>
            </View>

            <View style={styles.welcomeContainer}>
                <Text style={{ color: "rgba(255, 255, 255, 0.3)", fontSize: 30, }}>Welcome Back</Text>
                <Text style={{ color: "#000", fontSize: 31, }}>Gustavo</Text>
            </View>

            <View style={styles.search}>
                <Ionicons style={{ marginLeft: 10 }} name="ios-search" size={25} color="black" />
                <TextInput 
                style={styles.input}
                placeholder="Search"
                />
            </View>

            <View style={{ flexDirection: 'row', }}>

            <View style={{ flexWrap: 'wrap', marginLeft: 5, marginTop: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Transactions')} style={styles.cards}>
                <Image source={require('../../assets/icons8-saco-de-dinheiro-96.png')}/>
                <Text style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: 17, paddingLeft: 10 }}>Transactions</Text>
                <Text style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: 20, paddingLeft: 10 }}>7 items</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={styles.recommendations}>
                <Image source={require('../../assets/icons8-estrela-96.png')}/>
                <Text style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: 17, paddingLeft: 10 }}>Recommendations</Text>
                <Text style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: 20, paddingLeft: 10 }}>6 items</Text>
            </TouchableOpacity>
            </View>

            <View style={{ flexWrap: 'wrap-reverse', marginLeft: 10, marginTop: 10,}}>

            <TouchableOpacity onPress={() => {}} style={styles.budget}>
                <Image source={require('../../assets/icons8-cofrinho-96.png')}/>
                <Text style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: 17, paddingLeft: 10 }}>Budget</Text>
                <Text style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: 20, paddingLeft: 10 }}>4 items</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={styles.creditCard}>
                <AntDesign style={{ marginLeft: 10 }} name="creditcard" size={90} color="#0353A4" backgroundColor="#0353A4" />
                <Text style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: 17, paddingLeft: 10 }}>Credit Cards</Text>
                <Text style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: 20, paddingLeft: 10 }}>6 items</Text>
            </TouchableOpacity>

            </View>

            </View>
                   
            <Text style={{ fontSize: 27, marginLeft: 20, }}>Choose a categories</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity style={styles.servicesButton}>
                    <FontAwesome name="bank" size={26} color="black" />
                    <Text>Branch Services</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.paymentButton}>
                    <MaterialIcons name="attach-money" size={30} color="black" />
                    <Text>Make a payment</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#7159c1',
        flex: 1,
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'flex-start'
    },

    cards: {
        marginTop: 5,
        borderRadius: 15,
        marginLeft: 15,
        width: 170,
        height: 203,
        backgroundColor: 'rgba(34,139,34, 0.7)',
        justifyContent: 'center',
        flexDirection: 'column',
        opacity: 1,
    },

    recommendations: {
        marginBottom: 10,
        marginTop: 5,
        borderRadius: 15,
        marginLeft: 15,
        width: 170,
        height: 203,
        backgroundColor: '#D6BA73',
        justifyContent: 'center',
        flexDirection: 'column',
        opacity: 1,
    },

    budget: {
        marginTop: 5,
        borderRadius: 15,
        marginLeft: 15,
        width: 170,
        height: 203,
        backgroundColor: 'rgba(222, 60, 75, 0.7)',
        justifyContent: 'center',
        flexDirection: 'column',
        opacity: 1,
    },

    servicesButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10,
        flexDirection: 'row',
        width: '40%',
        height: 60,
        backgroundColor: 'rgba(255, 255, 255, 0.4)'
    },

    paymentButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 20,
        flexDirection: 'row',
        width: '40%',
        height: 60,
        backgroundColor: 'rgba(255, 255, 255, 0.4)'
    },

    creditCard: {
        marginBottom: 10,
        marginTop: 5,
        borderRadius: 15,
        marginLeft: 15,
        width: 170,
        height: 203,
        backgroundColor: 'rgba(21, 30, 63, 0.7)',
        justifyContent: 'center',
        flexDirection: 'column',
        opacity: 1,
    },

    search: {
        width: '86%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(158, 173, 200, 0.5)',
        borderWidth: .5,
        borderColor: '#000',
        height: 50,
        borderRadius: 8,
        marginLeft: 30,
        marginBottom: 10,
        marginTop: 10 
    },

    welcomeContainer: {
        marginTop: 10,
        paddingLeft: 30,
    },

    bar: {
        marginTop: 50,
        paddingLeft: 20,
        flexDirection: 'row',
        width: '100%',
    },
    
    input: {
        color: '#000',
        fontSize: 20,
        paddingLeft: 10,
    },

})