import { useRef, useEffect, useState } from 'react';
import { Box,Button, ListItemButton } from '@mui/material';

import images from "./images";
import ImageSlider from "./ImageSlider";
import Page from '../components/Page';


function App () {
  const trees= ["tree1  ","tree2  ","tree3  "]
  const [count, setcount ] = useState(1)
  const [data, setdata] = useState(trees)


  const dec = () =>{
    setcount(prevcount => prevcount - 1) 
  }
  
  const enc = () => {
	setcount(prevcount => prevcount + 1)
  
  }
  const add = () => { 
    setcount(count + 1)
    const ch="tree"
    const a= count.toString()
  
	  setdata([...data ,a ])
  
  }


	return (
	<Page title="Home">
	  <div className="App">
	  <ImageSlider images={images}/>
	  </div>

	  <Box sx={{ textAlign: 'relative' }}>
          <span> {data} </span>
          
          <ListItemButton onClick={add}> +</ListItemButton>
          <Button onClick={dec}>
            -
          </Button>
          </Box>
	</Page>
	)
  }
	
  export default App;