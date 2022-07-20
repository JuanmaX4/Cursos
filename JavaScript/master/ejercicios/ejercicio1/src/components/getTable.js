import React, { useState, useEffect } from 'react';
import dbdata from '../db.json';
import '../index.css';
 
function TableData() {
    const [data, setData] = useState()
    const URL = 'https://bitbucket.org/axtro/react_test/src/master/db.json';
 
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
    

     const getData= ()=>{
        fetch(URL
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
         getData();
    }, []);

   console.log(data)    

    /*useEffect(() => {
        setData(fetchData())
    }, [fetchData]) */

    return (
        <>
            <tbody>
                <tr>
                    <th>Nivel</th>
                    <th>Constancia</th>
                    <th>Puntos</th>
                {data && data.length > 0 && data.map((p) => {
                  <tr>

                        <td>{p.profile.name}</td>
                        <td>{p.profile.perseverance}</td>
                        <td>{p.profile.mind_points}</td>
                    </tr>
                })}
                </tr>
            </tbody>

        
 
        </>
    );
}
 
export default TableData;