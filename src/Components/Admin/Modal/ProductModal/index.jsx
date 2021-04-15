import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { createProduct } from '../../../../actions/products';
import './addProduct.css'
function AddProduct(props) {
    const [category, setCategory] = useState([]);
    const [productOptions, setProductOptions] = useState([
        {
            id: 'size-1',
            quant: undefined,
            flavour: ""
        }
    ]);
    const dispatch = useDispatch();
    const [imgUpload, setImgUpload] = useState([]);
    const [product, setProduct] = useState({
        productName: "",
        description: "",
        importPrice: undefined,
        price: undefined,
        discount: undefined,
        brand: "",
        options: [],
        imgUrl: [],
        categoryId: 0,
        weight: ""
    });
    const removeSize = (id) => {
        const newArr = productOptions.filter((item) => {
            return item.id !== id
        });
        setProductOptions([
            ...newArr
        ]);
    }
    const changeQuant = (id, e) => {
        const result = [...productOptions].map(ele => {
            if (ele.id === id) {
                return {
                    ...ele,
                    quant: e.target.value,
                }
            }
            return ele;
        });
        setProductOptions(result)
    }
    const changeFlavour =(id, e) => {
        const result = [...productOptions].map(ele => {
            if (ele.id === id) {
                return {
                    ...ele,
                    flavour: e.target.value,
                }
            }
            return ele;
        });
        setProductOptions(result)
    }
    const handleChangeUploadImg = (e) => {
        const {files} = e.target;
        const listImg = [...files].map(item => ({
            url: URL.createObjectURL(item),
            file: item
        }));
        setImgUpload(listImg);
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
    const addSize = (e) => {
        if(productOptions.length == 4){
            return;
        }
        if(productOptions.length > 0){
            const newIndex = productOptions[productOptions.length-1].id.split("-")[1];
            setProductOptions([
                ...productOptions, 
                {
                    id: `size-${parseInt(newIndex)+1}`,
                    quant: undefined,
                    flavour: "",
                }
            ]);
        }else{
            setProductOptions([...productOptions, 
                {
                    id: `size-1`,
                    quant: undefined,
                    flavour: "",
                }
            ]);
        }
    }
    useEffect(async () => {
        try {
            const response = await axios.get("https://supplements-soa.herokuapp.com/api/categories");
            setCategory(response.data);
            setProduct({...product, categoryId: category[0]._id});
        } catch (error) {
            
        }
        
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        const imgFiles = [...imgUpload].map(img => img.file);
        const options = [...productOptions].map(item => {
            return JSON.stringify({
                flavour: item.flavour,
                quant: item.quant
            });
        });
        const data = {
            ...product,
            imgUrl: imgFiles,
            options
        };
        console.log(data.options);
        const formData = new FormData();

        Object.keys(data).forEach(item => {
            if(Array.isArray(data[item])){
                data[item].forEach(arrItem => {
                    formData.append(item, arrItem);
                });
            }else{
                formData.append(item, data[item]);
            }
        });
        dispatch(createProduct(formData));
        // props.closeModal(false);
    }
    return (
        props.isOpen===true?
        <>
            <div className="overlay" onClick={() => props.closeModal(false)}></div>
            <div className="add-product box-color">
                <div className="flex">
                    <h1>Add product</h1>
                    
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="left">
                        <label htmlFor="">Product Name</label>
                        <input type="text" value={product.productName} onChange={(e) => setProduct({...product, productName: e.target.value})}/>
                        <label htmlFor="">Description</label>
                        <input type="text" value={product.description} onChange={(e) => setProduct({...product, description: e.target.value})}/>
                        <label htmlFor="">Import price</label>
                        <input type="text"  value={product.importPrice} onChange={(e) => setProduct({...product, importPrice: e.target.value})}/>
                        <label htmlFor="">Price</label>
                        <input type="text"  value={product.price} onChange={(e) => setProduct({...product, price: e.target.value})}/>
                        <label htmlFor="">Discount</label>
                        <input type="text" value={product.discount} onChange={(e) => setProduct({...product, discount: e.target.value})}/>
                        <label htmlFor="">Brand</label>
                        <input type="text" value={product.brand} onChange={(e) => setProduct({...product, brand: e.target.value})}/>
                        <label htmlFor="">Weight</label>
                        <input type="text" value={product.weight} onChange={(e) => setProduct({...product, weight: e.target.value})}/>
                        <label htmlFor="">Size <a className="btn btn__admin1" onClick={addSize}>+</a></label>
                        <div className="size-container">
                            {
                                productOptions.map((ele, index) => {
                                    return (
                                        <div className="size-field" key={index} id={ele.id}>
                                            <input type="text" placeholder="flavour"  value={ele.flavour} onChange={(e) => changeFlavour(ele.id, e)}/>
                                            <input type="text" placeholder="quantity" value={ele.quant} onChange={(e) => changeQuant(ele.id, e)}/>
                                            <a className="btn btn__close" onClick={() => removeSize(ele.id)}>+</a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <label htmlFor="">Category</label>
                        <select onChange={(e) => setProduct({...product, categoryId: e.target.value})}>
                            {
                                category.map((ele, index) => {
                                    return (<option value={ele._id} key={index}>{ele.cateName}</option>)
                                })
                            }
                        </select>
                        
                    </div>
                    <div className="right">
                        <label htmlFor="imgFile" className="btn__addImg">Upload img</label>
                        <input 
                            type="file" 
                            id="imgFile" 
                            onChange={(e) => handleChangeUploadImg(e)} 
                            accept="image/x-png,image/gif,image/jpeg" 
                            hidden
                            multiple/>
                        <div className="img-container">
                            {
                                imgUpload.map((ele, index) => {
                                    return (
                                        <div className="thumb" key={index}>
                                            <a className="btn btn__close" onClick={() => removeImage(ele)}>+</a>
                                            <div className="img-box">
                                                <img src={ele.url} alt=""/>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {
                                props.type==="ADD"?
                                <button className="btn btn__admin1" type="submit">+ Create</button>
                                :<button className="btn btn__admin1" type="submit">Update</button>
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