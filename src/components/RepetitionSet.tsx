import ConjugationGrid from './ConjugationGrid';

export default function RepetitionSet({repetitionSet}) {

    return (
        <div className='mb-4'>
            <p className='text-base font-medium'>Day {repetitionSet.day_number}</p>
            {
                repetitionSet.conjugationGrids.map((conjugationGrid,index) =>
                    <ConjugationGrid key={index} conjugationGrid={conjugationGrid}/>
                )
            }
        </div>
    )
    
}