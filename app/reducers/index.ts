import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import clickerReducer, * as fromClickerReducer from './clicker.reducer';

export interface AppState {
  clickers: fromClickerReducer.ClickerItemState;
}

export * from './clicker.reducer';

export default compose(storeFreeze, storeLogger(), combineReducers)({
    // search: searchReducer,
    // books: booksReducer,
    clickers: clickerReducer,
});
