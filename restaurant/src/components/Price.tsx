'use client'
import { useEffect, useState } from "react";

type Props = {
    price: number;
    id: number,
    option?: { title: string, additionalPrice: number }[]
};

const Price = ({ price, id, option }: Props) => {
    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [select, setSelect] =useState(0);

    useEffect(()=>{
        setTotal(
            quantity *(option ? price + option[select].additionalPrice : price)
        );
    },[quantity, select, option, select])
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
            <div className="flex gap-4">
                {
                    option?.map((options, index) => (
                        <button key={options.title} className="min-w-[6rem] p-2 ring-1 ring-red-oscu rounded-md" 
                        style={{background: select===index? 'rgb(157 2 8)' : 'white', color:select === index ? 'white' : '#9d0208'}}
                        onClick={()=> setSelect(index)}>{options.title}</button>
                    ))}
            </div>

            <div className="flex justify-between items-center ">
                <div className="flex justify-between w-full p-3 ring-1 ring-red-oscu" >
                    <span>Quantity</span>
                    <div className="flex gap-4 items-center">
                        <button onClick={()=>setQuantity((prev)=>(prev > 1 ? prev-1:1))} >{'<'}</button>
                        <span>{quantity}</span>
                        <button onClick={()=>setQuantity((prev)=>(prev < 9 ? prev+1:9))}>{'>'}</button>
                    </div>
                </div>

                {/* Button cart */}
                <button className="uppercase w-56 bg-red-oscu text-white p-3 ring-1 ring-red-oscu items-center">
                    Add
                </button>

            </div>


        </div>

    )

}

export default Price;