import React from 'react';
import './Home.css';


const Home  = () =>{

  return (
    <div className="Home ml-4 mr-4 mb-1 mt-1">
        <div className="centered">
		<svg width="300px" height="94px" viewBox="0 0 300 94" version="1.1" xmlns="http://www.w3.org/2000/svg"
			 preserveAspectRatio="xMinYMin meet">
			<clipPath id="logoPath">
				<circle id="O-1" cx="93" cy="47" r="47"></circle>
				<circle id="O-2" cx="253" cy="47" r="47"></circle>
				<path d="M5.85352353e-15,93 L45,93 L45,83.3467344 L8.95275853,1 L5.85352353e-15,1.00000004 L5.85352353e-15,93 Z"
					  id="L"></path>
				<path d="M146,93 L201,93 L201,64.0857143 L187.904762,43.0571429 C187.904762,43.0571429 190.492121,37.8636081 191.7858,35.2668407 C193.111168,32.6064652 195.761905,27.2857143 195.761905,27.2857143 L195.761905,1 L146,1 L146,93 Z"
					  id="B"></path>
			</clipPath>
			<image id="svg-image" clipPath="url(#logoPath)" width="1337px" height="94px" href="http://kollectiv.org/files/strip.jpg"/>
		</svg>
		<h1>Welcome</h1>
        <h3><strong><i>Images, Chat Rooms and More..</i></strong></h3>
        
</div>
    </div>
  )
}

export default Home;

