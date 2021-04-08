import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './addProduct.css'
function AddProduct(props) {
    const [category, setCategory] = useState([]);
    const [sizeQuant, setSizeQuant] = useState([
        {
            id: 'size-1',
            opt: "",
            quant: undefined,
        }
    ]);
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
        categoryId: 0

    });
    const removeSize = (id) => {
        console.log(id);
        const newArr = sizeQuant.filter((item) => {
            return item.id != id
        });
        console.log(newArr);
        setSizeQuant([
            ...newArr
        ]);
        // if(sizeQuant.indexOf(ele) > -1){
        //     newArr.splice(sizeQuant.indexOf(ele) , 1);
        //     setSizeQuant([
        //         ...newArr
        //     ]);
        // }
    }

    const changeOpt = (id, e) =>{
        console.log(e.target.value);
        const result = [...sizeQuant].map(ele => {
            if (ele.id === id) {
                return {
                    ...ele,
                    opt: e.target.value,
                }
            }
            return ele;
        });
        setSizeQuant(result)

    }
    const changeQuant = (id, e) => {
        const result = [...sizeQuant].map(ele => {
            if (ele.id === id) {
                return {
                    ...ele,
                    quant: e.target.value,
                }
            }
            return ele;
        });
        setSizeQuant(result)
    }

    // const uploadImage = (e) => {
    //     const file = e.target.files[0];
    //     let data = new FormData();
    //     data.append('')
    //     if(file){
    //         setImgUpload([
    //             ...imgUpload,
    //             URL.createObjectURL(file)
    //         ])
    //     }
    // }
    const [formData, setFormData] = useState('');
    const uploadImage = ({target: {files}}) => {
        // const file = e.target.files[0];
        let data = new FormData();
        data.append('imgUrl', files[0]);
        data.append('name', files[0].name);
        setFormData(data);
        console.log(data);
        // console.log(files);
        // console.log(data);
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
            const newIndex = sizeQuant[sizeQuant.length-1].id.split("-")[1];
            setSizeQuant([
                ...sizeQuant, 
                {
                    id: `size-${parseInt(newIndex)+1}`,
                    opt: "",
                    quant: 0,
                }
            ]);
            // const newIndex = sizeQuant[sizeQuant.length-1].split("-")[1];
            // setSizeQuant([...sizeQuant, `size-${parseInt(newIndex)+1}`]);
        }else{
            setSizeQuant([...sizeQuant, 
                {
                    id: `size-1`,
                    opt: "",
                    quant: 0,
                }
            ]);
        }
    }
    useEffect(async () => {
        try {
            const response = await axios.get("http://localhost:3333/api/categories");
            setCategory(response.data);
            setProduct({...product, categoryId: category[0]._id});
        } catch (error) {
            
        }
        
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3333/api/products", 
            {
                data: formData
            },
            {
                headers: { 
                    'content-type': 'multipart/form-data' 
                }
            });
            console.log(response);
        } catch (error) {
            
        }
    }
    return (
        props.isOpen==true?
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
                        <label htmlFor="">Size <a className="btn btn__admin1" onClick={addSize}>+</a></label>

                        <div className="size-container">
                            {
                                sizeQuant.map((ele, index) => {
                                    return (
                                        <div className="size-field" key={index} id={ele.id}>
                                            <input type="text" placeholder="size" value={ele.opt} onChange={(e) => changeOpt(ele.id, e)}/>
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
                            {
                                props.type=="ADD"?
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