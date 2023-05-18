import { FunctionComponent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface MyFormProps {
    
}

type PersonInputs = {
    name: string,
    age: string
}
 
const MyForm: FunctionComponent<MyFormProps> = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<PersonInputs>();

    const onSubmit: SubmitHandler<PersonInputs> = data => console.log(data)

    console.log(watch("name"))

    return (  
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-2">
                <label htmlFor="name" className="me-2">Name</label>
                <input type="text" id="name" {...register("name")}></input>
            </div>

            <div className="my-2">
                <label htmlFor="age" className="me-2">Age</label>
                <input type="number" id="age" {...register("age")}></input>
            </div>

            <button>Submit</button>
        </form>
    );
}
 
export default MyForm;