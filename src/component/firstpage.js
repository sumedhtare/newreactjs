import React, { Component } from 'react';
import { connect } from 'react-redux';
import SecondPage from './secondpage'

class FirstPage extends Component {
    state = {
        data: JSON.parse(this.props.data),
        issecondpage:false
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
        const{issecondpage,data} = this.state;
        return (
            <div>
                <p>{data}</p>
                <button onClick={()=>this.handleChange()}>change props</button>
                {issecondpage && <SecondPage/>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(FirstPage)