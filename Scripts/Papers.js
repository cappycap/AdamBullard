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

const data = [
    {
        Id: 1,
        Name: "Digital Human Rights Manifesto",
        Link: "https://adambullard.com/assets/papers/bullard-manifesto.pdf",
        Short: "digital-human-rights-manifesto",
        Description: "An amazing manifesto. Get ready for the world to change.",
        Image: require('../assets/paper-images/digital-human-rights.jpeg'),
        Sections: [
            {
                Type:"Writing",
                Title: "Introduction",
                Content: "Where do you see advances in computing and automation taking us in the future?\n\nTogether, this progress in technology presents the opportunity to completely upend our system over the course of decades and develop a more equitable society... but it would take a reform in many governments and economies, and a new perspective on labor, corporations, our fellow human beings, and accepting your own personal role in the world. But how exactly can we begin the transition towards this future? It all starts with defining what exactly is best for the general public, and how we can define and outline a more equitable society using the building blocks provided to us by today’s circumstances and innovations."
            },
            {
                Type:"Writing",
                Title: "Human Rights and Digital Extensions",
                Content: "In a society where corporations and governments work together to provide for their people, we can begin to address real world and digital rights in new and more effective ways. Even though we are actively working towards expanding these rights, without proper representation and equity in our government and our economy, true progress will be actively worked against by those who would lose power due to an increase in equity within these systems.\n\nThe first goal to achieve is realizing the UN Sustainable Development Goals across the world."
            },
            {
                Type:"Image",
                Link: require("../assets/paper-images/un-sustainability-goals.png"),
                Caption: "The 17 UN Sustainability Goals.",
                Width: 673,
                Height: 400
            },
            {
                Type:"Writing-Continue",
                Content: "These goals are a great step towards realizing a more equitable, sustainable, and thriving world. However, the UN has not included much about access to the internet or digital rights within these goals, although they touch on many important areas for future digital rights such as:\n\n1. Full privatization of personal user and company data, unless the user opts in to data contribution for advertisements, artificial intelligence, etc.\n\n2. Universal access to an internet connection, as well as quality education supported by the latest technology, which ties in to Sustainability Goal #4.\n\n3. Comprehensive universal education on internet navigation, information/source review, scam avoidance, best personal digital security practices, and how personal data can be used."
            },
            {
                Type:"Writing",
                Title: "Government Reform",
                Content: "A society with an ineffective government cannot defend real world and digital rights against malicious actors in politics or economics. The same can be said for threats to the physical or digital safety of our citizens. Ultimately, people are aware of these shortcomings. They see it through stressors such as the COVID-19 pandemic, the unchecked use of personal data by corporations, or the worsening effects of climate change in some regions. For these reasons and more, people in n the United States are dissatisfied with the way the government functions at a federal level."
            },
            {
                Type:"Image",
                Link: require("../assets/paper-images/public-trust.png"),
                Caption: "Pew Research Center Public Trust in Government.",
                Width: 695,
                Height: 400
            },
            {
                Type:"Writing-Continue",
                Content: "This manifesto posits the ultimate source of this dissatisfaction is a lack of true representation in government and a lack of power invested into the people. There are several ways we can begin to shift more power back to the general public. We can start by breaking up or outvoting two party systems, corrupt politicians, corporatist influence via lobbying, as well as impose term limits. I propose a larger set of parties in Congress, 5-10 ideally, ranging the political spectrum. Parties have to work together to get legislation passed, pulling a majority of parties into their corner. This will help alleviate political gridlock commonly faced in our two-party model, and will hopefully result in a more equitable and representative system. This is assuming the members of the eligible voting population are informed and involved enough to care about their vote. Ideally, this type of legislative action to restructure our parties and term limits would encourage people to vote more as they realize their political influence has increased.\n\nWhether we move towards a system like this or something similar, a more equitable political system is necessary for our country to move forward and leverage technology and innovation to its full potential. Through an equitable system we can begin to truly advance human rights, both in the physical and digital worlds. Our current political system rewards greed, deception, and profit-centric corporations. It can't function for the people and do the very important jobs of maintaining infrastructure, providing basic support for its citizens, let alone ensuring liberty and justice while holding up rights for its people. "
            },
            {
                Type:"Writing",
                Title: "Transition from a Profit-Centric Market to People-Centric",
                Content: "On the market side of society, if large corporations shifted their business model from profit-centric to people-centric, this would be revolutionary. Due to the advancement of computing over the last decade, it would be easier than ever with automation. With robots doing more work, we should allow people more time, money, and freedom to explore their passions and live their lives. scale back the work week. pay people more money. they will be happier, and they will be more productive and innovative for their companies, communities, and country.\n\nSo, how do we begin to make the steps to reach this type of market? It is up to us to demand this model from corporations, up to the government to monitor monopolization, and up to innovative humans everywhere to bring us into a world where scarcity of supplies becomes less of a problem for world and regional economic systems. This last piece is without a doubt the hardest. Present-day economics ultimately come from a place of scarcity. Demand for products, and by extension their prices, are closely tied to scarcity of the materials that go into that product.\n\nMore sustainable sources of energy, building materials, conducting materials, and food will be important for securing our long-term development as a society and species. With the power of the cloud and advances in engineering, it’s never been easier to develop, automate, and maintain solutions. Innovations in these areas can be in part driven by corporation’s own private research, but also through taxation on large corporations by government entities who then use those taxes to provide funding for public research projects into these areas."
            },
            {
                Type:"Writing",
                Title: "Conclusion",
                Content: "At the end of the day, the internet is based in the physical world, and is ultimately influenced the most by our reality and the decisions we make within it. We can never have true equity and human rights in the digital world if we don’t first provide basic human rights in our own world. Of course, this change will not happen overnight. it will take a radical shift in how people think about the world, themselves, other people, and pretty much everything. but technology is moving fast, so we need to adapt. if we stay stuck in old traditions and short sightedness, it probably won't end well. but I believe in people! it all starts with you. and me. and pretty much everyone, but especially those hard-working and influential people who can contribute more than many others are afforded the opportunity to."
            },
            {
                Type:"Writing",
                Title: "References",
                Content: "“Public Trust in Government: 1958-2021.” Pew Research Center - U.S. Politics & Policy, Pew Research Center, 28 May 2021, https://www.pewresearch.org/politics/2021/05/17/public-trust-in-government-1958-2021/.\n\n“The 17 Goals | Sustainable Development.” United Nations, United Nations, https://sdgs.un.org/goals."
            }
        ]
    }
]

export default function Papers(props) {

    const linkTo = useLinkTo()

    const [styles, setStyles] = useState(papers)
    const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0))

    const [short, setShort] = useState(null)
    const [paperIndex, setPaperIndex] = useState(null)
    const [papersData, setPapersData] = useState(data)

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

    const downloadFile = async () => {

        const fileName = "papers";
        const json = JSON.stringify(papersData)
        const blob = new Blob([json],{type:'application/json'})
        const href = await URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = href
        link.download = fileName + ".json"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

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
                                <View style={styles.buttonRow}>
                                    <Button 
                                        title={'View PDF'}
                                        buttonStyle={[styles.viewPdfButton,{marginRight:10}]}
                                        titleStyle={styles.viewPdfButtonTitle}
                                        onPress={() => window.open(papersData[paperIndex].Link, '_blank')}
                                    />
                                    <Button 
                                        title={'Download JSON'}
                                        buttonStyle={styles.viewPdfButton}
                                        titleStyle={styles.viewPdfButtonTitle}
                                        onPress={() => downloadFile()}
                                    />
                                </View>
                            </View>
                            <Image 
                                style={styles.paperImageLarge}
                                source={papersData[paperIndex].Image}
                            />
                        </View>
                        {papersData[paperIndex].Sections.map((section, index) => {

                            if (section.Type == "Writing") {
                                return (<View style={styles.paperSection} key={'paperSection_'+index}>
                                    <Text style={styles.categoryText}>- {section.Title}</Text>
                                    <Text style={styles.pText}>{section.Content}</Text>
                                </View>)
                            } else if (section.Type == "Writing-Continue") {
                                return (<View style={styles.paperSection} key={'paperSection_'+index}>
                                    <Text style={styles.pText}>{section.Content}</Text>
                                </View>)
                            } else {
                                return (<View style={styles.paperSection} key={'paperSection_'+index}>
                                    <Image source={section.Link} style={[styles.paperSectionImage,{width:section.Width,height:section.Height}]} />
                                    <Text style={styles.paperSectionCaption}>{section.Caption}</Text>
                                </View>)
                            }

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