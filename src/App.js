import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit';
import { tokenUrl, instanceLocater } from './config';
import Messages from './Messages';
class App extends Component {
  state = {
    messages: []
  }
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator : instanceLocater,
      userId : 'kieran', 
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    });

    chatManager.connect()
    .then(currentUser => {
      currentUser.subscribeToRoom({
        roomId: 19376283,
        hooks: {
          onNewMessage: message => {
            let arr = this.state.messages;
            arr.push(message.text);
            this.setState({messages: arr});
          }
        }
      })
    })
  }
  render() {
    return (
      <div className="App">
      <h1>Messages</h1>
        <aside className='sidebar' style={{backgroundColor: '#f8f8f8', color: 'black', width: '300px', height: '1000px'}}>
          {
            this.state.messages.map((message, index) => {
              return <Messages message={message} />
            })
          }
        </aside>
      </div>
    );
  }
}

export default App;
