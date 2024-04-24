import NavigationButtons from "../../components/NavigationButtons"

export default function SetMode(){

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
            <NavigationButtons buttons={buttons}/>
        </>
    )
}