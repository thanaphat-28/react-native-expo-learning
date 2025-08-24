
import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, StatusBar, Platform, Button } from 'react-native';

const DUMMY_IMAGE_1 = 'https://hips.hearstapps.com/hmg-prod/images/white-egret-orchid-gettyimages-544521105-646f90be136d6.jpg?crop=0.535xw:1.00xh;0.239xw,0&resize=980';
const DUMMY_IMAGE_2 = 'https://hips.hearstapps.com/hmg-prod/images/lavender-gettyimages-668761565-646f8fa6a3e96.jpg?crop=0.534085414987913xw:1xh;center,top&resize=980:*';
const DUMMY_IMAGE_3 = 'https://hips.hearstapps.com/hmg-prod/images/delphinium-gettyimages-522676200-646fa8cab7d78.jpg?crop=1.00xw:0.956xh;0,0.0441xh&resize=980:*';

export default function FlexScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.profileContainer}>
        <Image source={{ uri: DUMMY_IMAGE_1 }} style={styles.profileImage} />
        <Image source={{ uri: DUMMY_IMAGE_2 }} style={styles.profileImage} />
        <Image source={{ uri: DUMMY_IMAGE_3 }} style={styles.profileImage} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  profileContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  buttonContainer: {
    marginTop: 20,
  },
});
