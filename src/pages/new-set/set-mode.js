import { Link } from "react-router-dom"
import { Button
 } from "@material-tailwind/react"
export default function SetMode(){

    return (

        <div>
            <Link>
                <Button>Pre Set</Button>
                <span>Pick among the sets we've built for you.</span>
            </Link>
            <Link>
                <Button>Custom Set</Button>
                <span>Customize your own set by choosing which verbs and tenses you want to prioritize for learning</span>
            </Link>
        </div>

    )
}