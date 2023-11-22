const initState = {
    tags: [
        {name: 'Anatomy',
        value: 'anatomy'},
        {name: 'Backgrounds',
        value: 'backgrounds'},
        {name: 'Posing',
        value: 'Posing'},
        {name: 'Colour and Shading',
        value: 'colourandshading'}
    ]
}

const tagReducer = (state = initState, action) => {
    console.log(state);
    return state;
}

export default tagReducer;
