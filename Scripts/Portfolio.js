import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, Image} from 'react-native';
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

    const items = [
        {
            Image: require('../assets/portfolio-images/MentoringDashboard.png'),
            Title: 'CS/M Mentors Dashboard',
            Description: 'Administrative dashboard for university staff to pair up mentor/mentees and manage submitted data.',
            Languages: 'React, React Native for Web',
            Link: 'https://github.com/cappycap/MentoringDashboard'
        },
        {
            Image: require('../assets/portfolio-images/MentoringApp.png'),
            Title: 'CS/M Mentors Mobile',
            Description: 'An app for college students that pairs them with a mentor or mentee within their major.',
            Languages: 'React Native',
            Link: 'https://github.com/cappycap/MentoringApp'
        },
        {
            Image: require('../assets/portfolio-images/MentoringAPI.png'),
            Title: 'CS/M Mentors API',
            Description: 'Backend for accessing MSSQL database for CS/M Mentors. Being rewritten soon.',
            Languages: 'Node.js, Express',
            Link: 'https://github.com/cappycap/MentoringAPI'
        },
        {
            Image: require('../assets/portfolio-images/CoachingWeb.png'),
            Title: 'CoachSync Web',
            Description: 'Full-fledged web dashboard for managing a coaching business and clients. The API is not publicly available as of now.',
            Languages: 'React, React Native for Web',
            Link: 'https://github.com/cappycap/CoachingDashboard'
        },
        {
            Image: require('../assets/portfolio-images/CoachingMobile.png'),
            Title: 'CoachSync Mobile',
            Description: 'Used by clients of coaches using CoachSync Web. Interact with your coach, complete assignments, and more!',
            Languages: 'React Native',
            Link: 'https://github.com/cappycap/CoachingApp'
        },
        {
            Image: require('../assets/portfolio-images/AdamBullard.png'),
            Title: 'adambullard.com',
            Description: 'The website you\'re on right now! A great example of responsive website UI design.',
            Languages: 'React, React Native for Web',
            Link: 'https://github.com/cappycap/AdamBullard'
        },
        {
            Image: require('../assets/portfolio-images/CollectMemes.png'),
            Title: 'CollectMemes Mobile',
            Description: 'A simple and fun game where you can spin to collect memes.',
            Languages: 'Jasonette, Swift',
            Link: 'https://github.com/cappycap/CollectMemes'
        }
    ]

    return (<View style={styles.container}>
        <View style={styles.upper}>
            <Header currentPage={'Portfolio'} width={width} widthLimit={widthLimit} />
        </View>
        <Animated.View style={[styles.lower,{opacity:fadeAnim}]}>
            <Text style={styles.categoryText}>- Projects</Text>
            <View style={styles.projects}>
                {items.map((item, index) => {
                    var styling = {}
                    if (index % 3 == 0 && index != 6 && width >= widthLimit) {
                        styling = {paddingLeft:0}
                    } else if ((index == 2 || index == 5) && width >= widthLimit) {
                        styling = {paddingRight:0}
                    }
                    return (<View style={[styles.projectContainer,styling]}>
                        <View style={styles.project}>
                            <Image style={styles.projectImage} source={item.Image} />
                            <Text style={styles.bigText}>{item.Title}</Text>
                            <Text style={styles.pText}>{item.Description}</Text>
                            <Text style={[styles.pText,{fontFamily:'PoppinsSemiBold',marginBottom:0}]}>Languages:</Text>
                            <Text style={styles.pText}>{item.Languages}</Text>
                            <Button 
                                buttonStyle={styles.viewButton} 
                                onPress={() => window.open(item.Link, '_blank')}
                                title='View Repo'
                            />
                        </View>
                    </View>)
                })}
            </View>
        </Animated.View>
        <Footer width={width} widthLimit={widthLimit} />
    </View>)

}