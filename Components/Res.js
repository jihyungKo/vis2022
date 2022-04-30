import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';

const Res = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <View style={styles.logoArea}>
        <Text>
            결과 페이지
        </Text>
    </View>
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
  },
  bottomArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  btnArea: { // 우측 상단
    height: hp(8),
    // backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: hp(1.5),
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
export default Res;