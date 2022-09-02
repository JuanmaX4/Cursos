# 1. Crear una Clase Producto con los siguientes atributos:
#	- codigo
#	- nombre
#	- precio 
# Creale, su constructor, getter y setter y una funcion llamada calcular_total, donde le pasaremos unas unidades y nos debe calcular el precio final.

class Producto:

    def __init__(self, codigo, nombre, precio):
        self.__codigo = codigo
        self.__nombre = nombre
        self.__precio = precio

    @property
    def codigo(self):
        return self.__codigo
    
    @codigo.setter
    def codigo(self, valor):
        self.__codigo = valor
    
    @property
    def nombre(self):
        return self.__nombre
    
    @nombre.setter
    def nombre(self, valor):
        self.__nombre = valor
    
    @property
    def precio(self):
        return self.__precio
    
    @precio.setter
    def precio(self, valor):
        self.__precio = valor
    

    def __str__(self):
        return 'Codigo: ' + str(self.__codigo) + ', nombre: ' + self.__nombre + ', precio: ' + str(self.__precio)

p1 = Producto(1, "Producto 1", 5)
p2 = Producto(2, "Producto 2", 10)
p3 = Producto(3, "Producto 3", 20)

print(p1)
print(p2)
print(p3)

