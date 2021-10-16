import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useLinkTo } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Button, Icon } from 'react-native-elements'
import { papers, colors } from './Styles.js'

import Header from './Shared/Header.js'
import Footer from './Shared/Footer.js'

export default function Papers(props) {

    const linkTo = useLinkTo()

    const [styles, setStyles] = useState(papers)
    const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0))

    const [short, setShort] = useState(null)
    const [paperIndex, setPaperIndex] = useState(null)
    const [papersData, setPapersData] = useState([
        {
            Id: 1,
            Name: 'Digital Human Rights Manifesto',
            Link: 'http://www.africau.edu/images/default/sample.pdf',
            Short: 'digital-human-rights-manifesto',
            Description: 'An amazing manifesto. Get ready for the world to change.',
            Image: require('../assets/paper-images/digital-human-rights.jpeg'),
            Sections: [
                {
                    Title: 'Abstract',
                    Content: 'On tech in society, to roughly summarize I think we can use technology and automation to completely upend our system over the course of decades and do it better... but it would take a reform in many governments and economies, including in the US.\n\n'+
                    'We would have to start by breaking up or outvoting two party systems, corrupt politicians, corporatist influence via lobbying, and impose term limits. I propose a larger set of parties, 5-10 ideally, ranging the political spectrum. Parties have to work together to get legislation passed, pulling a majority of parties into their corner. This moves more power to the people, and will hopefully result in a more equitable and representative system, assuming the members of that system are informed and involved enough to care about their vote. Ideally, this type of legislation would encourage people to vote more as a secondary effect...'
                }
            ]
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

        fadeIn()

    }, [])

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
        }).start()
    }
 
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
                        <View style={styles.paperTop}>
                            <View style={styles.paperTopInfo}>
                                <View>
                                    <View style={styles.titleRow}>
                                        <Icon
                                            name='chevron-back'
                                            type='ionicon'
                                            size={40}
                                            color={colors.mainTextColor}
                                            onPress={() => goBack()}
                                        />
                                        <Text style={styles.titleText}>{papersData[paperIndex].Name}</Text>
                                    </View>
                                    <Text style={styles.pText}>{papersData[paperIndex].Description}</Text>
                                </View>
                                <Button 
                                    title={'View PDF'}
                                    buttonStyle={styles.viewPdfButton}
                                    titleStyle={styles.viewPdfButtonTitle}
                                    onPress={() => window.open(papersData[paperIndex].Link, '_blank')}
                                />
                            </View>
                            <Image 
                                style={styles.paperImageLarge}
                                source={papersData[paperIndex].Image}
                            />
                        </View>
                        {papersData[paperIndex].Sections.map((section, index) => {

                            return (<View style={styles.paperSection} key={'paperSection_'+index}>
                                <Text style={styles.categoryText}>- {section.Title}</Text>
                                <Text style={styles.pText}>{section.Content}</Text>
                            </View>)

                        })}
                    </View>)}
                </View>)}
            </View>) || (<View style={{paddingTop:10}}>
                <Text style={styles.categoryText}>No papers yet, check back later!</Text>
            </View>)}
        </Animated.View>
        <Footer />
    </View>)

}