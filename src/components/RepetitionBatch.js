import ConjugationGrid from './ConjugationGrid';

export default function RepetitionBatch({batch}) {

    return (
        <div className='mb-4'>
            <p className='text-base font-medium'>Day {batch.day_number}</p>
            {
                batch.conjugationGrids.map((conjugationGrid,index) =>
                    <ConjugationGrid key={index} conjugationGrid={conjugationGrid}/>
                )
            }
        </div>
    )
    
}