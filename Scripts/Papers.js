import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useLinkTo } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Button } from 'react-native-elements'
import { papers, colors } from './Styles.js'

import Header from './Shared/Header.js'

export default function Papers(props) {

    const linkTo = useLinkTo()

    const [styles, setStyles] = useState(papers)
    const [fadeAnim] = useState(new Animated.Value(0))

    const [short, setShort] = useState(null)
    const [paperIndex, setPaperIndex] = useState(null)
    const [papersData, setPapersData] = useState([
        {
            Id: 1,
            Name: 'Digital Human Rights Manifesto',
            Abstract: 'An amazing manifesto.',
            Link: '',
            Short: 'digital-human-rights-manifesto',
            Description: 'An amazing manifesto. Get ready for the world to change.',
            Image: require('../assets/paper-images/digital-human-rights.jpeg'),
        }
    ])

    useEffect(() => {

        // Check to see if short exists.
        if (props.route.params != undefined) {
            // Save short.
            setShort(props.route.params.short)
            // Check to see if this paper exists.
            for (var i = 0; i < papersData.length; i++) {
                if (papersData[i].Short === props.route.params.short) {
                    setPaperIndex(i)
                    break
                }
            }
        }

        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
        }).start()

    }, [])

    const viewPaper = (i) => {
        setShort(papersData[i].Short)
        setPaperIndex(i)
        linkTo('/papers/'+papersData[i].Short)
    }

    const goBack = () => {
        linkTo('/papers')
        setPaperIndex(null),
        setShort(null)
    }

    const headerState = {
        currentPage: 'Papers'
    }

    return (<View style={styles.container}>
        <View style={styles.upper}>
            <Header {...headerState} />
        </View>
        <Animated.View style={[styles.lower,{opacity:fadeAnim}]}>
            {papersData.length > 0 && (<View>
                {short == null && (<View>
                    <Text style={styles.categoryText}>- Papers</Text>
                    <Text style={[styles.pText,{marginBottom:20}]}>Here are various academic and philosophical papers I've written or contributed to.</Text>
                    {papersData.map((paper, index) => {
                        return (<TouchableOpacity style={styles.paperContainer} onPress={() => viewPaper(index)}>
                            <Image 
                                style={styles.paperImage}
                                source={paper.Image}
                            />
                            <View style={styles.paperInner}>
                                <Text style={styles.bigText}>{paper.Name}</Text>
                                <Text style={styles.pText}>{paper.Description}</Text>
                            </View>
                        </TouchableOpacity>)
                    })}
                </View>) || (<View>
                    {paperIndex == null && (<View style={styles.paperNotFound}>
                        <Text style={styles.pText}>
                            Paper not found. 
                        </Text>
                        <TouchableOpacity 
                            onPress={() => goBack()}
                            style={[styles.pText,styles.link]}
                        >
                            Tap to go back.
                        </TouchableOpacity>
                    </View>) || (<View>
                    
                    </View>)}
                </View>)}
            </View>) || (<View style={{paddingTop:10}}>
                <Text style={styles.categoryText}>No papers yet, check back later!</Text>
            </View>)}
        </Animated.View>
    </View>)

}