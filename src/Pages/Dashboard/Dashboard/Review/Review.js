import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../../../../hooks/useFirebase';
import './Review.css';

const Review = () => {
    const { register, handleSubmit } = useForm();
    const {user} = useFirebase();

    const onSubmit = (data) => {
        data.img = user.photoURL;
        fetch("https://beauty-products-server-production.up.railway.app/addSReview", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if(result.insertedId) {
              alert('Successfully Added Reviews')
            }
          });
    
        console.log(data);
      };
    return (
        <div>
      <div className="mt-5">
        {/* <h1 className="mt-5 text-center text-danger reviewss">Please Give us honest Reviews</h1> */}
        <div className=" w-25 m-auto mt-5">
          <div className=" ">
            <div className="review-section">
              <form className="from-two" onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  placeholder="Name"
                  className="p-2 m-2 name-one input-field"
                />

                <input
                  {...register("email")}
                  readOnly
                  defaultValue={user?.email}
                  placeholder="email"
                  className="p-2 m-2 name-one  input-field"
                />

               <textarea
                {...register("Comments", { required: true })}
                placeholder="Comments"
                className="p-2 m-2  input-field textarea-two"
              
                />
                 
                 
              <input
                  {...register("rating", { required: true })}
                  min="1" max="5"
                  placeholder="Rating"
                  type="number"
                  className=" input-field name-one names-three"
                />

                <input
                  type="submit"
                  value="Review Us"
                  className=" btn-three name-one "
                />
               
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Review;