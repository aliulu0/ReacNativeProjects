import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import InitialState from './store';
import reducers from './reducers';

export default function FavoriteProvider({children}) {
  const store = createStore(reducers, InitialState);
  return <Provider store={store}>{children}</Provider>;
}
