import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useLinkTo } from '@react-navigation/native'

import { useFonts } from 'expo-font'
import { Button } from 'react-native-elements'
import { services } from './Styles.js'

import Header from './Shared/Header.js'

export default function Services() {

    const [styles, setStyles] = useState(services)

    useEffect(() => {
        
    }, [])

    const headerState = {
        currentPage: 'Services'
    }

    return (<View style={styles.container}>
        <View style={styles.upper}>
            <Header {...headerState} />
            <View style={styles.jumboRow}>
                <View style={styles.me}>
                </View>
                <View style={styles.meInfo}>
                    <View style={styles.socials}>
                    </View>
                    <View style={styles.introduction}>
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.lower}>
        </View>
    </View>)

}