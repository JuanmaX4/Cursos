import React, { useState, useEffect } from 'react';
import clases from '../db.json';
import '../index.css';
 
function UltimasClases() {
    const [setData] = useState()
    const URL = '../db.json';
 
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
    

     const getData= async ()=>{
        fetch(URL
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
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
         getData(clases);
         console.log(clases.training_classes);
    }, []);  // eslint-disable-line react-hooks/exhaustive-deps

   //console.log(clases.training_classes)    
    /*useEffect(() => {
        setData(fetchData())
    }, [fetchData]) */

    return (
        <>
            <tbody>
                <tr>
                  <h1>Ultimas Clases</h1>
                    <img id='logoUltimas' src={require('../logo.png')} height='90' alt='logoUltimasClases'/>    
                    {clases.length && clases.training_classes.map((clases) => { 
                      
                      if(clases.id === '1')
                        <tr>
                            <td>{clases.category_id}</td>
                        </tr>
                      console.log(clases.category_id[0]);
                })}
                </tr>
            </tbody>

        
 
        </>
    );
}

/*function UltimasClases() {
  return (
    <>
      <div className="row text-center p-5">
        <div className="col-3 mr-1">
         <h1>Ultimas Clases</h1>
            <img id='logoUltimas' src={ require('../logo.png')} height='90' alt='logoPerfil'/>     
            <div className="col-6 mr-1">
                <h1>{clases.training_classes}</h1>
            </div>
        </div>

        <div className="col-3 mr-1">

        </div>
      </div>
    </>
  );
}*/

export default UltimasClases;