import { FunctionComponent } from "react";
import { categories } from "./constants";

interface ExpenseFilterProps {
    onChangeCategory: (value: string) => void
}
 
const ExpenseFilter: FunctionComponent<ExpenseFilterProps> = ({
    onChangeCategory,
}) => {
    return (  
        <form >
            <div className='mb-3'>
                <label htmlFor='category' className="form-label">Categories</label>
                <select className="form-select" id="category" onChange={(event) => onChangeCategory(event.target.value)}>
                    <option value={"All"}>All</option>
                    {
                        categories.map(category => <option key={category.label} value={category.value}>{category.label}</option>)
                    }
                </select>
            </div>
        </form>
    );
}
 
export default ExpenseFilter;