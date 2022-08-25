Module Module3
 
    Sub Main()
 
        Dim num As Integer = 0
 
        Do
            Console.WriteLine("Introduce un número entre 0 y 10")
            num = Console.ReadLine()
        Loop While num >= 10 Or num < 0
 
        Console.WriteLine("El numero introducido con Loop While es  " & num)
 
        Do
            Console.WriteLine("Introduce un número entre 0 y 10")
            num = Console.ReadLine()
        Loop Until num <= 10 Or num > 0
 
        Console.WriteLine("El numero introducido con Loop Until es  " & num)
 
        Console.ReadLine()
 
    End Sub
 
End Module