import React, { useEffect } from 'react';
import useFirebase from '../../../../hooks/useFirebase';

const BookingList = () => {
    const { user} = useFirebase();
    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${user?.email}`)
          .then((res) => res.json())
          .then((data) => console.log(data));
      }, [user?.email]);
    return (
        <div>
         <h1>MyBookings</h1>    
        </div>
    );
};

export default BookingList;