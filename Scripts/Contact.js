import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useLinkTo } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Button } from 'react-native-elements'
import { contact, colors } from './Styles.js'

import Header from './Shared/Header.js'

export default function Contact() {

    const linkTo = useLinkTo()

    const [styles, setStyles] = useState(contact)
    const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0))

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
        }).start()
    }

    useEffect(() => {
       fadeIn()
    }, [])

    const headerState = {
        currentPage: 'Contact'
    }
    

    return (<View style={styles.container}>
        <View style={styles.upper}>
            <Header {...headerState} />
        </View>
        <Animated.View style={[styles.lower,{opacity:fadeAnim}]}>
            <Text style={styles.categoryText}>- Contact Me</Text>
            <Text style={[styles.pText,{marginBottom:20}]}>This is a new site I made for CSCI 397A, so my contact form is coming soon! For now, you can reach me at bullara2@wwu.edu.</Text>
        </Animated.View>
    </View>)

}