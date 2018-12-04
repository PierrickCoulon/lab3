import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from '../Fire';
import firebase from 'firebase'

class Chat extends Component {

  static navigationOptions = {
    title: "Chat",
    headerTintColor: 'red',
    headerTitleStyle: { color: 'black' }
  };

  state = {
    messages: [],
  };

  componentDidMount() {
    global.email = this.props.navigation.state.params.email
    global.pass = this.props.navigation.state.params.pass
    Fire.shared.observeAuth()
    firebase.auth().signInWithEmailAndPassword(this.props.navigation.state.params.email, this.props.navigation.state.params.pass)
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }
      ))
    );
  }

  componentWillUnmount() {
    Fire.shared.giveData(this.props.navigation.state.params.email, this.props.navigation.state.params.pass)
    Fire.shared.off();
  }

  get user() {
    Fire.shared.giveData(this.props.navigation.state.params.email, this.props.navigation.state.params.pass)
    return {
      name: this.props.navigation.state.params.email,
      _id: Fire.shared.uid,
    };
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
      />
    )
  }
}
const styles = StyleSheet.create({});
export default Chat;