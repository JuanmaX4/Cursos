using System;

namespace Ejercicios{
    
    class EjercicioBucle3{

        static void Main(string[] args){

            /*bool a = 10 % 3 == 0;
            System.Console.WriteLine(a);*/

            int num = 0;

            while(num <= 500){
                if (num%3 == 0){
                    System.Console.WriteLine(num);
                }
                num++;
            }
            Console.ReadKey();
        }
    };
}