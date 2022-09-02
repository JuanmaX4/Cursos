using Internal;
using System;

namespace Ejercicios{
    
    class EjercicioBucle4{

        static void Main(string[] args){

            for (int num = 1; num <= 500; num++)
            {
                bool esPrimo = true;

                for (int cont = num -1; cont > 1; cont--)
                {
                    if (num % cont == 0)
                    {
                        esPrimo = false;
                    }
                }
                if (esPrimo)
                {
                System.Console.WriteLine(num);
                }
            }

            Console.ReadKey();
        }
    };
}