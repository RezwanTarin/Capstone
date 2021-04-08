import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import * as firebase from 'firebase'

export default class Registration extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        errorMessage: null
    }

    handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(userCredentials => {
            return userCredentials.user.updateProfile({
                displayName: this.state.name
            });
        })
        .catch(error => this.setState({errorMessage: error.message}));
        firebase.auth().currentUser.sendEmailVerification();
    };

    
    render() {
        return (
            <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>

      <FormInput
        placeholderText="Full Name"
        iconType="user"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={name => this.setState({name})}
        value={this.state.name}
      />

      

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

      <FormInput
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
        onChangeText={confirmpassword => this.setState({confirmpassword})}
      />

      <FormButton
        buttonTitle="Sign Up"
        onPress={this.handleSignUp}
        
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>

      

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => this.props.navigation.navigate("Loginpage")}>
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
            
        );
        
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
      },
      navButton: {
        marginTop: 15,
      },
      navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
      },
      textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
      },
      color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
      },
});