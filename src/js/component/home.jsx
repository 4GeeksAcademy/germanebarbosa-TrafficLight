import React, { useState }  from "react";
//create your first component
const Home = () => {
	
	const [redLight, setRedLight] = useState('')
	const [yellowLight, setYellowLight] = useState('')
	const [greenLight, setGreenLight] = useState('')
	const [purpleLight, setPurpleLight] = useState('')
	const [mostrarComponente, setMostrarComponente] = useState(false);


	function red (){
		console.log('Se ejecuto red')
		if (redLight == ''){
			setRedLight('brillo')
		} else{ setRedLight('')
		}
	 	setYellowLight('')
		setGreenLight('')
		setPurpleLight('')
	}

	function yellow (){
		console.log('Se ejecuto yellow')
		if (yellowLight == ''){
			setYellowLight('brillo')
		} else setYellowLight('')
	 	setRedLight('')
		setGreenLight('')
		setPurpleLight('')
	}

	function green (){
		console.log('Se ejecuto green')
		if (greenLight == ''){
			setGreenLight('brillo')
		} else setGreenLight('')
	 	setRedLight('')
		setYellowLight('')
		setPurpleLight('')
	}

	function purple (){
		console.log('Se ejecuto purple')
		if (purpleLight == ''){
			setPurpleLight('brillo')
		} else setPurpleLight('')
	 	setRedLight('')
		setYellowLight('')
		setGreenLight('')
	}

	function apagarLuces(){
		setRedLight('')
		setYellowLight('')
		setGreenLight('')
		setPurpleLight('')
	}

	function cambioLuces(){
		if(redLight=='brillo' || yellowLight=='brillo' || greenLight =='brillo' || purpleLight == 'brillo'){
			apagarLuces()} else{
				setTimeout(red,500)
				// console.log(redLight)
				// console.log(yellowLight + ' antes')
				setTimeout(yellow,1000)
				// console.log(yellowLight  + ' despues')
				setTimeout(green,1500)
				setTimeout(purple,2000)
			}
	}

	return (
		<>
		<div className="traffic-top bg-dark"></div>
			<div className="traffic-light bg-dark">
				<div onClick={red} className={"light red " + redLight}></div>
				<div onClick={yellow} className={"light yellow " + yellowLight}></div>
				<div onClick={green} className={"light green " + greenLight}></div>
				<div onClick={purple} className={(mostrarComponente) ? "show-element" && "light purple " + purpleLight : null}></div>
			</div>
			<button type="button" className="btn btn-dark boton" onClick={cambioLuces}>Cambiar luces</button>
			<button type="button" className="btn btn-dark boton" onClick={() => setMostrarComponente(!mostrarComponente)}>{mostrarComponente ? `Ocultar` : `Mostrar`} luz purpura</button>
		</>
	);
};
 
export default Home;
