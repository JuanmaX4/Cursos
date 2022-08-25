Module Module1

    Sub Main()
        Console.WriteLine("Hola mundo")


        Dim cuenta_1 As New Cuenta("DDR")
        Dim cuenta_2 As New Cuenta("illo", 300)


        cuenta_1.ingresar(100)
        cuenta_2.ingresar(400)

        cuenta_1.retirar(1000)
        cuenta_2.retirar(200)

        Console.writeLine(cuenta_1.ToString())
        Console.writeLine(cuenta_2.ToString())
        
        Console.ReadLine()


    End Sub
End Module