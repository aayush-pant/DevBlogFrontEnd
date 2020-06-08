import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout'
import Blogs from './containers/Blogs/Blogs';
// import AddBlog from './containers/AddBlog/AddBlog';
import Thoughts from './containers/Thoughts/Thoughts';
import About from './containers/About/About';
import FullBlog from './containers/FullBlog/FullBlog';

import './App.scss';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Layout>
          <Switch>
            <Route path="/" exact component={Blogs} />
            <Route path="/thoughts" component={Thoughts} />
            {/* <Route path="/add-blog" component={AddBlog} /> */}
            <Route path="/about" component={About} />
            <Route path="/blog/:id" component={FullBlog} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;