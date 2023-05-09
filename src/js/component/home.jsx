
import React, { useState }  from "react";
//create your first component
const Home = () => {
	
	const [redLight, setRedLight] = useState()
	const [yellowLight, setYellowLight] = useState()
	const [greenLight, setGreenLight] = useState()

	function red (){
		if (redLight === ''){
			setRedLight('brillo')
		} else setRedLight('')
	 	setYellowLight('')
		setGreenLight('')
	}

	function yellow (){
		if (yellowLight === ''){
			setYellowLight('brillo')
		} else setYellowLight('')
	 	setRedLight('')
		setGreenLight('')
	}

	function green (){
		if (greenLight === ''){
			setGreenLight('brillo')
		} else setGreenLight('')
	 	setRedLight('')
		setYellowLight('')
	}

	return (
		<>
		<div className="traffic-top bg-dark"></div>
			<div className="traffic-light bg-dark">
				<div onClick={red} className={"light red " + redLight}></div>
				<div onClick={yellow} className={"light yellow " + yellowLight}></div>
				<div onClick={green} className={"light green " + greenLight}></div>
			</div>
		</>
	);
};
 
export default Home;
