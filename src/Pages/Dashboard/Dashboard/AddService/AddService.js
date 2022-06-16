import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../../../../hooks/useFirebase';
import './AddService.css';
const AddService = () => {
    const { user} = useFirebase();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        fetch("http://localhost:5000/dashboard/addService", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
        console.log(data);
      };
    
    return (
        <div>
      <div>
        {/* <h1 className="mt-5 text-center text-danger">Please Add Services</h1> */}
        <div className=" w-25 m-auto mt-5">
          <div className=" ">
            <div className="addServices">
              <form className="from-five" onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  placeholder="Name"
                  className="p-2 m-2  input-field input-one"
                />

                <input
                  {...register("description")}
                  placeholder="Description"
                  className="p-5 m-2 input-field input-one"
                />

                <input
                  {...register("image", { required: true })}
                  placeholder="Image Link"
                  className="p-2 m-2  input-field input-one"
                />

                <input
                  {...register("price", { required: true })}
                  placeholder="Price"
                  type="number"
                  className="p-2 m-2 input-field input-one"
                />

                <select {...register("model")} className="p-2 m-2 input-one">
                  <option value="premium">premium</option>
                  <option value="classic">classic</option>
                  <option value="business">business</option>
                </select>
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Add"
                  className="btn btn-info input-one"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AddService;