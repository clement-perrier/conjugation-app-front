import BackButton from "../../components/BackButton"
import NavigationButtons from "../../components/NavigationButtons"
import React from "react"

export default function NewSet(){

    const buttons = [
        {
            title: 'Pre Set',
            description: 'Pick among the sets we\'ve built for you.',
            link: '/new-set/pre-set-selection'
        },
        {
            title: 'Custom set',
            description: 'Customize your own set by choosing which verbs and tenses you want to prioritize for learning',
            link: '/new-set/custom-set/tense-selection'
        }
    ]

    return (
        <>
            <BackButton link='/' />
            <NavigationButtons buttons={buttons}/>
        </>
    )
}