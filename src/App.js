import './App.css';
import Chat from './Components/Chat/Chat';
import Sidebar from './Components/Sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState } from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Login from './Components/Login/Login';
import { useStateValue } from './Components/StateProvider/StateProvider';

function App() {
  // const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();
  
  return (
    <div className="app">
     
      {!user ? (
        <Login />         
      ) : (
        <div className="app_body">
        <Router>
        <Sidebar />
          <Switch>            
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </Router>
      </div>
    
      )}
      </div>
  );
}

export default App;
