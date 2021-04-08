import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './productAdmin.css'
import {useSelector, useDispatch} from 'react-redux'
import ProductModal from '../Modal/ProductModal';
function ProductAdmin() {
    const [openModalProduct, setOpenModalProduct] = useState({
        status: false,
        type: ""
    });
    const products = useSelector(state => state.productsReducer);

    useEffect(async () => {
        const response = await axios.get("http://localhost:3333/api/products/");
        // console.log(response.data);
    }, []);
    return (
        <>
            <div className="product-admin">
                <button className="btn btn__admin1" onClick={() => setOpenModalProduct({status: true, type: "ADD"})}>Create</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Product Name</th>
                            <th>Import price</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Whey Rule 1</td>
                            <td>{(1233000).toLocaleString("vi")+ " đ"}</td>
                            <td>{(1500000).toLocaleString("vi")+ " đ"}</td>
                            <td>0</td>
                            <td><button className="btn btn__admin1"  onClick={() => setOpenModalProduct({status: true, type: "EDIT"})}>Edit</button><button className="btn btn__admin2">Delete</button></td>
                        </tr>
                        
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
