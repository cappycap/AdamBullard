import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useLinkTo } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Button } from 'react-native-elements'
import { contact, contactMobile, colors, btnColors } from './Styles.js'

import Header from './Shared/Header.js'
import Footer from './Shared/Footer.js'
import useWindowDimensions from './Shared/useWindowDimensions.js'

export default function Contact() {

    const linkTo = useLinkTo()

    const { height, width } = useWindowDimensions()
    const [firstLoad, setFirstLoad] = useState(true)
    const [styles, setStyles] = useState(contact)
    const widthLimit = 900

    const widthCheck = () => {
        console.log('widthCheck at ' + width)
        if (width <= widthLimit) {
            setStyles(contactMobile)
        } else {
            setStyles(contact)
        }
    }

    const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0))

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
        }).start()
    }

    useEffect(() => {
       if (firstLoad) {
            fadeIn()
            setFirstLoad(false)
        }
        widthCheck()
    }, [])

    return (<View style={styles.container}>
        <View style={styles.upper}>
            <Header currentPage={'Contact'} width={width} widthLimit={widthLimit} />
        </View>
        <Animated.View style={[styles.lower,{opacity:fadeAnim}]}>
            <Text style={styles.categoryText}>- Contact Me</Text>
            <Text style={[styles.pText,{marginBottom:20}]}>Feel free to reach out on any social media above, or shoot me an email!</Text>
            <View style={styles.contactSections}>
                <View style={styles.contactSection}>
                    <Text style={styles.bigText}>Business Email</Text>
                    <Text style={styles.pTextLink}><a href="mailto:adam@coachsync.me" style={{color:btnColors.primary,opacity:1}}>adam@coachsync.me</a></Text>
                </View>
                <View style={styles.contactSection}>
                    <Text style={styles.bigText}>Academic Email</Text>
                    <Text style={styles.pTextLink}><a href="mailto:bullara2@wwu.edu" style={{color:btnColors.primary,opacity:1}}>bullara2@wwu.edu</a></Text>
                </View>
            </View>
        </Animated.View>
        <Footer width={width} widthLimit={widthLimit} />
    </View>)

}