import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useLinkTo } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Icon } from 'react-native-elements'
import { header, headerMobile, colors } from '../Styles.js'

export default function Header(props) {

    const linkTo = useLinkTo()

    const [styles, setStyles] = useState(header)
    
    useEffect(() => {
        console.log('header props:',props)
        if (props.width <= props.widthLimit) {
            setStyles(headerMobile)
        } else {
            setStyles(header)
        }
    }, [])

    const headerListElements = [
        {
            name: 'Services',
            link: '/'
        },
        {
            name: 'Portfolio',
            link: '/portfolio'
        },
        {
            name: 'Papers',
            link: '/papers'
        },
        {
            name: 'Contact',
            link: '/contact'
        }
    ]

    return (<View>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>
                {props.width <= props.widthLimit && ('AB') || 'Adam Bullard'}
            </Text>
            {props.width <= props.widthLimit && ('yeet') || (<View style={styles.headerList}>
                {headerListElements.map((item, index) => {

                    if (props.currentPage === item.name) {
                        return (<View style={styles.headerListItem} key={'headerEl_'+index}>
                            <Text style={styles.headerListText}>
                                {item.name}
                            </Text>
                            <View style={styles.headerListItemDot}></View>
                        </View>)
                    } else {
                        return (<TouchableOpacity 
                            style={styles.headerListItem}
                            onPress={() => linkTo(item.link)}
                            key={'headerEl_'+index}
                        >
                            <Text style={[styles.headerListText,{opacity:0.6}]}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>)
                    }

                })}
            </View>)}
        </View>
        <View style={styles.socials}>
            <Icon
                name='logo-linkedin'
                type='ionicon'
                size={30}
                color={colors.mainTextColor}
                style={styles.socialIcon}
                onPress={() => window.open('https://www.linkedin.com/in/adamwbull/', '_blank')}
            />
            <Icon
                name='logo-instagram'
                type='ionicon'
                size={30}
                color={colors.mainTextColor}
                style={styles.socialIcon}
                onPress={() => window.open('https://instagram.com/adamwbull', '_blank')}
            />
            <Icon
                name='logo-github'
                type='ionicon'
                size={30}
                color={colors.mainTextColor}
                style={styles.socialIcon}
                onPress={() => window.open('https://github.com/cappycap', '_blank')}
            />
        </View>
    </View>)

}