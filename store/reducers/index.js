import { combineReducers} from "redux"
import authReducer from "./authReducer"
import appReducer from "./appReducer"

const reducers=combineReducers({
    auth: authReducer,
    app: appReducer
})

export default reducers