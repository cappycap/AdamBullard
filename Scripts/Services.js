import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useLinkTo } from '@react-navigation/native'

import { useFonts } from 'expo-font'
import { Button, Icon } from 'react-native-elements'
import { services, colors } from './Styles.js'

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
                <View style={styles.me}>
                    <Image 
                        source={require('../assets/me-point.png')}
                        style={styles.meImage}
                    />
                </View>
                <View style={styles.meInfo}>
                    <View style={styles.introduction}>
                        <Text style={styles.categoryText}>- Introduction</Text>
                        <Text style={styles.bigText}>Building and exploring...</Text>
                        <Text style={styles.pText}>
                            I am a founder, mentor, and developer graduating with a B.S. in Computer Science in Spring 2022. 
                            I believe in using technology and empathy to tackle our world's most pressing problems.
                        </Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.lower}>
            <Text style={styles.categoryText}>- Services Offered</Text>
            <View style={styles.boxRow}>
                <View style={styles.box}>
                    <Text style={[styles.bigText,styles.boxHeader]}>Full Stack Web and Mobile</Text>
                    <Text style={[styles.pText,styles.textCentered]}>
                        Creating effective and secure applications with these languages:
                    </Text>
                    <View style={styles.languageImageRow}>
                        <Image 
                            source={require('../assets/language-logos/react.png')}
                            style={styles.languageImage}
                        />
                        <Image 
                            source={require('../assets/language-logos/swift.png')}
                            style={styles.languageImage}
                        />
                    </View>
                    <Text style={[styles.pText,styles.textCentered]}>React, React Native, Swift</Text>
                    <View style={styles.languageImageRow}>
                        <Image 
                            source={require('../assets/language-logos/node.png')}
                            style={styles.languageImage}
                        />
                    </View>
                    <Text style={[styles.pText,styles.textCentered]}>Node.js</Text>
                    <View style={styles.languageImageRow}>
                        <Image 
                            source={require('../assets/language-logos/mysql.png')}
                            style={[styles.languageImage,{marginRight:5}]}
                        />
                        <Image 
                            source={require('../assets/language-logos/postgresql.png')}
                            style={styles.languageImage}
                        />
                    </View>
                    <Text style={[styles.pText,styles.textCentered]}>MySQL, PostgreSQL</Text>
                    <View style={styles.languageImageRow}>
                        <Image 
                            source={require('../assets/language-logos/apache.png')}
                            style={styles.languageImage}
                        />
                        <Image 
                            source={require('../assets/language-logos/nginx.png')}
                            style={styles.languageImage}
                        />
                    </View>
                    <Text style={[styles.pText,styles.textCentered]}>Apache, Nginx</Text>
                </View>
                <View style={styles.boxSpacer}></View>
                <View style={styles.box}>
                    <Text style={[styles.bigText,styles.boxHeader]}>Prototype Development</Text>
                    <Text style={[styles.pText,styles.textCentered]}>Improving or creating a product through customer input.</Text>
                    <View style={styles.languageImageRow}>
                        <Image 
                            source={require('../assets/product-development/ab.png')}
                            style={[styles.languageImage,{marginRight:5}]}
                        />
                        <Image 
                            source={require('../assets/product-development/magnify.png')}
                            style={styles.languageImage}
                        />
                    </View>
                    <Text style={[styles.pText,styles.textCentered]}>In-App Customer Feedback</Text>
                    <View style={styles.languageImageRow}>
                        <Image 
                            source={require('../assets/product-development/interviewing.png')}
                            style={[styles.languageImage,{marginRight:5}]}
                        />
                        <Image 
                            source={require('../assets/product-development/person.png')}
                            style={[styles.languageImage,{marginRight:5}]}
                        />
                    </View>
                    <Text style={[styles.pText,styles.textCentered]}>Customer Engagement & Identification</Text>
                </View>
                <View style={styles.boxSpacer}></View>
                <View style={styles.box}>
                    <Text style={[styles.bigText,styles.boxHeader]}>UI/UX Design</Text>
                    <Text style={[styles.pText,styles.textCentered]}>Designing intuitive, consistent, and beautiful online experiences.</Text>
                </View>
            </View>
        </View>
    </View>)

}