import React from 'react';
import ReactDOM from 'react-dom';
// import { Match, Miss} from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const Root = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={StorePicker} />
                <Route path="/store/:storeId" component={App} />
                <Route component={NotFound} />
            </Switch>            
        </BrowserRouter>
    )
}


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
