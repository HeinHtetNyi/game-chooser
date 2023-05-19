import * as React from 'react';
import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';

interface ItemsProps {
    
}

interface ItemInputs {
    name: string,
    price: number,
    category: string,
}

const schema = Joi.object({
    name: Joi.string().required().min(3),
    price: Joi.number().required().min(0),
    category: Joi.string().required()
})
 
const Items: React.FunctionComponent<ItemsProps> = () => {
    const [itemList, setItemList] = useState<ItemInputs[]>([])
    
    const { register, handleSubmit, formState: { errors } } = useForm<ItemInputs>({
        resolver: joiResolver(schema)
    });
    const onSubmit: SubmitHandler<ItemInputs> = data => {
        setItemList([...itemList, data])
        console.log(data)
    }

    return (  
        <div className='w-50 my-4 mx-auto'>
            <form className='mb-4' onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-2'>
                    <label htmlFor='name' className='form-label'>Name</label>
                    <input type="text" id="name" className='form-control' placeholder='name' {...register("name")} />
                    {errors.name && <p className='text-danger'>{errors?.name?.message}</p>}
                </div>

                <div className='mb-2'>
                    <label htmlFor='price' className='form-label'>Price</label>
                    <input type="text" id="price" className='form-control' placeholder='price' {...register("price")} />
                    {errors.price && <p className='text-danger'>{errors?.price?.message}</p>}
                </div>

                <div className='mb-3'>
                    <label htmlFor='category' className="form-label">Categories</label>
                    <select className="form-select" id="category" {...register("category")}>
                        <option value="One">One</option>
                        <option value="Two">Two</option>
                        <option value="Three">Three</option>
                    </select>
                </div>

                <div>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                    {
                        itemList && itemList.map((item: ItemInputs, index: number) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.category}</td>
                                </tr>
                            )
                        })
                    }
                </thead>
            </table>
        </div>
    );
}
 
export default Items;