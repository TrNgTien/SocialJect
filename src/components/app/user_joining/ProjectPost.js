/*
* Component for Screen 3.
* Purpose: Style a post 
* Function: {
    ProjectPost
}
* Contributors: {
    Ken Pham: June 17
}
*/

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Touchable
} from 'react-native';

import { HEADER_TITLE_PADDING } from '../../../constants/styles/padding';
import {global_styles} from '../../../components/styles/container'

const ProjectPost = props => {
    return(
        // <View>
        <TouchableOpacity style={styles.postButton} onPress={props._onProjectView}>
            <View style={styles.container}>
                
                <View style={styles.postImageContainer}>
                    <Image source={require('../../../assets/images/space.jpg')} style={styles.postImage}/>
                </View>
                <View style={styles.postContentContainer}>
                    <Text style={{color: 'black', fontSize: 30}}>Blood Donation</Text>
                    <Text style={{color: 'black', color: 'grey', fontStyle: 'italic', fontSize: 20}}>Deadline:<Text style={{fontWeight: 'normal'}}> 20/6/2020</Text></Text>
                </View>
            </View>
        </TouchableOpacity>
        // </View>
    )
}

export default ProjectPost;

const styles = StyleSheet.create({
    postButton:{
        marginBottom: HEADER_TITLE_PADDING,
        marginHorizontal: HEADER_TITLE_PADDING,
        
    },
    container: {
        borderColor: 'grey', borderWidth: 1,
        height: 300,
        borderRadius: 10,
    },
    postImageContainer:{
        flex: 2,
    },
    postImage:{
        height: null, 
        width: null, 
        flex: 1, 
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    postContentContainer:{
        // borderColor: 'grey', borderWidth: 1,
        flex: 1,
        // position: 'absolute',
        // paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        // backgroundColor: 'rgba(52, 52, 52, 0.5)',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

})