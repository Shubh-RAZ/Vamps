import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './offset.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

export default class offset extends Component {

    
  

    constructor(props){
        super(props);

        this.selectedcar=this.selectedcar.bind(this)
        this.selectedocean=this.selectedocean.bind(this)
        this.selectedindustry=this.selectedindustry.bind(this)
        this.selectedtree=this.selectedtree.bind(this)
        this.selectedbus=this.selectedbus.bind(this)

        this.state={
            moneyvalue:10000,
            temprangevalue:1,
            selectedcar:false,
            selectedtree:false,
            selectedindustry:false,
            selectedocean:false,
            selectedbus:false,
            showtemperatureempty:true,
            showtemperaturequarter:false,
            showtemperaturehalf:false,
            showtemperaturethreequarter:false,
            showtemperaturefull:false,
            showred:true,
           comment:"",
           description:"",

           
        }
    }

    selectedcar(e){

        if(this.state.temprangevalue < 1000 ){
            this.setState({
                showtemperaturequarter:false,
                showtemperatureempty:true,
                showtemperaturefull:false,
                showtemperaturethreequarter:false,
                showtemperaturehalf:false
            })

        }

        if(this.state.temprangevalue > 1000 && this.state.temprangevalue < 2000 ){
            this.setState({
                showtemperaturequarter:true,
                showtemperatureempty:false,
                showtemperaturefull:false,
                showtemperaturethreequarter:false,
                showtemperaturehalf:false
            })
        }

        
        if(this.state.temprangevalue >= 2000 && this.state.temprangevalue < 3000 ){
            this.setState({
                showtemperaturequarter:false,
                showtemperatureempty:false,
                showtemperaturefull:false,
                showtemperaturethreequarter:false,
                showtemperaturehalf:true
            })
        }

        if(this.state.temprangevalue >= 3000 && this.state.temprangevalue < 4000 ){
            this.setState({
                showtemperaturequarter:false,
                showtemperatureempty:false,
                showtemperaturefull:false,
                showtemperaturethreequarter:true,
                showtemperaturehalf:false
            })
        }

        if(this.state.temprangevalue >= 4000 && this.state.temprangevalue < 5000 ){
            this.setState({
                showtemperaturequarter:false,
                showtemperatureempty:false,
                showtemperaturefull:true,
                showtemperaturethreequarter:false,
                showtemperaturehalf:false
            })
        }



        this.setState({
            temprangevalue:this.state.temprangevalue + 500,
            selectedcar:true,
            moneyvalue:this.state.moneyvalue - 100,
           comment:"Carbon Source",
           showred:true,
           description:"Mercedes-Benz India and Jaguar Land Rover had highest CO2 emission at 162.6 g/km and 168 g/km, respectively. BMW India cars emissions came in at 141.2 g/km"
        })
    }

    selectedocean(e){
        
        if(this.state.temprangevalue < 1000 ){
            this.setState({
                showtemperaturequarter:false,
                showtemperatureempty:true,
                showtemperaturefull:false,
                showtemperaturethreequarter:false,
                showtemperaturehalf:false
            })

        }

        if(this.state.temprangevalue > 1000 && this.state.temprangevalue < 2000 ){
            this.setState({
                showtemperaturequarter:true,
                showtemperatureempty:false,
                showtemperaturefull:false,
                showtemperaturethreequarter:false,
                showtemperaturehalf:false
            })
        }

        
        if(this.state.temprangevalue >= 2000 && this.state.temprangevalue < 3000 ){
            this.setState({
                showtemperaturequarter:false,
                showtemperatureempty:false,
                showtemperaturefull:false,
                showtemperaturethreequarter:false,
                showtemperaturehalf:true
            })
        }

        if(this.state.temprangevalue >= 3000 && this.state.temprangevalue < 4000 ){
            this.setState({
                showtemperaturequarter:false,
                showtemperatureempty:false,
                showtemperaturefull:false,
                showtemperaturethreequarter:true,
                showtemperaturehalf:false
            })
        }

        if(this.state.temprangevalue >= 4000 && this.state.temprangevalue < 5000 ){
            this.setState({
                showtemperaturequarter:false,
                showtemperatureempty:false,
                showtemperaturefull:true,
                showtemperaturethreequarter:false,
                showtemperaturehalf:false
            })
        }

        this.setState({
            selecteocean:true,
            comment:"Carbon Sink",
            moneyvalue:this.state.moneyvalue-1000,
            temprangevalue:this.temprangevalue - 500,
            showred:false,
            description:"Around 25% of all CO2 emissions are absorbed by the ocean, making it one of the world's largest 'carbon sinks'."
          
        })

    }

    selectedindustry(e){

        
        if(this.state.temprangevalue < 1000 ){
            this.setState({
                showtemperaturequarter:false,
                showtemperatureempty:true,
                showtemperaturefull:false,
                showtemperaturethreequarter:false,
                showtemperaturehalf:false
            })

        }

        if(this.state.temprangevalue > 1000 && this.state.temprangevalue < 2000 ){
            this.setState({
                showtemperaturequarter:true,
                showtemperatureempty:false,
                showtemperaturefull:false,
                showtemperaturethreequarter:false,
                showtemperaturehalf:false
            })
        }

        
        if(this.state.temprangevalue >= 2000 && this.state.temprangevalue < 3000 ){
            this.setState({
                showtemperaturequarter:false,
                showtemperatureempty:false,
                showtemperaturefull:false,
                showtemperaturethreequarter:false,
                showtemperaturehalf:true
            })
        }

        if(this.state.temprangevalue >= 3000 && this.state.temprangevalue < 4000 ){
            this.setState({
                showtemperaturequarter:false,
                showtemperatureempty:false,
                showtemperaturefull:false,
                showtemperaturethreequarter:true,
                showtemperaturehalf:false
            })
        }

        if(this.state.temprangevalue >= 4000 && this.state.temprangevalue < 5000 ){
            this.setState({
                showtemperaturequarter:false,
                showtemperatureempty:false,
                showtemperaturefull:true,
                showtemperaturethreequarter:false,
                showtemperaturehalf:false
            })
        }

        this.setState({
           temprangevalue:this.state.temprangevalue + 1000,
            selectedindustry:true,
            comment:"Carbon Source",
            moneyvalue:this.state.moneyvalue-2000,
            showred:true,
        
          
            
        })

    }

    selectedtree(e){

        
        if(this.state.temprangevalue < 1000 ){
            this.setState({
                showtemperaturequarter:false,
                showtemperatureempty:true,
                showtemperaturefull:false,
                showtemperaturethreequarter:false,
                showtemperaturehalf:false
            })

        }

        if(this.state.temprangevalue > 1000 && this.state.temprangevalue < 2000 ){
            this.setState({
                showtemperaturequarter:true,
                showtemperatureempty:false,
                showtemperaturefull:false,
                showtemperaturethreequarter:false,
                showtemperaturehalf:false
            })
        }

        
        if(this.state.temprangevalue >= 2000 && this.state.temprangevalue < 3000 ){
            this.setState({
                showtemperaturequarter:false,
                showtemperatureempty:false,
                showtemperaturefull:false,
                showtemperaturethreequarter:false,
                showtemperaturehalf:true
            })
        }

        if(this.state.temprangevalue >= 3000 && this.state.temprangevalue < 4000 ){
            this.setState({
                showtemperaturequarter:false,
                showtemperatureempty:false,
                showtemperaturefull:false,
                showtemperaturethreequarter:true,
                showtemperaturehalf:false
            })
        }

        if(this.state.temprangevalue >= 4000 && this.state.temprangevalue < 5000 ){
            this.setState({
                showtemperaturequarter:false,
                showtemperatureempty:false,
                showtemperaturefull:true,
                showtemperaturethreequarter:false,
                showtemperaturehalf:false
            })
        }

        this.setState({
            temprangevalue:this.state.temprangevalue - 500,
            selectedtree:true,
            comment:"Carbon Sink",
            moneyvalue:this.state.moneyvalue - 500,
            showred:false,
            description:"A mature tree absorbs carbon dioxide at a rate of 48 pounds per year. In one year, an acre of forest can absorb twice the CO2 produced by the average car's annual mileage."
           
        })

    }

    selectedbus(e){

        
        if(this.state.temprangevalue < 1000 ){
            this.setState({
                showtemperaturequarter:false,
                showtemperatureempty:true,
                showtemperaturefull:false,
                showtemperaturethreequarter:false,
                showtemperaturehalf:false
            })

        }

        if(this.state.temprangevalue > 1000 && this.state.temprangevalue < 2000 ){
            this.setState({
                showtemperaturequarter:true,
                showtemperatureempty:false,
                showtemperaturefull:false,
                showtemperaturethreequarter:false,
                showtemperaturehalf:false
            })
        }

        
        if(this.state.temprangevalue >= 2000 && this.state.temprangevalue < 3000 ){
            this.setState({
                showtemperaturequarter:false,
                showtemperatureempty:false,
                showtemperaturefull:false,
                showtemperaturethreequarter:false,
                showtemperaturehalf:true
            })
        }

        if(this.state.temprangevalue >= 3000 && this.state.temprangevalue < 4000 ){
            this.setState({
                showtemperaturequarter:false,
                showtemperatureempty:false,
                showtemperaturefull:false,
                showtemperaturethreequarter:true,
                showtemperaturehalf:false
            })
        }

        if(this.state.temprangevalue >= 4000 && this.state.temprangevalue < 5000 ){
            this.setState({
                showtemperaturequarter:false,
                showtemperatureempty:false,
                showtemperaturefull:true,
                showtemperaturethreequarter:false,
                showtemperaturehalf:false
            })
        }

        this.setState({
            temprangevalue:this.state.temprangevalue + 300,
            moneyvalue:this.state.moneyvalue - 300,
            selectedbus:true,
           comment:"Carbon Source",
           showred:true,
           description:"fuel savings yield commensurate cuts in CO2 emissions. A passenger car carrying one person emits 89 pounds of CO2 per 100 passenger miles, while a full bus emits only 14 pounds"

        })

    }


    render() {

        let temprange = this.state.temprangevalue 

        return (
            <div>
                <div className="offset">

                    <div className="top-bar">
                        <div className="money-left">
                            <div className="money-heading">Money Left</div>
                            <div className="money-icon">
                                
                                <div className="moneyvalue mny-spc">{this.state.moneyvalue}</div>
                            </div>
                        </div>

                        <div className="offset-comment">
                            <div className={this.state.showred ? "red-desc" : "green-desc"}>{this.state.comment}</div>
                            <div className="offset-det"></div>
                        </div>
                        <div className="offset-co2-emission">
                            <div className="icon-temperature">
                                {
                                 this.state.showtemperatureempty?
                                 <i class="fa fa-thermometer-empty" aria-hidden="true"></i>
                                 :null
                                }
                                {
                                 this.state.showtemperaturequarter?
                                 <i class="fa fa-thermometer-quarter" aria-hidden="true"></i>
                                 :null
                                }
                                {
                                 this.state.showtemperaturehalf?
                                 <i class="fa fa-thermometer-half" aria-hidden="true"></i>
                                 :null
                                }
                                {
                                 this.state.showtemperaturethreequarter?
                                 <i class="fa fa-thermometer-three-quarters" aria-hidden="true"></i>
                                 :null
                                }
                                {
                                 this.state.showtemperaturefull?
                                 <i class="fa fa-thermometer-full" aria-hidden="true"></i>
                                 :null
                                }

                               
                               
                            </div>
                        </div>
                    </div>
                    <div className="offset-cont">
                        <div className="row in">
                           <div className="col-sm-4 icon-box">  <div className="car-icon component" onClick={this.selectedcar} > <i class="fa fa-car" aria-hidden="true"></i> </div></div>
                           <div className="col-sm-4 icon-box">  <div className="bus-icon component" onClick={this.selectedbus}><i class="fa fa-bus"
                            aria-hidden="true"></i></div></div>
                           <div className="col-sm-4 icon-box">  <div className="industry-icon component" onClick={this.selectedindustry}><i class="fa fa-industry" aria-hidden="true"></i></div></div>
                           <div className="col-sm-4 icon-box">  <div className="tree-icon component" onClick={this.selectedtree}><i class="fa fa-tree" aria-hidden="true"></i></div></div>
                           
                           <div className="offset-sm-4 col-sm-4 icon-box">  <div className="tree-icon component" onClick={this.selectedocean}><i class="fa fa-tint" aria-hidden="true"></i></div></div>
                       
                        </div>
                    </div>

                    <div className="offset-description">
                            <div className="description-comment">{this.state.description}</div>
                    </div>


                </div>
            </div>
        )
    }
}
