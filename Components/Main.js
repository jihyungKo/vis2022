import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {Game} from 'Game.js'

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}} />
      <View style={styles.logoArea}>
        <Image
          source={require('../src/hagi.png')}
          style={{width: '55%', resizeMode: 'contain'}}
        />
      </View>
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn}
          onPress={() => navigation.navigate('Game')}>
          <Text styles={{ fontSize: 16 }}>게임 시작하기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.txtArea}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Res')}>
          <Text>결과 화면으로 먼저 가기</Text>
        </TouchableOpacity>
      </View>
    <View style={{flex: 1}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //전체의 공간을 차지한다는 의미
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  TopArea: {
    flex: 1,
    backgroundColor: 'white'
  },
  logoArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 30
  },
  bottomArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  btnArea: {
    height: hp(8),
    // backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: hp(1.5),
    fontSize: 16
  },
  txtArea: {
    height: hp(2),
    // backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    flex: 1,
    width: wp(75),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: "black",
    borderWidth: 1,
  }
});
export default Main;