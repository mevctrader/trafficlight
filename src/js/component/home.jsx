import React, { useState } from "react";


//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("");

	return (
		<div className="container text-center">
			<div className="traffic-light">
				<div onClick={() => setSelectedColor("red")} className={"semaforo red "+(selectedColor==="red" ? "seleccionado" : "")}></div>
				<div onClick={() => setSelectedColor("yellow")} className={"semaforo yellow "+(selectedColor==="yellow" ? "seleccionado" : "")}></div>
				<div onClick={() => setSelectedColor("green")} className={"semaforo green "+(selectedColor==="green" ? "seleccionado" : "")}></div>
			</div>
		</div>
	);
};

export default Home;