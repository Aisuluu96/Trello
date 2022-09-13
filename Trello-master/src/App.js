import './App.css';
import Authorization from './Components/Authorization/Autorization';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import Profile from './Components/Profile/Profile';
import { style } from '@mui/system';
import styled from 'styled-components';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

function App() {
  const store = useSelector(state => state.user.spiner)
  const proverkaLogin = useSelector(state => state.user.proverkaLogin)

  // if (store) {
  //   return (
  //     <div className="App">
  //       <Div>
  //         <CircularProgress />
  //       </Div>
  //     </div>
  //   );
  // }
  // if (!proverkaLogin) {
  //   return (
  //     <div className="App">
  //       {
  //         store && <Div>
  //           <CircularProgress />
  //         </Div>
  //       }
  //       <Authorization />
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div className="App">
  //       {
  //         store && <Div>
  //           <CircularProgress />
  //         </Div>
  //       }
  //       <Profile />
  //     </div>
  //   );
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact>
          {
            store && <Div>
              <CircularProgress />
            </Div>
          }
          <Authorization />
        </Route>
        <Route path="/profile" exact>
          {
            store && <Div>
              <CircularProgress />
            </Div>
          }
          <Profile />
        </Route>
        <Route exact to="/">
          {
            !proverkaLogin ? <Redirect to="/" /> : <Redirect to="/profile" />
          }
        </Route>
      </BrowserRouter>
    </div>
  )

}

export default App;


const Div = styled.div`
position: fixed;
background-color: rgba(0, 0, 0, 0.8);
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
z-index: 10;
`