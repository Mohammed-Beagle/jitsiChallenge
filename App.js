/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Button,
  TextInput,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Jitsi from './Components/Jitsi';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [joinMeeting, setJoinMeeting] = useState(false);
  const [meetingUrl, setMeetingUrl] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.meetingContainer}>
        {joinMeeting ? (
          <Jitsi url={meetingUrl} />
        ) : (
          <View>
            <Image
              style={styles.image}
              source={require('./Images/Attention.png')}
            />
            <Text style={styles.text}>
              Hi :) Hope you're doing Well. Here is the challenge of integrating
              the JitsiMeet SDK in this empty React Native App, to test it start
              new meeting on the website (https:meet.jit.si/) and enter the URL
              allowing to invite people here to join this meeting ! I will send
              you a video also to show you that it works for me :)
            </Text>
            <View style={styles.InputContainer}>
              <TextInput
                style={styles.body}
                placeholder="Please enter the meeting URL :)                     "
                onChangeText={text => setMeetingUrl(text)}
                value={meetingUrl}
                placeholderTextColor="grey"
              />
            </View>
            <TouchableOpacity onPress={() => setJoinMeeting(true)}>
              <Text style={styles.joinButton}>Join Meeting !</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {joinMeeting && (
        <TouchableOpacity onPress={() => setJoinMeeting(false)}>
          <Text style={styles.endButton}>End Call</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  meetingContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  joinButton: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: 'green',
  },
  endButton: {
    width: '80%',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: 'red',
    alignSelf: 'center',
  },
  InputContainer: {
    width: '100%',
    marginTop: 100,
    marginBottom: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#001E96',
    borderRadius: 10,
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: '#696969',
  },
  text: {
    width: 310,
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: 'yellow',
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});

export default App;
