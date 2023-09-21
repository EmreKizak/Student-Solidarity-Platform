import React, { useContext, useState } from 'react'
import { Header } from '../partials/Header'
import styled from 'styled-components';
import ImageUploading from 'react-images-uploading';
import { ProductContext } from '../provider/ProductCompageProvider';
import { useHistory } from 'react-router';

const StyledProfil = styled.div`

.container{
    
    width: 50%;
    margin-left: 25% !important;
    margin-right: 25% !important;
}
`;

export const ProfilPage = () => {
    const history = useHistory();
    const [userInfo,setUserInfo]=useState();
    const [selectedImage, setSelectedImage] = useState(null);
    const {productList,setProductList} = useContext(ProductContext)
    const setHandleProductList=()=>{
        setProductList([...productList,userInfo]);
        setUserInfo({email:"",location:"",description:"",image:""});
        console.log(userInfo)
        history.push("/");
    }


    return (
        <div>
            <Header />
            <p></p>
            <p></p>
            <div class="container">
                <form>
                    <div class="mb-3">
                        <label class="form-label">Email Address</label>
                        <input name="email" type="email" class="form-control" id="email" value={userInfo?.email} onChange={(event) => setUserInfo({...userInfo, email: event.target.value})}/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Aciklama</label>
                        <textarea name='description' type="email" class="form-control" id="description" value={userInfo?.description} onChange={(event) => setUserInfo({...userInfo, description: event.target.value})} />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Konum</label>
                        <input name='location' type="text" class="form-control" id="location" value={userInfo?.location} onChange={(event) => setUserInfo({...userInfo, location: event.target.value})} />
                    </div>
                    <div class="mb-3">
                        <input name='image' class="form-control" type="file" id="image" onChange={(event) => {
                            console.log(event.target.files[0]);
                            setUserInfo({...userInfo, image: event.target.files[0]})
                        }}></input>

                    </div>
                    <button onClick={setHandleProductList} type="button" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    )
}
