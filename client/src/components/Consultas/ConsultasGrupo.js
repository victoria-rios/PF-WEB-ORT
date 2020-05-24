import ReactDOM from 'react-dom';

import axios from 'axios';

import ConsultaAdd from './ConsultaAdd';

import Consulta from './Consulta';

import React, { Component } from 'react';


class ConsultasGrupo extends Component {

    constructor(props){

      super(props);  
       
      this.state = {
    
        consultas: [{id: 1, consulta: 'Test'}]
        
    }        

}

handleConsultaSubmit(data){

    const postData = {

        consulta: data
    
    };

    axios.post('', postData).then(response => {

        console.log('response',response.data);

        let consultas = this.state.consultas;

        consultas.unshift({

            id: consultas.length + 1,

            body: response.data
        })

        this.setState({consultas : consultas});
    
    });
}

renderConsultas(){

    const { consultas } = this.state;

    return consultas.map(consulta => {

        const{ id, body } = consulta;

        return (

           <Consulta key={id} body = {body}/>

        );

    })

}

render(){

    return(

      <div>
          {this.renderConsultas()}

          <ConsultaAdd handleConsultaSubmit={this.handleConsultaSubmit} />

      </div>  

    );
  }

}

export default ConsultasGrupo;