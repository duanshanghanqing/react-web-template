import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import configureStore from './store/configureStore';
import routes from './routes';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.min.css';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <Router basename="/">
            {renderRoutes(routes)}
          </Router>
        </Provider>
      </ConfigProvider>
    );
  }
}

export default App;
