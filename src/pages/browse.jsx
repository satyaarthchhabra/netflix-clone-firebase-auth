import React from 'react'
import BrowseContainer from '../containers/browse'
import { useContent } from '../hooks'
import selectionFilter from '../utils/selection-filter'

const Browse = () => {
    // series need ed 
    const { series } = useContent('series')
    const { films } = useContent('films')


    // and slides 
    // pass it to the browse container 
    return (
        <BrowseContainer slides={selectionFilter({ series, films })} />
    )
}

export default Browse
