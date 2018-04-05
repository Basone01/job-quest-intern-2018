import React, { Component } from 'react'

class FetchingButton extends Component {

    handleClick(){
        console.log(123);
        
    }

    render () {
        return (
            <button onClick={this.handleClick}>
                ClickMe
            </button>
        )
    }
}

export default FetchingButton