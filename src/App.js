import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import SinglePost from './components/SinglePost'
import Posts from './components/Posts'
import Project from './components/Project'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Posts} path='/posts' />
        <Route component={Project} path='/project' />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
