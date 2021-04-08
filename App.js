import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Ionicons} from '@expo/vector-icons';

import Login from './screens/Login';
import Home from './screens/Home';
import Registration from './screens/Registration';
import Loading from './screens/Loading';
import LandingPage from './screens/LandingPage';
import UploadProject from './screens/UploadProject';
import Review from './screens/Review';
import Dashboard from './screens/Dashboard';

import * as firebase from 'firebase'



const AppContainer = createStackNavigator(
  {
    
      Geeazy: createBottomTabNavigator(
          {
            Homepage: {
              screen: Home,
              navigationOptions: {
                tabBarIcon: ({tintColor}) => <Ionicons name="ios-home" size={24} color={tintColor}></Ionicons>
              }
            },
            Postproject: {
              screen: UploadProject,
              navigationOptions: {
                tabBarIcon: ({tintColor}) => <Ionicons name="ios-add-circle" size={24} color={tintColor}>
                  
                </Ionicons>
              }
            },
    
            myDashboard: {
              screen: Dashboard,
              navigationOptions: {
                tabBarIcon: ({tintColor}) => <Ionicons name="ios-person" size={24} color={tintColor}></Ionicons>
              }
            },
            RateandReview: {
              screen: Review,
              
            },
          },
            

      ),
      
  },
  
);





const AuthStack = createStackNavigator({
  Landingpage: LandingPage,
  Loginpage: Login,
  Registrationpage: Registration
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      App: AppContainer,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)

