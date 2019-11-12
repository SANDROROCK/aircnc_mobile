import {createAppContainer,createSwitchNavigator} from 'react-navigation';

import Login from './pages/logins';
import List from './pages/list';
import Book from './pages/book';

const  Router = createAppContainer(
    createSwitchNavigator({
        Login,
        List,
        Book
    })
);

export default Router;