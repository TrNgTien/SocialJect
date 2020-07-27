import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
  Modal,
} from 'react-native';

export default function Screen2() {
  const [name, setName] = useState();

  return (
    /*
    SafeAreaView covers screen2 and have a view covers 4 small others.
    The ImageBackGround is covered in the big View.
    View 1: Button is named "Địa Điểm"
    View 2: Button is named "Độ Phổ Biến"
    View 3: Button is named "Quá Trình"
    View 4: Button is named "Tìm dự án"
    */
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('./Screen2.png')}/>
        <View style={styles.title_1}>
          <Button
            color="blue"
            title="Địa Điểm"
            onPress={() => console.log('Địa Điểm')}
          />
        </View>

        <View style={styles.title_2}>
          <Button
            color="blue"
            title="Độ Phổ Biến"
            onPress={() => console.log('Độ Phổ Biến')}
          />
        </View>

        <View style={styles.title_3}>
          <Button
            color="blue"
            title="Quá Trình"
            onPress={() => console.log('Quá Trình')}
          />
        </View>

        <View style={styles.title_4}>
          <Button
            color="red"
            title="Tìm dự án"
            onPress={() => console.log('Tìm dự án')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
//////////////////////
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  image: {
    resizeMode: 'contain',
    height: 320,
    width: 400,
  },

  title_1: {
    textAlign: 'center',
    marginVertical: 50,
    width: 150,
  },
  title_2: {
    textAlign: 'center',
    marginVertical: 30,
    width: 150,
  },
  title_3: {
    textAlign: 'center',
    marginVertical: 30,
    width: 150,
  },
  title_4: {
    textAlign: 'center',
    marginVertical: 40,
    width: 150,
  },
});
