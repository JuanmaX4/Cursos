2. Crea una clase llamada session para manejar sesiones.

Las funciones que se crearan son:
  - setAttribute: Dado un atributo y un valor, lo seteara en la sesión.
  - getAttribute: Dado un atributo, devolvemos el valor de la sesión.
  - deleteAttribute: Dado un atributo, lo borraremos de la sesión.
  - destroySession: destruye la sessión.


<?php

class Session
{

    function __construct()
    {
        if (!isset($_SESSION)) {
            session_start();
        }
    }

    function setAttribute($attribute, $value)
    {
        if (
            session_status() === PHP_SESSION_ACTIVE
            && is_string($attribute)
        ) {
            $_SESSION[$attribute] = $value;
        }
    }


    function getAttribute($attribute)
    {
        if (
            session_status() === PHP_SESSION_ACTIVE
            && is_string($attribute)
            && isset($_SESSION[$attribute])
        ) {
            return $_SESSION[$attribute];
        }

        return null;
    }


    function deleteAttribute($attribute)
    {
        if (
            session_status() === PHP_SESSION_ACTIVE
            && is_string($attribute)
            && isset($_SESSION[$attribute])
        ) {
            unset($_SESSION[$attribute]);
        }
    }


    function destroySession()
    { 
        session_destroy();
    }
}