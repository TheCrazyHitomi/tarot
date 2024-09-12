

const KeywordsDisplay = (props: { keywords: string[]})  =>{

    const { keywords } = props;

    return(

        <ul className="description">
            {keywords.map(keyword => <li>{keyword}</li>)}
        </ul>
    )
}

export default KeywordsDisplay;