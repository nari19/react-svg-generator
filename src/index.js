import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
registerServiceWorker();



// create-react-appを使ってReactコンポーネントの素振り、GitHub Pagesへのデプロイまで
// https://blog.wadackel.me/2016/create-react-app/