import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"

const ImageSlider = ({images}) => {

const settings = {
	infinite: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	lazyLoad: true,
	autoplay: true,
autoplaySpeed: 2000,

};
return (
	<>
	<div className="tag">
		<h1>
			TREE TALKERS
		</h1>
	</div>
	
	<p>
	
	Taking advantage of novel IoT technologies, 
	a new multifunctional device, the <strong>“TreeTalker”</strong>,
	 was developed to monitor real-time ecophysical 
	 and biological parameters of individual trees, 
	 as well as climatic variables related to their 
	 surrounding environment, principally, air temperature
	  and air relative humidity. </p>
	  
	  <p> Here, IoT applied to plant ecophysiology
	   and hydrology aims to unravel the vulnerability of trees to climatic 
	   stress via a single tree assessment at costs that enable massive deployment.

	</p>
	<div className="imgslider">
  <Slider {...settings}>
		{images.map((item) => (
			<div key={item.id}>
			<img src={item.src} alt={item.alt} />
			</div>
		))}
		</Slider>
	</div>
  
		</>
    
)
}
export default ImageSlider;
