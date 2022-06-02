import React, { useEffect } from 'react';
import { useAuth } from '../Hooks/useAuth';

const axios = require('axios');


const Session = (props) => {

    const { user } = useAuth();

    useEffect(()=>{
        if (user){
            const token = user.accessToken;
            
            const axiosBase = axios.create({
                baseURL:'http://localhost:8080/users',
                headers: {'Authorization' : `Bearer ${token}`}
            })

            axiosBase.post('/new-session')
            .then(results=>{
                if (results.status === 200){
                    console.log(results);
                }
                
            })
            .catch(err=>{
                console.log(err);
            })
        }
    },[])

    return <div></div>

}

export default Session;