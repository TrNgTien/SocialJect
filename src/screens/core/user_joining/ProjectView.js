//
// Screen 4.
// Purpose: View the information of the project chosen by the user
// Functions: {
//  ProjectView{
//      _onFollow
//  }
//}
// Contributors: {
//  Ken Pham: July 25
//}
//


'use strict'

import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    Dimensions
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { global_styles } from '../../../components/styles/container';
import { HEADER_TITLE_PADDING } from '../../../constants/styles/padding';

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;
const POST_IMAGE_HEIGHT = HEIGHT/3;
const POST_IMAGE_WIDTH = WIDTH - HEADER_TITLE_PADDING*2;

const ProjectView = props => {

    const [isFollowed, setIsFollowed] = React.useState(false);

    // Handle the state of following the org
    const _onFollow = () => {
        setIsFollowed(prev => !prev)
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.iconContainer}>
                <AntDesign name='arrowleft' size={23} onPress={() => props.navigation.goBack()} />
            </View>
            <View style={styles.orgInfoContainer}>
                <View style={styles.orgImage}>
                    <Image 
                        source={require('../../../assets/images/Long.jpg')} 
                        style={[global_styles.image, {borderRadius: 35}]} />
                </View>
                <View style={styles.orgInfo}>
                    <Text style={styles.orgTitle}>Long The Avenger</Text>
                    <Text style={styles.orgPostTime}>6h ago</Text>
                </View>
                <TouchableOpacity style={[styles.orgFollowButton, {backgroundColor: isFollowed ? 'blue' : 'transparent'}]} onPress={_onFollow}>
                    {
                        isFollowed 
                        && <Text style={{fontSize: 17, color: 'white', marginHorizontal: 10}}>Followed</Text>
                    }
                    {
                        !isFollowed 
                        && <Text style={{fontSize: 17, color: 'blue', marginHorizontal: 10}}>Follow</Text>
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.postTitle}>Họ cười tôi vì tôi chưa có bồ. Tôi cười họ vì bồ họ thích tôi</Text>
            </View>
            <View style={styles.postImageContainer}>
                <Image 
                    source={require('../../../assets/images/Long.jpg')} 
                    style={[global_styles.image, {borderRadius: 5}]} />
            </View>
            <View style={styles.postDescriptionContainer}>
                <Text style={styles.postDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus. {"\n\n"}Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Donec et odio pellentesque diam volutpat commodo sed egestas. {"\n\n"}Diam quam nulla porttitor massa id neque aliquam vestibulum. Diam vulputate ut pharetra sit. Quisque non tellus orci ac.</Text>
            </View>
            <View style={styles.applyButtonContainer}>
                <TouchableOpacity style={styles.orgFollowButton}>
                        <Text style={{fontSize: 18}}>Apply</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,   
        backgroundColor: 'white'     
    },
    
    iconContainer:{
        // borderColor: 'black', borderWidth: 1,
        paddingTop: HEADER_TITLE_PADDING - 10,
        paddingLeft: HEADER_TITLE_PADDING - 10
    },
    orgInfoContainer:{
        // borderColor: 'black', borderWidth: 1,
        flexDirection: 'row',
        // justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: HEADER_TITLE_PADDING
    },
    orgImage:{
        // borderColor: 'red', borderWidth: 1,
        height: 60,
        width: 60,
        borderRadius: 30,
        marginLeft: HEADER_TITLE_PADDING
    },
    orgInfo:{
        // borderColor: 'red', borderWidth: 1,
        flexDirection: 'column',
        paddingLeft: HEADER_TITLE_PADDING - 10,
        paddingTop: HEADER_TITLE_PADDING - 15,
        flex: 2
    },
    orgTitle:{
        fontSize: 20,
    },
    orgPostTime:{
        fontSize: 16,
        color: 'grey'
    },
    orgFollowButton:{
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 3,
        height: 30,
        flexDirection: 'row',
        width: 100,
        flex: 1,
        marginRight: HEADER_TITLE_PADDING - 10
    },
    titleContainer:{
        // borderColor: 'black', borderWidth: 1,
        paddingHorizontal: HEADER_TITLE_PADDING + 10,
        paddingTop: HEADER_TITLE_PADDING
    },
    postTitle:{
        fontSize: 30,

    },
    postImageContainer:{
        // borderColor: 'black', borderWidth: 1,
        height: POST_IMAGE_HEIGHT,
        width: POST_IMAGE_WIDTH,
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: HEADER_TITLE_PADDING
    },
    postDescriptionContainer:{
        // borderColor: 'black', borderWidth: 1,
        paddingTop: HEADER_TITLE_PADDING,
        paddingHorizontal: HEADER_TITLE_PADDING + 10
    },
    postDescription:{
        fontSize: 20
    },
    applyButtonContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: HEADER_TITLE_PADDING
    }
})

export default ProjectView;