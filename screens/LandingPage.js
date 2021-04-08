import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';
import FormButton from '../components/FormButton';



const LandingPage = ({navigation}) => {
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/geeazylogo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Geeazy Mobile App</Text>

      

      <FormButton
        buttonTitle="Need Handymen Services"
        onPress={() => navigation.navigate('Loginpage')}
      />

      <FormButton
        buttonTitle="Provide Handymen Services"
        onPress={() => navigation.navigate('Loginpage')}
      />

      

      
    </ScrollView>
  );
};

export default LandingPage;

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
      fontFamily: 'Kufam-SemiBoldItalic',
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
      fontFamily: 'Lato-Regular',
    },
  });