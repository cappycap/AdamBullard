import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useLinkTo } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Button } from 'react-native-elements'
import { portfolio, colors } from './Styles.js'

import Header from './Shared/Header.js'

export default function Portfolio() {

    const [styles, setStyles] = useState(portfolio)

    useEffect(() => {
        
    }, [])

    const headerState = {
        currentPage: 'Portfolio'
    }

    return (<View style={styles.container}>
        <View style={styles.upper}>
            <Header {...headerState} />
        </View>
    </View>)

}