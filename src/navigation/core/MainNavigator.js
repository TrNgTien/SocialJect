'use strict'

/*
* Purpose: Main file that navigates to all the other screens.
* Function: {
    MainNavigator
}
* Contributors: {
    Ken Pham: July 24
}
*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProjectList from '../../screens/core/user_joining/ProjectList';
import ProjectView from '../../screens/core/user_joining/ProjectView';
import ProjectFilter from '../../screens/core/user_joining/ProjectFilter';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='ProjectFilter' headerMode='none'>
                <Stack.Screen name="ProjectList" component={ProjectList} />
                <Stack.Screen name="ProjectView" component={ProjectView} />
                <Stack.Screen name="ProjectFilter" component={ProjectFilter} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator;