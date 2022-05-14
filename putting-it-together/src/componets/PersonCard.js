import React, {Component} from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age : this.props.age
        };
    }
    
    render(){
        const Birthday = () => { this.setState({age : this.state.age + 1}) };
        return (
            
            <div>
                <h1>{this.props.firstName + " " + this.props.lastName }</h1>
                <h3>Age: {this.state.age}</h3>
                <h3>Hair Color: {this.props.hairColor}</h3>
                <button onClick={ Birthday }>Birthday button for {this.props.firstName} </button>
            </div>
        ); 
    }
}

export default PersonCard;


// func style 
// import React, {useState} from 'react';
// const PersonCard = (props) => {

// const [count,setCount] = useState(props.age);

// const clickHandler = () => {
//     setCount(count + 1);
// }          

//     return(
//         <div>
//             <h1>{ props.lastName }, { props.firstName }</h1>
//             <p>Age: { count }</p>
//             <p>Hair Color: { props.hairColor }</p>
//             <button onClick={clickHandler}>Birthday button for {props.firstName} </button>
//         </div>
//     );
// }
// export default PersonCard;
