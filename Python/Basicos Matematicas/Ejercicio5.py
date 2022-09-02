dis=int(input ("Ingrese la distancia recorrida en metros: "))
min=int(input ("Ingrese la cantidad de minutos: "))
seg=int(input ("Ingrese la cantidad de segundos: "))
cen=int(input ("Ingrese la cantidad de centesimas: "))

tse=(min*60)+seg+(cen/100)
vms=dis/tse
vkm=(vms*3600)/1000

vkm2=((dis/((min*60)+seg+(cen/100)))*3600)/1000


print ("La velocidad es de ",vkm," Km/h",vkm2)