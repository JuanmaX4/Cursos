Module Module4

    Private titular As String
    Private cantidad As Double

    Public Sub New(titular As String, cantidad As Double)
        Me.titular = titular
        Me.cantidad = cantidad
    End Sub

    Public Sub New(titular As String)
        Me.titular = titular
        Me.cantidad = 0
    End Sub

    Public Property propTitular() As string
        Get
            Return titular
        End Get
        Set(value As String)
            Me.titular = value
        End Set
    End Property

    Public Property propCantidad() As Double
        Get
            Return cantidad
        End Get
        Set(value As Double)
            Me.cantidad = value
        End Set
    End Property


    Public Overrides Function ToString() As String

        Return "El titular es " & propTitular & " y la cantidad es : " & propCantidad

    End Function

    Public Sub ingresar(cantidad As Double)
        If cantidad > 0 then
            Me.cantidad += cantidad
        End If
    End Sub

    Public Sub retirar(cantidad As Double)
        If Me.cantidad - cantidad < 0 then
            Me.cantidad = 0
        Else
            Me.cantidad -= cantidad
        End If
    End Sub








