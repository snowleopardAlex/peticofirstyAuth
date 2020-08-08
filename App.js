import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button
} from 'react-native';
import { Auth } from 'aws-amplify'

function App() {
  return (

<View style={styles.mainform}>
<View style={styles.form}>
<Button
  title="Sign in with Facebook"
  onPress={() => Auth.federatedSignIn({ provider: "Facebook" })}
/>
<Button
  title="Sign in with Apple"
  onPress={() => Auth.federatedSignIn({ provider: "SignInWithApple" })}
/>
<Button
  title="Launch Hosted UI"
  onPress={() => Auth.federatedSignIn()}
/>
</View>
</View>
  );

}

const styles = StyleSheet.create({
  mainform: {
    flex: 1
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
});


export default App;
