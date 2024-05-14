import Day from "./Day"

export default function Month({month}) {

    return (
        <div className='mb-8'>
            <p className='text-xl font-semibold text-center'>{month.month}</p>
            {
                month.days.map((day,index) =>
                    <Day key={index} day={day}/>
                )
            }
        </div>
    )
    
}