import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Skills from './components/shared/Skills';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import MyBlog from './components/blogs/MyBlog';
import Blog from './components/blogs/Blog';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/skills' component={Skills} />
      <Route exact path='/myblog' component={MyBlog} />
      <Route exact path='/blog/:id' component={Blog} />
      <Route component={NoMatch} />
    </Switch>
  </>
)

export default App;