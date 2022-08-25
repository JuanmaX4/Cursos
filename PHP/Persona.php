<?php

Class Persona{
    private $nombre;
    private $apellidos;
    private $edad;

    //constructor
    function __construct($nombre, $apellidos, $edad){
        $this->nombre = $nombre;
        $this->apellidos = $apellidos;
        $this->edad = $edad;
    }

    //getter

    function __get($propiedad){

        if(property_exists($this, $propiedad)){
            return $this->$propiedad;
        }
    }

    //setter

    function __set($propiedad, $valor){
        if(property_exists($this, $propiedad)){
            this->$propiedad = $valor;
        }
    }


    //funciones simples 
    
    function mayorEdad(){
        return $this->edad > 17;
    }

    function nombreCompleto(){
        return $this->nombre . " " . $this->apellidos;
    }


    $persona = new Persona("David", "Gonzalez Gimenez", 30);

    if($persona->mayorEdad()){
        echo $persona->nombreCompleto(). " es mayor de edad";
    }
    else{
        echo $persona->nombreCompleto(). " no es mayor de edad";
    }

}


?>