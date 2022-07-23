//import React, { useState, useEffect } from 'react';
import usuario from '../db.json';
import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css";

 
function TableData() {
   // const [ setData] = useState()
    //const URL = 'https://bitbucket.org/axtro/react_test/src/master/db.json';
 
    /*const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())
 
            .then((response) => {
                console.log(response);
                setData(response);
            })

            console.log(data)
 
    }*/
    

    /* const getData= ()=>{
        fetch('../db.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           },
            mode: 'no-cors',
        }
        )
          .then(function(response){
           console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
             setData(myJson)
          });
      }
      
    useEffect( () => {
        setData(usuario)
        console.log(usuario.profile)
    }, []);*/


    /*useEffect(() => {
        setData(fetchData())
    }, [fetchData]) */
    
    return (
        <>
            <div className="row d-flex justify-content-center text-center">
                <div className="col-4">
                    <span>{usuario.profile.level}</span>
                    <h3>Nivel</h3>
                </div>
                <div className="col-4">
                    <span>{usuario.profile.perseverance}</span>
                    <h3>Constancia</h3>
                </div>
                <div className="col-4">
                    <span>{usuario.profile.total_points}</span>
                    <h3>Puntos</h3>
                </div>
            </div> 
        </>
    );
}

 
export default TableData;