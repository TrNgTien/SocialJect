/*
* Screen 2.
* Purpose: Select places, popularites and progresses,
* Function: {
    Screen02: Main (for now, everything is in this function)
}
* Contributors: {
    Hiển Long: 17 June
     Tiến: 25 July
}
*/

// {useState} is to control the state, whether it pop up or not. Modal is to create the pop-up.
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Modal,
  TouchableOpacity,
} from 'react-native';

const ProjectFilter = props => {
  //This is to control whether the pop-up is open or not. Not sure how this even works, but it does anyway.
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  return (
    <View style={styles.container}>
     
      <TouchableOpacity>
        <Button
          //Will create the pop up of button 1 when pressed
          onPress={() => setModal1Open(true)}
          title="Địa Điểm"
          color="#841584"
        />
        <Button
          //Will create the pop up of button 2 when pressed
          onPress={() => setModal2Open(true)}
          title="Độ Phổ Biến"
          color="#841584"
        />
        <Button
          //Will create the pop up of button 3 when pressed
          onPress={() => setModal3Open(true)}
          title="Quá Trình"
          color="#841584"
        />
        <Button
          color="#841584"
          title="Tìm dự án"
          onPress={() => props.navigation.navigate('ProjectList')}
        />
      </TouchableOpacity>

      <Modal visible={modal1Open}>
        <View style={styles.container}>
          <Text> Ho Chi Minh city </Text>
          <Text> Da Nang </Text>
          <Text> Ha Noi </Text>
          <Button
            //This is for closing the Modal
            onPress={() => setModal1Open(false)}
            title="Close this shit"
            color="#841584"
          />
        </View>
      </Modal>

      <Modal visible={modal2Open}>
        <View style={styles.container}>
          <Text> Hiện tại có 100 người cách li </Text>
          <Text> Da Nang cách li 200 người </Text>
          <Text> Ha Noi giãn cách xã hội </Text>
          <Button
            //This is for closing the Modal
            onPress={() => setModal2Open(false)}
            title="Close this shit"
            color="#841584"
          />
        </View>
      </Modal>

      <Modal visible={modal3Open}>
        <View style={styles.container}>
          <Text> 14 ngày cách li </Text>
          <Text> chiều 13h ngày 26/7 cách li xã hội </Text>
          <Text> Đà Nẵng thất thủ </Text>
          <Button
            //This is for closing the Modal
            onPress={() => setModal3Open(false)}
            title="Close this shit"
            color="#841584"
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 12,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProjectFilter;
