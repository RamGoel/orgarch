import './App.css';
import './index.css';

import { RouterProvider } from 'react-router-dom';
import { Router } from './utils/routes';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <RouterProvider router={Router} />
        <ToastContainer />
      </div>
    </Provider>
  );
}

export default App;
