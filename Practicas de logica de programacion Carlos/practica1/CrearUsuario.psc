Algoritmo CrearUsuario
	
	Definir nombreCompleto, correo, contrase�a como cadenas
	Definir arrobaValidator , inicial , error Como Entero
	
	error <- 0
	
	Escribir "Por favor ingrese su nombre completo:"
	Leer nombreCompleto
	
	Si Longitud(nombreCompleto) < 3 Entonces
		Escribir 'El nombre debe tener al menos 3 caracteres '
		error <- 1
	FinSi
	
	Escribir "Por favor ingrese su correo"
	Leer correo 
	
	Para inicial <- 1 Hasta Longitud(correo) Hacer

		si Subcadena(correo , inicial , inicial) = '@' Entonces
			arrobaValidator <- 1
		FinSi
	FinPara
	
	si arrobaValidator = 0 Entonces
		Escribir 'Por favor ingrese un correo valido' 
		error <- 1
	FinSi
	
	
	Escribir "Porfavor ingrese su contrase�a"
	Leer contrase�a
	
	Si Longitud(contrase�a) < 8 Entonces
		Escribir "La contrase�a debe ser mayor a 8 caracteres"
		error <- 1
	Fin Si
	
	si error > 0 Entonces
		Escribir 'Debe cumplir con todos los requerimientos para poder registrarse'
		
	SiNo
			Escribir "Usuario creado exitosamente"
			Escribir "los datos del usuario son:"
			Escribir nombreCompleto
			Escribir correo
			Escribir contrase�a
		FinSi
		
	
	
FinAlgoritmo
