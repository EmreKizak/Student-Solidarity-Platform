import React from 'react'
import styled from 'styled-components'


const StyledCard = styled.div`
.container{
    margin-bottom: 3%;
    width: 250px;
    left: 0;
    height: 100% !important;
}
`;

export const ProductCard = ({cardItem}) => {
    return (
        <StyledCard>
            <div className='container'>
                <div class="card" >
                    <img class="card-img-top" alt="not fount" width={"250px"} src={URL.createObjectURL(cardItem.image)} />
                    <div class="card-body">
                        <h6 class="card-title">{cardItem.location}</h6>
                        <p class="card-text">{cardItem.description}</p>
                        <a href="/profil" class="btn btn-primary">Profile git</a>
                    </div>
                </div>
            </div>
            
        </StyledCard>
    )
}
