import { createStore, combineReducers, compose } from 'redux'
import SettingsReducer from './containers/settings/reducer'

const rootReducer = combineReducers({
    settings: SettingsReducer
})

export default function configureStore() {
    return createStore(rootReducer)
}
