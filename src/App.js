import React from 'react';
import { Provider} from 'react-redux';
import { store } from './store/store';
import { AppRouter } from './router/AppRouter';
import './index.css';

export const App = () => {
    return (
        <Provider store={store}>
            <div className="container">
                <AppRouter/>
            </div>
        </Provider>
    )
}
