import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './components/Seetings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';




const App = (props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
      <Routes>
      <Route  path='/dialogs' element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch = {props.dispatch}/>}/>
      <Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch = {props.dispatch}/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/music' element={<Music/>}/>
      <Route path='/settings' element={<Settings/>}/>
    </Routes>
      </div>
    
    
    </div>
    </BrowserRouter>
  );
}


export default App;
