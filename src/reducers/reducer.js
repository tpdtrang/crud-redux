import * as types from '../constants/typeAction';
const INITIAL_STATE = {
    all: [],
    array: [
        {
            "id": 1,
            "image": "https://media.tinmoi.vn/2017/08/16/cap-doi-blogger-kiem-200-trieu-cho-1-buc-hinh-dang-tren-instagram-6.jpg",
            "title": "Title1",
            "description": "des1",
            "date": "25/01/2019"
        }
    ]
}
export default function store(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case types.GET_STORE:
            return Object.assign({}, state, {
                all: action.payload
            })
        case types.ADD_STORE:
            return Object.assign({}, state, {
                all: [...state.all, action.payload]
            })
        case types.DELETE_STORE:
            return Object.assign({}, state, {
                all: state.all.filter(item => item.id !== action.payload)
            })
        case types.UPDATE_STORE:
            return Object.assign({}, state, {
                all: state.all.map(data => data.id === action.payload.id ? action.payload : data)
            })
        default:
            return state;
    }
}