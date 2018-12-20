import React from 'react';

export class Messages extends React.Component {
    render() {
        return(
            <div>
                <p style={{backgroundColor: 'lightblue', borderRadius: '5px', width: '80%', margin: 'auto', marginBottom: '20px'}}> {this.props.message} </p>
            </div>
        )
    }
}
export default Messages;