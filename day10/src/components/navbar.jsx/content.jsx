import React from 'react'
import Products_data from '../data'
import Prop_product from '../Prop_product'


export class Content extends React.Component {
    render() {
        // console.log(Products_data)
        const Products_array = Products_data.products
        return (
            <>
                <div>this is the content div
                {Products_array.map((Product, index) => {
                    return (
                        <div key={index}>
                            <Prop_product Single_Pro = {Product}></Prop_product>
                        </div>
                    )

                })}
                </div>
            </>
        )
    }
}


