import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {
    state = { 
        lat: null, 
        long: null,
         errorMessage:null 
    };

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat:position.coords.latitude, long:position.coords.longitude }),
            err => this.setState({ errorMessage: err.message})
        );

    }

    componentDidUpdate(){
        console.log('My component aws just updated.');
    }
    renderBody()
    {
        if (this.state.errorMessage){
            return <div> Error:<br/>{this.state.errorMessage} </div>
        }
        if (!this.state.errorMessage && this.state.lat){
           return <SeasonDisplay lat={this.state.lat} long={this.state.long}/>;
        }
        return <Spinner />
    }
     render(){
        return( <div className="ui box">
        { this.renderBody() }
            </div>);
}
}

ReactDOM.render(<App />, document.getElementById('root'));
