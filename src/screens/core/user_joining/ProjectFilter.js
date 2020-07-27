/*
* Screen 2.
* Purpose: Select places, popularites and progresses,
* Function: {
    Screen02: Main (for now, everything is in this function)
}
* Contributors: {
    Hiển Long: 17 June
}
*/

// {useState} is to control the state, whether it pop up or not. Modal is to create the pop-up.
import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    Modal,
    TouchableOpacity,
} from 'react-native';

const  ProjectFilter = (props) => {

    //This is to control whether the pop-up is open or not. Not sure how this even works, but it does anyway.
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View style={styles.container}>

            <Text style={styles.paragraph}>
                Screen 2: Choosing places, popularities and progresses.
        </Text>
            <TouchableOpacity>
                <Button
                    //Will create the pop up when pressed
                    onPress={() => setModalOpen(true)}
                    title="Places"
                    color="#841584"
                />
                <Button color="#841584" title="Tìm dự án" onPress={() => props.navigation.navigate('ProjectList')} />
            </TouchableOpacity>

            <Modal visible={modalOpen}>
                <View style={styles.container}>
                    <Text> Ho Chi Minh city </Text>
                    <Text> Da Nang </Text>
                    <Text> Ha Noi </Text>
                    <Button
                        //This is for closing the Modal
                        onPress={() => setModalOpen(false)}
                        title="Close this shit"
                        color="#841584"
                    />
                </View>
            </Modal>

        </View>
    );
}

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