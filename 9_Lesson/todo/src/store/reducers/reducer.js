const INITIAL_STATE = {
    list: [
        {id: 1, title: 'First todo', completed: false},
        {id: 2, title: 'Second todo', completed: false}
    ],
}
export default function reducer( state = INITIAL_STATE, {type, payload}) {
    console.log(state)
    switch (type){
        case 'add':
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: state.list.length + 1,
                        title: payload.title,
                        completed: false
                    }
                ]
            }
        case 'toggle':
            return {
                ...state,
                list: state.list.map(todo => todo.id === payload ? {...todo, completed: !todo.completed} : todo)
            }
        case 'delete':
            return {
                ...state,
                list: state.list.filter(todo => todo.id !== payload)
            }
        default:
            return state;
    }
};