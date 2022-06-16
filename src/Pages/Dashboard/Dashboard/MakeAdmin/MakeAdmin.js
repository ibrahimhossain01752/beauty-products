import React from 'react';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/dashboard/makeAdmin", {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if(result.matchedCount){
              alert("Admin Create SuccessFully")
            }else{
              alert("User Not Found")
            }
          });
      };
      
    
    
    return (
        <div>
      <h1 class="make-admin">Make admin</h1>
      <form class="make-from" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="email"
          placeholder="email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="make as Admin"
        />
      </form>
    </div>
    );
};

export default MakeAdmin;