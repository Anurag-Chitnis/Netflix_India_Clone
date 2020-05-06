import {combineReducers} from 'redux';
import {FaqReducer} from './FAQ/faq.reducer';
import {footerReducer} from './Footer/footer.reducer';

export const RootReducer = combineReducers({
    faqs: FaqReducer,
    footer: footerReducer
});