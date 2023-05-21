import { FunctionComponent } from "react";

interface Expense {
    id: number,
    description: string,
    amount: number,
    category: string
}

interface ExpenseListProps {
    expenses: Expense[],
    onDelete: (id: number) => void
}
 
const ExpenseList: FunctionComponent<ExpenseListProps> = ({
    expenses,
    onDelete
}) => {

    return (  
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    expenses && expenses.map(expense => {
                        return (
                            <tr>
                                <td>{expense.id}</td>
                                <td>{expense.description}</td>
                                <td>{expense.amount}</td>
                                <td>{expense.category}</td>
                                <td><button className="btn btn-danger" onClick={() => onDelete(expense.id)}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>
                        {expenses ? expenses.reduce((total, expense) => total + expense.amount, 0) : 0}
                    </td>
                </tr>
            </tfoot>
        </table>
    );
}
 
export default ExpenseList;