import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Username from './pages/Username/Username';
import Tweets from './pages/Tweet/Tweets';
import Header from './components/Header/Header';

const App = () => {
  const router = useHistory();
  if (!localStorage.getItem('tweets')) {
    router.replace('/username');
  }
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Tweets} />
        <Route exact path='/username' component={Username} />
      </Switch>
    </>
  );
};

export default App;
