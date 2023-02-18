import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './components/Seetings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer'
import HeaderContainer from './components/header/HeaderContainer';
import LoginPage from './components/Login/Login';




const App = () => {

  return (
<BrowserRouter>
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs' element={<DialogsContainer/>} />
          <Route path='/profile/:userId' element={<ProfileContainer/>} />
          <Route path='/profile' element={<ProfileContainer/>} />
          <Route path='/users' element={<UsersContainer/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/music' element={<Music/>} />
          <Route path='/settings' element={<Settings/>} />
          <Route path='/login' element={<LoginPage/>} />

        </Routes>
      </div>


    </div>
    </BrowserRouter>
  );
}


export default App;
