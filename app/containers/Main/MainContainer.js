import React from 'react'

class MainContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {name: 'Scott'}
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick () {
        this.setState({name: 'Jeff'})
    }
    render () {
        return (
          <div>
          </div>
        )
    }
}

export default MainContainer
