import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div className="kakikomi">
        <div>{this.props.post.kakikomi}</div>
        <p className="name">{this.props.name}</p>
      </div>
    );
  }
}

class List extends Component {
  // 書き込み一覧
  constructor(props) {
    super(props);
    this.state = {posts:[]};
  }
  // 書き込み一覧をサーバーから取得
  componentDidMount() {
    fetch('/api/v1/Post?sort={"_id":-1}')
      .then(response => response.json())
      .then(date => this.setState({posts: date}));
  }
  render(){
    const {posts} = this.state;
    var list = [];
    for (var i in posts){
      list.push(<li key={i}><Post post={posts[i]} /></li>);
    }
    return (<ul>{list}</ul>);
  }
}




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
