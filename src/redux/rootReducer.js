const initState = {
    login: {
        email: '',
        password: ''
    },
    users: [
        {id: 1, name: "Thu Anh Phan", email:"imcatee0@gmail.com", password: '123'}
    ]
}
export const rootReducer = (state=initState, action) => {
    console.log("State: ", state);
    switch (action.type) {
        case 'register':
            return {
                ...state,
                users: [
                    ...state.users, action.payload
                ]
            }
        case 'login': 
            return {
                ...state,
                login: action.payload
            }
        default: 
            return state;
    }
}