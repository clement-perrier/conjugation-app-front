
export default function ConjugationGrid({conjugationGrid}) {

    return (
        <>
            <p className='text-base uppercase'>
                {conjugationGrid.verb}
                <span className="lowercase"> in </span>
                {conjugationGrid.tense}
            </p>
        </>
    )
    
}