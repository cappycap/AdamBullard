import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useLinkTo } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Button } from 'react-native-elements'
import { portfolio, portfolioMobile, colors } from './Styles.js'

import Header from './Shared/Header.js'
import Footer from './Shared/Footer.js'
import useWindowDimensions from './Shared/useWindowDimensions.js'

export default function Portfolio() {

    // Variables for handling styling.
    const { height, width } = useWindowDimensions()
    const [firstLoad, setFirstLoad] = useState(true)
    const [styles, setStyles] = useState(portfolio)
    const widthLimit = 900

    const widthCheck = () => {
        console.log('widthCheck at ' + width)
        if (width <= widthLimit) {
            setStyles(portfolioMobile)
        } else {
            setStyles(portfolio)
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
    }, [width])

    return (<View style={styles.container}>
        <View style={styles.upper}>
            <Header currentPage={'Portfolio'} width={width} widthLimit={widthLimit} />
        </View>
        <Animated.View style={[styles.lower,{opacity:fadeAnim}]}>
            <Text style={styles.categoryText}>- Projects</Text>
            <Text style={[styles.pText,{marginBottom:20}]}>This is a new site I made for CSCI 397A, so my portfolio coming soon!</Text>
        </Animated.View>
        <Footer width={width} widthLimit={widthLimit} />
    </View>)

}