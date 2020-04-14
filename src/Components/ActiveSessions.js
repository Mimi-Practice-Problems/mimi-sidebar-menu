import React, { Component } from 'react';
import Sessions from '../ReusableComponents/Sessions'

class ActiveSessions extends Component {
    state = {  }
    render() { 
        const { list } = this.props; // destructor from props
        const sessions = list.map( (e) => ( // mapping over lists
            <Sessions key={e.id} {...e} /> // return whole new component, spread element so componetns gets ALL properties
        ))
        return ( 
            <div style={{ border: '1px solid blue'}}>
                {sessions} 
            </div>
         );
    }
}
 
export default ActiveSessions;