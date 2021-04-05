import React, { useState } from 'react'
import './addProduct.css'
function AddProduct(props) {
    const [sizeQuant, setSizeQuant] = useState(['size-1']);
    const [imgUpload, setImgUpload] = useState([]);
    const removeSize = (ele) => {
        let newArr = [...sizeQuant];
        if(sizeQuant.indexOf(ele) > -1){
            newArr.splice(sizeQuant.indexOf(ele) , 1);
            setSizeQuant([
                ...newArr
            ]);
        }
    }
    const uploadImage = (e) => {
        const file = e.target.files[0];
        if(file){
            setImgUpload([
                ...imgUpload,
                URL.createObjectURL(file)
            ])
        }
    }
    const removeImage = (e) => {
        let newArrImg = [...imgUpload];
        if(newArrImg.indexOf(e) > -1){
            newArrImg.splice(newArrImg.indexOf(e) , 1);
            setImgUpload([
                ...newArrImg
            ]);
        }
    }
    const convertBase64 =(file) => {
        // const base64 = await convertBase64(file);
        // console.log(base64);
        // setImgUpload([
        //     ...imgUpload,
        //     base64
        // ])
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }
    const addSize = (e) => {
        if(sizeQuant.length == 6){
            return;
        }
        if(sizeQuant.length > 0){
            const newIndex = sizeQuant[sizeQuant.length-1].split("-")[1];
            setSizeQuant([...sizeQuant, `size-${parseInt(newIndex)+1}`]);
        }else{
            setSizeQuant([...sizeQuant, `size-1`]);
        }
    }
    return (
        props.isOpen==true?
        <>
            <div className="overlay" onClick={() => props.closeModal(false)}></div>
            <div className="add-product box-color">
                <h1>Add product</h1>
                <form action="">
                    <div className="left">
                        <label htmlFor="">Product Name</label>
                        <input type="text"/>
                        <label htmlFor="">Description</label>
                        <input type="text"/>
                        <label htmlFor="">Import price</label>
                        <input type="text"/>
                        <label htmlFor="">Discount</label>
                        <input type="text"/>
                        <label htmlFor="">Brand</label>
                        <input type="text"/>
                        <label htmlFor="">Size <a className="btn btn__admin1" onClick={addSize}>+</a></label>

                        <div className="size-container">
                            {
                                sizeQuant.map((ele, index) => {
                                    return (
                                        <div className="size-field" key={index} id={ele}>
                                            <input type="text" placeholder="size"/>
                                            <input type="text" placeholder="quantity"/>
                                            <a className="btn btn__close" onClick={() => removeSize(ele)}>+</a>
                                        </div>
                                    )
                                    
                                })
                            }
                        </div>
                        
                        <label htmlFor="">Category</label>
                        <select type="text">
                            <option value="1">Whey</option>
                            <option value="2">Pre workout</option>
                            <option value="3">BCAA</option>
                        </select>
                    </div>
                    <div className="right">
                        <label htmlFor="imgFile" className="btn__addImg">Upload img</label>
                        <input type="file" id="imgFile" onChange={(e) => uploadImage(e)} accept="image/x-png,image/gif,image/jpeg" hidden/>
                        <div className="img-container">
                            {
                                imgUpload.map((ele, index) => {
                                    return (
                                        <div className="thumb" key={index}>
                                            <a className="btn btn__close" onClick={() => removeImage(ele)}>+</a>
                                            <div className="img-box">
                                                <img src={ele} alt=""/>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        
                    </div>
                </form>
                
            </div>
        </>
        :""
    )
}
export default AddProduct;