import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
// import firebase from 'firebase';
import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';


export default class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
     firebase.initializeApp ({
        apiKey: 'AIzaSyDA45-cWQpGCg5NGWcu0q9eAqG7W83YN24',
        authDomain: 'authentication-6a3e4.firebaseapp.com',
        databaseURL: 'https://authentication-6a3e4.firebaseio.com',
        projectId: 'authentication-6a3e4',
        storageBucket: 'authentication-6a3e4.appspot.com',
        messagingSenderId: '414312560854'
      });

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
    });
}

   renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (<View><Button>Log Out</Button></View>);
      case false:
        return <LoginForm />;
      default:
        return (<Spinner size="large" />);
    }
}

    render() {
    return (
      <View>
        <Header headerText="Authentication" />
          {this.renderContent()}
      </View>
    );
  }
}
