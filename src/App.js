import React, { Component } from 'react';

import Header from './components/header/header-component';
import Profile from './components/profile/profile-component';
import Content from './components/main/content/content.component';

// load our data
// In the future we might add an API / MongoDB or MySQL
import { posts, videos, tags } from './data.json';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      posts,
      videos,
      tags,
      searchField: '',
    };
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { posts, videos, tags } = this.state;
    return (
      <div className="App">
        <Header handleChange={this.handleChange} />

        <div className="main">
          <Profile />
          <Content posts={posts} videos={videos} tagged={tags} />
        </div>
      </div>
    );
  }
}

export default App;