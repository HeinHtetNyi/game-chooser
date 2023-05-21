import { FunctionComponent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { categories } from "./constants";
import Joi from "joi";
import { joiResolver } from '@hookform/resolvers/joi';
import { Expense } from "../types/ExpenseTypes";

interface ExpenseFormProps {
    onSubmit: (expense: Expense) => void,
}

interface ExpenseInputs {
    description: string,
    amount: number,
    category: string,
}

const schema = Joi.object({
    description: Joi.string().required().min(3).max(50),
    amount: Joi.number().required().min(0.01).max(100000),
    category: Joi.string().required(),
})
 
const ExpenseForm: FunctionComponent<ExpenseFormProps> = ({
    onSubmit
}) => {
    const { register, handleSubmit, formState: { errors } } = useForm<ExpenseInputs>({
        resolver: joiResolver(schema)
    })
    // const onSubmit: SubmitHandler<ExpenseInputs> = data => console.log(data)

    return (  
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <div className='mb-2'>
                <label htmlFor='description' className='form-label'>Description</label>
                <input {...register("description")} type="text" id="description" className='form-control' placeholder='description' />
                {errors.description && <p className='text-danger'>{errors?.description?.message}</p>}
            </div>

            <div className='mb-2'>
                <label htmlFor='amount' className='form-label'>Amount</label>
                <input {...register("amount")} type="text" id="amount" className='form-control' placeholder='amount' />
                {errors.amount && <p className='text-danger'>{errors?.amount?.message}</p>}
            </div>

            <div className='mb-3'>
                <label htmlFor='category' className="form-label">Categories</label>
                <select {...register("category")} className="form-select" id="category">
                    {
                        categories.map(category => <option key={category.label} value={category.value}>{category.label}</option>)
                    }
                </select>
            </div>

            <div>
                <button className="btn btn-primary">Submit</button>
            </div>
        </form>
    );
}
 
export default ExpenseForm;