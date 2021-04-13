import React, { useEffect, useState } from 'react'
import './productAdmin.css'
import {useSelector, useDispatch} from 'react-redux'
import ProductModal from '../Modal/ProductModal';
import { getProducts } from '../../../actions/products';
function ProductAdmin() {
    const [openModalProduct, setOpenModalProduct] = useState({
        status: false,
        type: ""
    });
    const products = useSelector(state => state.productsReducer);
    const dispatch = useDispatch();
    useEffect(async () => {
        dispatch(getProducts());
        // const response = await axios.get("http://localhost:3333/api/products/");
        // console.log(response.data);
    }, []);
    console.log(products);
    return (
        <>
            <div className="product-admin">
                <button className="btn btn__admin1" onClick={() => setOpenModalProduct({status: true, type: "ADD"})}>Create</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Img</th>
                            <th>Product Name</th>
                            <th>Import price</th>
                            <th>Price</th>
                            <th>Weight</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((item, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td className="imgCell">
                                    <img src={`http://localhost:3333/${item.imgUrl[0]}`} alt=""/>
                                </td>
                                <td>{item.productName}</td>
                                <td>{parseInt(item.importPrice).toLocaleString(undefined, {minimumFractionDigits:2})}</td>
                                <td>{parseInt(item.price).toLocaleString(undefined, {minimumFractionDigits:2})}</td>
                                <td>{item.weight}</td>
                                <td><button className="btn btn__admin1"  onClick={() => setOpenModalProduct({status: true, type: "EDIT"})}>Edit</button><button className="btn btn__admin2">Delete</button></td>
                            </tr>
                            ))
                        }
                        
                        
                    </tbody>
                </table>
            </div>

            <div className="flex">
                <div className="box-color" style={{width: "100%", height: "300px"}}></div>
                <div className="box-color" style={{width: "100%", height: "300px"}}></div>
                <div className="box-color" style={{width: "100%", height: "300px"}}></div>
            </div>
            <ProductModal 
                isOpen={openModalProduct.status}
                closeModal={setOpenModalProduct}
                type={openModalProduct.type}
            />
        </>
    )
}

export default ProductAdmin
