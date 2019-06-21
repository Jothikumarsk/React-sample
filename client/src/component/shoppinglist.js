import React, {Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTranisiton, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

class Shoppinglist extends Component{
    state = {
        items:[
            {id: uuid(), name: 'Eggs'},
            {id: uuid(), name: 'Milk'},
            {id: uuid(), name: 'Water'},
            {id: uuid(), name: 'Steak'}
        ]
    }
   render(){
    const {items} = this.state;
    return{
        <container> 
            <Button 
             color = "dark"
             style = {{marginBottom:'2rem'}}
             onClick ={()=>{
                 const name = prompt('Enter item');
                 if (name) {
                     this.setState(state => (
                         {
                             items:[...state.items, {id:uuid(),name}]
                         }));
                    }
             }}
            >
            Add item
            </Button>
        </container>
     };
 }
}

export default Shoppinglist;