import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 05e23c603b63c6549e8bb4d1f64dad26360985c386f9a77b390f040a7ffbe3ac'
    }
});





// The goal of this file is to put together code related to the configuration of axios or
// related to getting unsplash to accept our request
/*
we cut and pasted "headers" from App.js
then baseURL was assigned(cut and pasted) to the value of JUST THE BASE URL, not all of it.

finally, we add an 'export default statement in-front/to axios.create()', just like we would do
at the bottom of every app; however, this is a customized client we created.
*/