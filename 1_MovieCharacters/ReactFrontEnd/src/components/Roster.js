import React from 'react';
import singleImage from './image';

class Roster extends Component {
    constructor(props){
        super(props);
        this.state = {
            imageArray: []
        }
    }
    loadComponent(){
        fetch('http://localhost:8000/roster/')
        .then (data => {
            return data.json();
        })
        .then (parsedData => {
            this.setState({imageArray: parsedData});
        })
    }
    
    render() { 
        return ( 
            <div>
                {this.state.imageArray.map((p, index)=> {
                    return <Char key={index} params={p} />
                })}
            </div>
         );
    }
}
 
export default Roster;