using System;

namespace Ejercicios{
    
    class EjercicioBucle2{

        static void Main(string[] args){

            System.Console.WriteLine("Introduce un numero pintara una piramide");
            int num = Convert.ToInt32(System.Console.ReadLine());

            for (int cont = 1; cont < num; cont++)
            {
                for (int asteriscos = 1; asteriscos <= cont; asteriscos++)
                {
                    Console.Write("*");
                }
                Console.WriteLine(Environment.NewLine);
                //Console.Write("\n");
            }

        }
    };
}
