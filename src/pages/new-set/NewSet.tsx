import BackButton from "../../components/BackButton"
import NavigationButtons from "../../components/NavigationButtons"
import Button from "components/Button"

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
            <div className="flex flex-col gap-16 h-full justify-center">
            {    
                buttons.map((button, index) => 
                    <div
                        key={index}
                        className="flex flex-col gap-5 w-full items-center text-center"
                    >
                        <Button label={button.title} buttonClassName="w-1/3" link={button.link} linkClassName="w-full"/>
                        <p className="w-3/4">{button.description}</p>
                    </div>
                )
            }
            </div>
        
        </>
    )
}