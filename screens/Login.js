import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import * as firebase from 'firebase'

export default class Login extends React.Component {
    state = {
        email: "",
        password: "",
        errorMessage: null
    }

    handleLogin = () => {
        const {email, password} = this.state

        firebase.auth().signInWithEmailAndPassword(email, password).catch(error => this.setState({errorMessage: error.message}))
    }
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/geeazylogo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Geeazy Mobile App</Text>
      <View style={styles.errorMessage}>
        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
      </View>

      <FormInput
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={email => this.setState({email})}
        value={this.state.email}
      />

      <FormInput
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
        onChangeText={password => this.setState({password})}
        value={this.state.password}
      />

      <FormButton
        buttonTitle="Sign In"
        onPress={this.handleLogin}
    />

      

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => this.props.navigation.navigate("Registrationpage")}
        >
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
            
        );
        
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
      },
      logo: {
        height: 150,
        width: 390,
        resizeMode: 'cover',
      },
      text: {
        //fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
      },
      navButton: {
        marginTop: 15,
      },
      forgotButton: {
        marginVertical: 35,
      },
      navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        //fontFamily: 'System',
      },
      errorMessage: {
          height: 72,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 30
      },
      error: {
          color: "#E9446A",
          fontSize: 13,
          fontWeight: "600",
          textAlign: "center"
      }
});