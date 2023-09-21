import React, { useContext, useEffect, useState } from 'react'
import { withLayout } from '../partials/Layout'
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import productJSON from "../localdb/productJSON.json"
import slide1 from '../assets/asya3.png';
import slide2 from '../assets/asya2.png';
import slide3 from '../assets/asya1.png';
//import { CardList } from '../components/CardList';
import { ProductContext } from '../provider/ProductCompageProvider';
import { ProductCard } from '../components/ProductCard';


const StyledHomePage = styled.div`
  font-size: 30px;
  .select{
    opacity: 0.4 !important;
  }

  
  
`;
const StyledSlide = styled.div`
  background-image: url(${(props) => props.imgUrl});
  background-position: center center;
  background-size: cover;
  display: flex;
  height: 130vh;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;

  

  .text-container {
    background-color: rgba(254, 255, 233, 0.30);
    display: flex;
    justify-content: center;
  }
  p {
    width: 80%; 
    text-align: center;
    
  }

  
`;
const HomePage = () => {
  const { productList } = useContext(ProductContext)
  const [filteredProductList, setFilteredProductList] = useState([])
  const [locationList, setLocationList] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const handleSelectLocation = (event) => {
    setSelectedLocation(event.target.value);


  }
  console.log(productList)
  useEffect(() => {
    const location = productList.map(item => item.location)
    const unique = [...new Set(location)]
    setLocationList(unique)
    if (selectedLocation === "") {
      setFilteredProductList(productList)
    }
    else {
      const location = productList.filter(item => item.location === selectedLocation)
      setFilteredProductList(location)
    }

  }, [selectedLocation])


  return (
    <StyledHomePage>
      <Carousel showStatus={false} showThumbs={false}>
        <StyledSlide imgUrl={slide1}>
          <div className="text-container">
            <p>ÖĞRENCİ DAYANIŞMA PLATFORMU</p>
          </div>
        </StyledSlide>
        <StyledSlide imgUrl={slide2}>
          <div className="text-container">
            <p>ÖĞRENCİ DAYANIŞMA PLATFORMU</p>
          </div>
        </StyledSlide>

      </Carousel>

      <select onChange={handleSelectLocation} class="form-select" aria-label="Default select example">
        <option selected>İlçe Seçiniz</option>
        {locationList.map(locationItem => {
          return (
            <option value={locationItem}>{locationItem}</option>
          )
        })}
      </select>

      <div class="row" style={{marginBottom:"20%"}}>
        <div className="divider" />
        {filteredProductList.map(item => {
          return (
            <div class="col-sm">
              <ProductCard cardItem={item} />
            </div>
          )
        })}
      </div>

    </StyledHomePage>
  )
}
export default withLayout(HomePage);