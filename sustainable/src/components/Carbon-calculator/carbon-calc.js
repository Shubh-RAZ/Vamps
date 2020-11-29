import React, { Component } from 'react'
import './carbon-calc.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'

export default class carbon_calc extends Component {
    constructor(props){
    super(props);

        this.selectedCar=this.selectedCar.bind(this)
        this.showLpg=this.showLpg.bind(this)
        this.showElectricity=this.showElectricity.bind(this)
        this.showFlight=this.showFlight.bind(this)
        this.showWaste=this.showWaste.bind(this)
        this.showTrain=this.showTrain.bind(this)
        this.showCar=this.showCar.bind(this)
        this.selectedLong=this.selectedLong.bind(this)
        this.selectedMedium=this.selectedMedium.bind(this)
        this.selectedShort=this.selectedShort.bind(this)
        this.selectedPetrol=this.selectedPetrol.bind(this)
        this.selectedDiesel=this.selectedDiesel.bind(this)
        this.onChangeelec=this.onChangeelec.bind(this)
        this.onChangecar=this.onChangecar.bind(this)
        this.onchangetrain=this.onchangetrain.bind(this)
        this.onchangeflight=this.onchangeflight.bind(this)
        this.onchangewaste=this.onchangewaste.bind(this)
        this.onchangelpg=this.onchangelpg.bind(this)
        this.onChangecarpetrol=this.onChangecarpetrol.bind(this)
        this.onChangecardiesel=this.onChangecardiesel.bind(this)
        this.onchangeflightshort=this.onchangeflightshort.bind(this)
        this.onchangeflightmedium=this.onchangeflightmedium.bind(this)
        this.onchangeflightlong=this.onchangeflightlong.bind(this)
        this.oncliksubmit =this.oncliksubmit.bind(this)


    this.state ={
        showCar:false,
        showLpg:false,
        showElectricity:true,
        showFlight:false,
        showWaste:false,
        showTrain:false,
        showcardieselform:false,
        showcarpetrolform:false,
        showflightshortform:false,
        showflightmediumform:false,
        showflightlongform:false,
        showwhole:true,
        showresult:false,
        selectedMedium:false,
        selectedLong:false,
        selectedShort:false,
        selectedDiesel:false,
        selectedPetrol:false,
        elecvalue:'',
        lpgvalue:'',
        trainvalue:'',
        flightlongvalue:'',
        flightmediumvalue:'',
        flightshortvalue:'',
        wastevalue:'',
        carpetrolvalue:'',
        cardieselvalue:'',
        height:60,
        oncliksubmit:false

    }

    
    }

    oncliksubmit(){
        this.setState({
            oncliksubmit:true,
            showresult:true,
            showwhole:false,
        })
    }

    onChangecardiesel(e){
        this.setState({
            cardieselvalue:e.target.value
        })
    }

    
    onChangecarpetrol(e){
        this.setState({
            carpetrolvalue:e.target.value
        })
    }

    onchangeflightlong(e){
        this.setState({
            flightlongvalue:e.target.value
        })
    }

    
    onchangeflightmedium(e){
        this.setState({
            flightmediumvalue:e.target.value
        })
    }

    onchangeflightshort(e){
        this.setState({
            flightshortvalue:e.target.value
        })
    }



    selectedLong(){
        this.setState({
            selectedLong:true,
            showflightlongform:true,
            showflightmediumform:false,
            showflightshortform:false,
        })
    }

    selectedMedium(){
        this.setState({
            selesctedMedium:true,
            showflightmediumform:true,
            showflightlongform:false,
            showflightshortform:false,
        })
    }

    selectedShort(){
        this.setState({
            selectedShort:true,
            showflightshortform:true,
            showflightlongform:false,
            showflightmediumform:false,
        })
    }

    selectedDiesel(){
        this.setState({
            selectedDiesel:true,
            showcardieselform:true,
            showcarpetrolform:false,
        })
    }

    selectedPetrol(){
        this.setState({
            selectedPetrol:true,
            showcarpetrolform:true,
            showcardieselform:false,
        })
    }

    selectedCar(e){
        this.setState({
            showCar:true,
            showLpg:false,
            showElectricity:false,
            showFlight:false,
            showWaste:false,
            showTrain:false,
        })
    }

    
    showLpg(e){
        this.setState({
            showCar:false,
            showLpg:true,
            showElectricity:false,
            showFlight:false,
            showWaste:false,
            showTrain:false,
        })
    }

    
    
    showElectricity(e){
        this.setState({
            showCar:false,
            showLpg:false,
            showElectricity:true,
            showFlight:false,
            showWaste:false,
            showTrain:false,
        })
    }

    showCar(e){
        this.setState({
            showCar:true,
            showLpg:false,
            showElectricity:false,
            showFlight:false,
            showWaste:false,
            showTrain:false,

        })
    }

    
    
    showWaste(e){
        this.setState({
            showCar:false,
            showLpg:false,
            showElectricity:false,
            showFlight:false,
            showWaste:true,
            showTrain:false,
        })
    }

    
    
    showFlight(e){
        this.setState({
            showCar:false,
            showLpg:false,
            showElectricity:false,
            showFlight:true,
            showWaste:false,
            showTrain:false,
        })
    }

    
    showTrain(e){
        this.setState({
            showCar:false,
            showLpg:false,
            showElectricity:false,
            showFlight:false,
            showWaste:false,
            showTrain:true,
        })
    }

    onchangeflight(e){
        this.setState({
            flightvalue:e.target.value
        })
    }

    onchangelpg(e){
        this.setState({
            lpgvalue:e.target.value
        })
    }

    onchangetrain(e){
        this.setState({
            trainvalue:e.target.value
        })
    }

    onchangewaste(e){
        this.setState({
            wastevalue:e.target.value
        })
    }

    onChangeelec(e){
        this.setState({
            elecvalue:e.target.value
        })
    }

    onChangecar(e){
        this.setState({
            carvalue:e.target.value
        })
    }

    


    render() {

        let carpetrolco2em = this.state.carpetrolvalue * 0.17295
        let cardieselco2em =this.state.cardieselvalue * 0.14876
        let flightlongco2em =this.state.flightlongvalue * 0.09007
        let flightmediumco2em = this.state.flightmediumvalue * 0.10077
        let flightshortco2em = this.state.flightshortvalue * 0.18690
        let elecco2em = this.state.elecvalue * 0.90
        let wasteco2em = this.state.wastevalue * 0.8421
        let lpgco2em =this.state.lpgvalue * 2.9846
        let trainco2em = this.state.trainvalue * 0.0096

        
     
    
        let flightmediumch4em = this.state.flightmediumvalue * 0.00001090
        let flightshortch4em = this.state.flightshortvalue * 0.00014170
        let lpgch4em =this.state.lpgvalue * 0.001183
    

        let flightlong2oem =this.state.flightlongvalue * 0.00088290
        let flightmedium2oem = this.state.flightmediumvalue * 0.00099190
        let flightshortn2oem = this.state.flightshortvalue * 0.00184210
        let lpgn2oem =this.state.lpgvalue * 0.004229

        let totalco2em = carpetrolco2em + cardieselco2em + flightlongco2em + flightmediumco2em + flightshortco2em + elecco2em + wasteco2em +trainco2em + lpgco2em

        let totalco2ems = totalco2em.toFixed(2)

        let totalch4em = flightmediumch4em + flightshortch4em + lpgch4em

        let totalch4ems = totalch4em.toFixed(2)

        let totaln2oem = flightlong2oem + flightmedium2oem + flightshortn2oem + lpgn2oem

        let totaln2oems =totaln2oem.toFixed(2)

        let totalem = totalco2em + totalch4em + totaln2oem

        let totalems = totalem.toFixed(2)

        let homeem = elecco2em + wasteco2em

        let travelem = cardieselco2em + carpetrolco2em + flightlong2oem + flightmediumco2em +flightshortco2em + flightlong2oem +flightmedium2oem + flightshortn2oem + flightshortch4em + flightmediumch4em + trainco2em
         

        let foodem = lpgch4em + lpgco2em + lpgn2oem

        let travelpercent = ( travelem/totalem ) * 100

        let foodpercent = (foodem/totalem )*100

        let homepercent = (homeem /totalem)*100

        var length =this.state.height + "px"
        var travelinpx = travelpercent.toFixed(2) + "%"
        var homeinpx = homepercent.toFixed(2) + "%"
        var foodinpx =foodpercent.toFixed(2)    + "%"


        return (
            <div>
                {
                this.state.showwhole?
                <div className="calculator">

                <div className="calc-option calc-mg">
                        <div className="option-row row">
                            <div className="col-sm-2  electricity"><div className="op" onClick={this.showElectricity}><div>Electricity</div></div></div>
                            <div className="col-sm-2   train"><div className="op" onClick={this.showTrain}><div>Train</div></div></div>
                            <div className="col-sm-2  car"><div className="op" onClick={this.showCar}><div>Car</div></div></div>
                            <div className="col-sm-2   lpg"><div className="op" onClick={this.showLpg}><div>LPG</div></div></div>
                            <div className="col-sm-2 flight"><div className="op" onClick={this.showFlight}><div>Flight</div></div></div>
                            <div className="col-sm-2  waste"><div className="op" onClick={this.showWaste}><div>Waste</div></div></div>
                        </div>
                    </div>
                    
                    <div className="calc-image-form calc-mg">
                        <div className="show">
                            {
                            this.state.showElectricity?
                            <div className="elec">
                                <div className="elec-img"><img src="electricity.gif"></img></div>
                                <div className="elec-form">
                                    <form className="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2">
                                        <input className="search-input" 
                                            type="text" 
                                            placeholder="Enter your Electricity consumption for 1 month in Kwh" 
                                            aria-label="Search"
                                            value={this.state.elecvalue}
                                            onChange={this.onChangeelec}
                                        ></input>
                            
                                    </form>
                                    
                                </div>
                            </div>
                            :null
                            }

                            {
                            this.state.showLpg?
                            <div className="elec">
                                <div className="elec-img"><img src="lpg.gif"></img></div>
                                <div className="elec-form">
                                    <form className="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2">
                                        <input className="search-input" 
                                            type="text" 
                                            placeholder="Enter your LPG consumption for 1 month in Kg" 
                                            aria-label="Search"
                                            value={this.state.lpgvalue}
                                            onChange={this.onchangelpg}
                                        ></input>
                            
                                    </form>
                                    
                                </div>
                            </div>
                            :null
                            }

                            {
                            this.state.showTrain?
                            <div className="elec">
                                <div className="elec-img"><img src="train.gif"></img></div>
                                <div className="elec-form">
                                    <form className="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2">
                                        <input className="search-input" 
                                            type="text" 
                                            placeholder="Enter your Distance covered by Train for 1 month" 
                                            aria-label="Search"
                                            value={this.state.trainvalue}
                                            onChange={this.onchangetrain}
                                        ></input>
                            
                                    </form>
                                    
                                </div>
                            </div>
                            :null
                            }

                            {
                            this.state.showWaste?
                            <div className="elec">
                                <div className="elec-img"><img src="waste.gif"></img></div>
                                <div className="elec-form">
                                    <form className="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2">
                                        <input className="search-input" 
                                            type="text" 
                                            placeholder="Enter your Waste consumption for 1 month in Kg" 
                                            aria-label="Search"
                                            value={this.state.wastevalue}
                                            onChange={this.onchangewaste}
                                        ></input>
                            
                                    </form>
                                    
                                </div>
                            </div>
                            :null
                            }

                            {
                            this.state.showCar?
                            <div className="car">
                                <div className="car-img"><img src="car.gif"></img></div>
                             
                                <div className="car-type">
                                    <div className="petrol-diesel">
                                        <div className="petrol fuel-type" onClick={this.selectedPetrol}>Petrol</div>
                                        <div className="petrol fuel-type" onClick={this.selectedDiesel}>Diesel</div>
                                    </div>
                                </div>
                                {
                                this.state.showcarpetrolform?
                                <div className="car-form">
                                    <form className="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2">
                                        <input className="search-input" 
                                            type="text" 
                                            placeholder="Enter your Distance Travelled by car in 1 month" 
                                            aria-label="Search"
                                            value={this.state.carpetrolvalue}
                                            onChange={this.onChangecarpetrol}
                                        ></input>
                                    </form>
                                    
                                </div>
                                :null
                                }
                                {
                                this.state.showcardieselform?
                                <div className="car-form">
                                    <form className="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2">
                                        <input className="search-input" 
                                            type="text" 
                                            placeholder="Enter your Distance Travelled by car in 1 month" 
                                            aria-label="Search"
                                            value={this.state.cardieselvalue}
                                            onChange={this.onChangecardiesel}
                                        ></input>
                                    </form>
                                    
                                </div>
                                :null
                                }
                            </div>
                            :null
                            }

                            {
                            this.state.showFlight?
                            <div className="car">
                                <div className="car-img"><img src="aeroplane.gif"></img></div>
                             
                                <div className="car-type">
                                    <div className="petrol-diesel">
                                        <div className="petrol fuel-type" onClick={this.selectedLong}>Long Haul</div>
                                        <div className="petrol fuel-type" onClick={this.selectedMedium}>Medium Haul</div>
                                        <div className="petrol fuel-type" onClick={this.selectedShort}>Short Haul</div>
                                    </div>
                                </div>

                                {
                                this.state.showflightlongform?
                                <div className="car-form">
                                    <form className="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2">
                                        <input className="search-input" 
                                            type="text" 
                                            placeholder="Enter your Distance Travelled by car in 1 month" 
                                            aria-label="Search"
                                            value={this.state.flightlongvalue}
                                            onChange={this.onchangeflightlong}
                                        ></input>
                                    </form>
                                    
                                </div>:null

                                }
                                
                                {
                                this.state.showflightmediumform?
                                <div className="car-form">
                                    <form className="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2">
                                        <input className="search-input" 
                                            type="text" 
                                            placeholder="Enter your Distance Travelled by car in 1 month" 
                                            aria-label="Search"
                                            value={this.state.flightmediumvalue}
                                            onChange={this.onchangeflightmedium}
                                        ></input>
                                    </form>
                                    
                                </div>:null

                                }
                                {
                                this.state.showflightshortform?
                                <div className="car-form">
                                    <form className="form-inline d-flex justify-content-center md-form form-sm active-cyan-2 mt-2">
                                        <input className="search-input" 
                                            type="text" 
                                            placeholder="Enter your Distance Travelled by car in 1 month" 
                                            aria-label="Search"
                                            value={this.state.flightshortvalue}
                                            onChange={this.onchangeflightshort}
                                        ></input>
                                    </form>
                                    
                                </div>:null

                                }

                            </div>
                            :null
                            }
                        </div>
                    </div>
                 
                   
                    <div className="calc-submit">
                        <div className="carbon-button bt btn-success" onClick={this.oncliksubmit}>Submit</div>
                    </div>

                </div>:null}

                {
                this.state.showresult?
            <div className="result">

                <div className="chart">
                <div className="rectangle waste-bar" style={{height:foodinpx}}> </div> 
                <div className="rectangle home" style={{height:homeinpx}}> </div>
                <div className="rectangle travel" style={{height:travelinpx}}> </div>
                </div>

                <div className="descreption">
                    <div className="travel-des desc">
                        <div className="travel-box"></div>
                    <div className="desc-name">Travel</div>
                    </div>
                   
                    <div className="home-des desc">
                    <div className="home-box"></div>
                    <div className="desc-name">Home</div>
                    </div>
                    <div className="waste-des desc">
                    <div className="waste-box"></div>
                    <div className="desc-name">Waste</div>
                    </div>
                </div>

                <div className="desc-heading">Percetage of co2 emission by various sectors</div>

                <div className="result-emission-details">
                <div className="result-co2"> <div className="details-result rs"> Total CO2 Emission is </div> <div className="result-value rs">{ totalco2ems} kg</div></div>
                <div className="result-ch4"><div className="details-result rs"> Total CH4 Emission is </div><div className="result-value rs"> {totalch4ems}e kg</div></div>
                <div className="result-n2o"><div className="details-result rs"> Total NO2 Emission is</div> <div className="result-value rs">{totaln2oems}e kg</div></div>
               
                </div>

                <div className="result-total"><div className="total-des rst">Total CO2 Emission</div> <div className="total-value rst">{totalems} kg</div></div>
                
                
            </div>
            :null
            }
            </div>
        )
    }
}
