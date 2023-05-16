import './App.css';
import './index.css';

import { RouterProvider } from 'react-router-dom';
import { Router } from './utils/routes';
import { Provider } from 'react-redux';
import { store } from './redux/store';



function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <RouterProvider router={Router} />
      </div>
    </Provider>
  );
}

export default App;
