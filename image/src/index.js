import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProfileContext, UserProfileProvider } from './Context/Authcontext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<UserProfileProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</UserProfileProvider>

);

