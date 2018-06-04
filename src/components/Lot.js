import React, {Component} from 'react';

class Lot extends Component {
    constructor(props){

        super(props);
        this.state={
            people:[
                {name: "", picked: false},
                {name: "", picked: false},
                {name: "", picked: false},
                {name: "", picked: false},
            ],
        }
    }
    renderForm=()=>{
        const people = this.state.people;
        return people.map((e,i)=>(
            <input key={i} className={e.picked?"mt-2 form-control bg-success text-white"
            :"mt-2 form-control bg-white text-dark"}
            onChange={(e)=>this.handleInput(e,i)}
            value={e.name} />
        ))
    }
    handleInput=(e,i)=>{
        const name= e.target.value;
        let people= this.state.people;
        people[i].name = name;
        this.setState({
            people: people,

        })
    }
    initialize=()=>{
        let people=this.state.people;
        people.forEach(e=>e.picked=false);
        return people;
    }
    lot=()=>{
        let people =this.initialize();
        // const people= this.state.people;      
        const idx=Math.floor(Math.random()*people.length);
        people[idx].picked=true;
        this.setState({
            people: people,
        })
        // const pickedPeople = people[idx];
    }
    render(){
        return(
            
            <div>
                <button onClick={this.lot} className="btn btn-secondary">뽑기!</button>
                {this.renderForm()}
            </div>
        )
    }
}


export default Lot;
