import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useLinkTo } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Button } from 'react-native-elements'
import { header } from '../Styles.js'

export default function Header(props) {

    const linkTo = useLinkTo()

    const [styles, setStyles] = useState(header)
    
    useEffect(() => {
        console.log('header props:',props)
    }, [])

    const headerListElements = [
        {
            name: 'Services',
            link: '/'
        },
        {
            name: 'Works',
            link: '/works'
        },
        {
            name: 'Philosophy',
            link: '/philosophy'
        },
        {
            name: 'Contact',
            link: '/contact'
        }
    ]

    return (<View style={styles.header}>
        <Text style={styles.headerTitle}>Adam Bullard</Text>
        <View style={styles.headerList}>
            {headerListElements.map((item, index) => {

                if (props.currentPage === item.name) {
                    return (<View style={styles.headerListItem}>
                        <Text style={styles.headerListText}>
                            {item.name}
                        </Text>
                        <View style={styles.headerListItemDot}></View>
                    </View>)
                } else {
                    return (<TouchableOpacity 
                        style={styles.headerListItem}
                        onPress={() => linkTo(item.link)}
                    >
                        <Text style={[styles.headerListText,{opacity:0.6}]}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>)
                }

            })}
        </View>
    </View>)

}