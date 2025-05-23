import React, { useState } from "react";


function Register(){

    const [name , setName] = useState("Hassan");
    const [email , setEmail] = useState("Hassan@gmail.com");
    const [password , setPassword] = useState("123456");
    const [address , setAddress] = useState("Lahore , Paksitan");
    const [phone , setPhone] = useState("030000000");

    const data = {
        name : name,
        email : email,
        pass: password,
        address: address,
        ph_no:phone
    };

    const result = fetch('http://localhost:3001/user/register',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    });



    return(
        <>
        </>
    );
}

export default Register;