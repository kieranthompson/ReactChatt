import React from 'react';

const dummydata = [
    { 
        senderId: 'kieran', 
        text: 'hey, how is it going?'
    },
    { 
        senderId: 'conor', 
        text: 'hey, how is it going?'
    },
    { 
        senderId: 'eoin', 
        text: 'hey, how is it going?'
    }
]

class MessageList extends React.Component {
    render() {
        return (
            <div className="message-list">
                {dummydata.map((message, index) => {
                    return (
                        <div key={message.id} username={message.senderId} text={message.text} />
                    )
                })}
            </div>
        )
    }
}

export default MessageList;