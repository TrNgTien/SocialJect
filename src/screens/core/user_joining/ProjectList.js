//
// Screen 3.
// Purpose: Select projects
// Functions: {
//  ProjectList{
//      _onProjectView
//  }
//}
// Contributors: {
//  Ken Pham: June 17
//}
//


import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Button,
  Modal
} from 'react-native';

import { HEADER_TITLE_PADDING} from '../../../constants/styles/padding'
import { HEADER_TITLE_SIZE } from '../../../constants/styles/fontSize';

import {global_styles} from '../../../components/styles/container'

import ProjectPost from '../../../components/app/user_joining/ProjectPost'

const FILTER_BUTTON_WIDTH = 100;
const FILTER_BUTTON_HEIGHT = 20;

const ProjectList = props => {

    const [isOpenPlace_filter, setIsOpenPlace_filter] = React.useState(false);
    const [isOpenPopularity_filter, setIsOpenPopularity_filter] = React.useState(false);

  const [isOpenProgress_filter, setIsOpenProgress_filter] = React.useState(
    false);

    // Handle the navigation to ProjectView (screen 4) when pressing
    const _onProjectView  = () => {
        props.navigation.navigate('ProjectView');
    }

    const _onOpenPlace_filter = () => {
        setIsOpenPlace_filter(true);
    }
    const _onOpenPopularity_filter = () => {
        setIsOpenPopularity_filter(true);
    }
    const _onOpenProgress_filter = () => {
        setIsOpenProgress_filter(true);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Chúng mình có vài thứ cho bạn đây</Text>
                <View style={styles.filterContainer}>
                    <TouchableOpacity onPress={_onOpenPlace_filter} style={styles.filterButton}>
                        <Text>Place</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={_onOpenPopularity_filter} style={styles.filterButton}>
                        <Text>Popularity</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={_onOpenProgress_filter} style={styles.filterButton}>
                        <Text>Progress</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.projectList}>
                <FlatList
                    data={[1,2,3,4,5,6,7,8]}
                    keyExtractor={item => item}
                    renderItem={itemData => {
                        return(
                            <ProjectPost
                                _onProjectView={_onProjectView}
                            />
                        )
                    }}
                    
                />
            </View>
            <Modal visible={isOpenPlace_filter} animated={true} animationType="slide">
                <View style={styles.container}>
                    <Text> Ho Chi Minh city </Text>
                    <Text> Da Nang </Text>
                    <Text> Ha Noi </Text>
                    <Button
                        //This is for closing the Modal
                        onPress={() => setIsOpenPlace_filter(false)}
                        title="Close this shit"
                        color="#841584"
                    />
                </View>
            </Modal>
            <Modal visible={isOpenPopularity_filter} animated={true} animationType="slide">
                <View style={styles.container}>
                    <Text> Ho Chi Minh city </Text>
                    <Text> Da Nang </Text>
                    <Text> Ha Noi </Text>
                    <Button
                        //This is for closing the Modal
                        onPress={() => setIsOpenPopularity_filter(false)}
                        title="Close this shit"
                        color="#841584"
                    />
                </View>
            </Modal>
            <Modal visible={isOpenProgress_filter} animated={true} animationType="slide">
                <View style={styles.container}>
                    <Text> Ho Chi Minh city </Text>
                    <Text> Da Nang </Text>
                    <Text> Ha Noi </Text>
                    <Button
                        //This is for closing the Modal
                        onPress={() => setIsOpenProgress_filter(false)}
                        title="Close this shit"
                        color="#841584"
                    />
                </View>
            </Modal>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header:{
        // borderColor: 'black', borderWidth: 1,
        paddingLeft: HEADER_TITLE_PADDING,
        paddingTop: HEADER_TITLE_PADDING,
        paddingRight: HEADER_TITLE_PADDING
    },
    headerTitle:{
        fontSize: HEADER_TITLE_SIZE,
        fontWeight: 'bold'
    },
    filterContainer:{
        // borderColor: 'black', borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    filterButton:{
        borderColor: 'grey', borderWidth: 1,
        borderRadius: 5,
        width: FILTER_BUTTON_WIDTH,
        height: FILTER_BUTTON_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center'
    },
    projectList:{
        marginTop: 20
    },
    postButton:{
        marginBottom: HEADER_TITLE_PADDING,
        marginHorizontal: HEADER_TITLE_PADDING,
        // borderRadius: 10
    }
})


export default ProjectList;