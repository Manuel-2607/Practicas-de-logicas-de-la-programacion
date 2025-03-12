Funcion retornarResta<- Resta ( num1, num2)
	
	retornarResta<- num1-num2 	
Fin Funcion

Funcion retornarSuma <- Sumar ( num1, num2 )
	
	retornarSuma<- num1 + num2
	
Fin Funcion


Algoritmo Funciones
	
	Definir numero1 , numero2, opciones como numero 
	
	Escribir "Por favor ingrese el primer número"
	leer numero1
	
	Escribir "Por favor ingrese el segundo número"
	leer numero2
	
	Escribir "Por favor ingrese una opcion"
	Escribir "1- Sumar o 2- Resta"
	Leer opciones
	
	SI opciones = 1  Entonces
		Escribir "Su suma es " Sumar(numero1, numero2)
	FinSi
	
	si opciones = 2 Entonces
		Escribir "Su resta es " Resta(numero1, numero2)
	FinSi
	
	
	
	
FinAlgoritmo


