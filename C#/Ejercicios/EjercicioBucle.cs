using Internal;
using System;

namespace Ejercicios{
    
    class EjercicioBucle{

        static void Main(string[] args){

            int num = 0;
            int mayor = int.MinValue;

            do
            {
                System.console.WriteLine("Introduce un numero:");
                num = Convert.ToInt32(Console.ReadLine());
                if (num>mayor)
                {
                    mayor = num;
                }
            } while (num!=0);
            
            System.Console.WriteLine("EL numero mayor de los que has introducido es "+mayor);
            console.ReadKey();
        }
    };
}