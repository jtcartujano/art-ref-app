const initState = {
    references: [
        {id: '1', 
        image: 'https://pbs.twimg.com/media/FklNcCJWQAMmxL2?format=jpg&name=900x900', 
        source: 'https://twitter.com/palmie_oekaki/status/1605899894669168641'},
        {id: '2', 
        image: 'https://pbs.twimg.com/media/FpfzCmgXgAEk9Co?format=jpg&name=medium', 
        source: 'https://twitter.com/palmie_oekaki/status/1628037018889461761'},
        {id: '3', 
        image: 'https://pbs.twimg.com/media/FpaM0-oXsAEUh93?format=jpg&name=medium', 
        source: 'https://twitter.com/palmie_oekaki/status/1627643162746572803'}
    ]
}

const referenceReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_REFERENCE':
            console.log('reference has been made', action.reference);
    }
    return state;
}

export default referenceReducer;