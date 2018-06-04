import React, {Component} from 'react';
import Gy from './uoscult';
class Uos extends Component {
    constructor(props){
        super(props);
        this.state={
            subject :"",
        }
    }
    show=()=>{
        Gy.map(e=>{console.log(e.subject_nm[0])})
        console.log(Gy.length);
    }
    val=()=>{
       
        // const gt = "gigi";
        const gy= Gy.map(e=>e.subject_nm[0])
        console.log(gy);
        console.log(gy[3]);
        const idx = Math.floor(Math.random()*Gy.length);
        const ga= gy[idx];
        console.log(idx);
        console.log(gy[idx]);
        this.setState({
            subject : ga,
        })
        // console.log(gy[idx].subject_nm[0])
        // return Gy.subject_nm[idx];


    }
    pick=()=>{
        const idx=(Math.floor(Math.random()*Gy.length));
        const subject_nm = Gy[idx].subject_nm[0];
        this.setState({
            subject: subject_nm,
        })
    }
    // initialize=()=>{
    //     this.val = null; 
    // }
    result=()=>{
        let resu= this.val();
        console.log(resu);
        return resu;
    }
    new=()=>{
        this.val();
    }
    render(){
        return(
            <div>
                <button onClick={this.show}>콘솔에뿌리기</button>
                <button onClick={this.val}>뽑지</button>
                <button onClick={this.new}>하나더뽑자</button>
                <h1>
                    {this.state.subject}
                    </h1>
                <h1>
                    
                    </h1>

                </div>

         
        )
    }
}


export default Uos;
