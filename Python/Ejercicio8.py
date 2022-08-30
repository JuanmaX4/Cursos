import math

radio_cono=float (input("Ingrese el radio del cono:"))
altura_cono=float (input("Ingrese la altura del cono:"))
generatriz_cono=float (input("Ingrese la generatriz del cono:"))

area_base = math.pi * radio_cono**2
area_lateral = math.pi * radio_cono * generatriz_cono
area_total = area_base + area_lateral
volumen = (area_base * altura_cono)/3

print("")
print("El area base es:", area_base)
print ("El area lateral es", area_lateral)
print ("El area total es", area_total)
print ("El volumen es", volumen)
