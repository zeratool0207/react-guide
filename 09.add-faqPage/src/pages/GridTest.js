import React, { useEffect, useState } from 'react';
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

const GridTest = () => {

    const [ products, setProducts ] = useState([]);

    useEffect( () => {
        setProducts( data );
    },[]);

    const data = [
        {"num": "1","reason": "카테고리 항목 오류, 원산지 정보 오류","cate": "-", "goodsNum":"-", "name":"[나이키]호리호리 베니지 골지니트", "price":"33000", "stock":"-", "option":"Y"},
        {"num": "2","reason": "카테고리 항목 오류, 원산지 정보 오류","cate": "-", "goodsNum":"-", "name":"[나이키]호리호리 베니지 골지니트", "price":"220000", "stock":"-", "option":"Y"},
        {"num": "3","reason": "카테고리 항목 오류, 원산지 정보 오류","cate": "-", "goodsNum":"-", "name":"[나이키]호리호리 베니지 골지니트", "price":"110", "stock":"-", "option":"N"},
        {"num": "4","reason": "카테고리 항목 오류, 원산지 정보 오류","cate": "-", "goodsNum":"-", "name":"[나이키]호리호리 베니지 골지니트", "price":"1515000", "stock":"-", "option":"Y"},
        {"num": "5","reason": "카테고리 항목 오류, 원산지 정보 오류","cate": "-", "goodsNum":"-", "name":"[나이키]호리호리 베니지 골지니트", "price":"30", "stock":"-", "option":"N"},
    ]

    return (
        <>
             <DataTable value={products} 
                className="p-datatable-sm" showGridlines
                scrollable scrollHeight="980px">   
                <Column field="num" header="No." style={{width:'44px'}}></Column>                     
                <Column field="reason" header="실패사유" className="td_left_pdl"></Column>
                <Column field="cate" header="카테고리" style={{width:'120px'}}></Column>
                <Column field="goodsNum" header="상품번호" style={{width:'120px'}}></Column>
                <Column field="name" header="상품명" className="td_left_pdl"></Column>
                <Column field="price" header="판매가"  style={{width:'120px'}} className="td_right"></Column>
                <Column field="stock" header="재고수량" style={{width:'120px'}} className="td_right"></Column>
                <Column field="option" header="옵션"  style={{width:'90px'}}></Column>        
            </DataTable>
        </>
    )
}

export default GridTest;