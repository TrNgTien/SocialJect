////////////////////////////////////////////////////////////////////////////////
//  Global styles                                                             //
//  Purpose: Used for common styling elements                                 //
//  Contributors: {                                                           //
//      Ken Pham: June 17                                                     //
//  }                                                                         //
////////////////////////////////////////////////////////////////////////////////

import {StyleSheet, Platform} from 'react-native';

export const global_styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    shadow:{
        ...Platform.select({
        ios: {
            shadowColor: 'rgba(0,0,0, .7)',
            shadowOffset: { height:0, width: 0 },
            shadowOpacity: 1,
            shadowRadius: 5,
        },
        android: {
            elevation: 5
        },
        }),
    },
    image:{
        height: null, 
        width: null, 
        flex: 1, 
    }
})