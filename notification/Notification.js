import React, { useState } from 'react';
import { StyleSheet, View, Vibration } from 'react-native';
import { Button } from 'react-native-elements';
import CustomButton from '../components/ButtonPress';
import Modal from 'react-native-modal'
import { Audio } from 'expo-av';

const Notification = () => {
  const [notifi, setNotifi] = useState(false);

  const modal = () => {
    setNotifi(!notifi);
  };

  const Ring = async () => {
    const { sound } = await Audio.Sound.createAsync(
    require('./Notification.mp3')
    );
    await sound.playAsync();
  };

  const Vibrate = () => {
    Vibration.vibrate(2000);
  };

  return (
    <View style={styles.container}>
      <CustomButton
        title="Click"
        handlePress={modal}
      />
      <Modal isVisible={notifi}
            style={{marginTop:300, marginBottom:300,
                backgroundColor: "white",
                borderRadius: 20,
                padding: 35,
                alignItems: "center",}}>
        <View style={{justifyContent: 'center',
                      flex: 1,width: "100%", padding:20,
                      backgroundColor: '#fff'}}>
          <View style={{flexDirection:'column'}}>
            <Button
              buttonStyle={{
                backgroundColor: 'black',
              }}
              title="Ring a bell"
              onPress={Ring}
            />
            <Button
              buttonStyle={{
                backgroundColor: 'black',
                marginTop: 10,
              }}
              title="Vibrate"
              onPress={Vibrate}
            />
          </View>
          <Button
            titleStyle={{
              color: 'black',
            }}
            type="clear"
            title="Back"
            onPress={modal}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Notification;