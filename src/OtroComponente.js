import React,{Component}  from "react";


export class OtroComponente extends React.Component
{

    constructor( props ){
        super(props);
        this.state = {seconds : 0};
        

    }

    cambiarSegundo(){
        this.setState({seconds : this.state.seconds +1});
    }

    mostrarMensaje(){
        return " \n --Entendiendo React--";

    }

    // cuando carga.
    componentDidMount() {
        this.interval = setInterval(() => this.cambiarSegundo(), 1000);
    }
    
    // cuando descarga.
    componentWillUnmount() {
        clearInterval(this.interval);
    }
      

    render(){
        return (
        <div>
            <p>Probando componentes numero 1</p>
            <p><img alt="React" src="https://miro.medium.com/max/4302/1*QaEF8m8VFeJrNZKifZVhSg.png" width="500" height="200" /></p>
                <h3> Mensaje de la función mostrarMensaje
                    <p> 
                        {this.mostrarMensaje()}
                    </p>
                </h3>


        <h2>¡ Segundos que llevas en la página : {this.state.seconds} !</h2>
        </div>)

    }
}

export class ComponentePrueba extends Component{
    render(){
        return(
            <div>
                <img alt="componentes" src = "https://i.stack.imgur.com/WRZip.png" width="400" height="300" />
            </div>
        );
    }
}


export const OtroComponenteMas = ()=><p>Probando otro componentes, Adiós :D</p>;