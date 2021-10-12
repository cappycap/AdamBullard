import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useLinkTo } from '@react-navigation/native'
import { colors, app } from './Scripts/Styles.js'
import { useFonts } from 'expo-font'
import { Button } from 'react-native-elements'
import { empty } from './Styles.js'

export default function Empty() {

    const [styles, setStyles] = useState(empty)

    useEffect(() => {

    }, [])

    return (<View></View>)
    
}