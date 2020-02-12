import React, { Component } from 'react';
import { connect } from 'react-redux';

class SecondPage extends Component {
    state = {
        data: JSON.parse(this.props.data)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: JSON.parse(nextProps.data)
        })
    }

    handleChange(){
        this.props.dispatch({type:'Data', data:JSON.stringify('2eoqwurgfaskjfsahl')})
    }

    render() {
        return (
            <div>
                <p>{this.state.data}</p>
                <button onClick={()=>this.handleChange()}>This is second page</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(SecondPage)