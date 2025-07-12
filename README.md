# Prueba Tecnica Angular To do List

Aplicacion en angular la cual haga un to do list

## Funcionaldiades 
- Agregar una nueva tarea
- eliminar una tarea
- eliminar todas las tareas
## Validadores
- No se puede agregar una tarea vacia
- No se puede agregar una tarea de mas de 100 caracteres 
- No se puede agregar una tarea repetida

## Indicaciones 
se inicia con "npm install" y se ejecuta con "ng serve"
esta guaradndo todo en memoria en un signal y esto hace la vista en tempo real

## Carpetas del proyecto 
- todas estas carpetas se encuentran en src/app
- el proyecto esta divido en componentes 
  - componente TAREAS (para el estilo de la lista de cada tarea)
  - un service en donde hacemos el almacenamiento en el signal y definimos la varibale tareas, y aqui se hace la logica para determinar los 'validadores', tambien se hace la logica para eliminar las tareas y limpiar todas las tareas 
  - app component donde despues de la valiacion del service se emite los menajes de error o se añade las tareas a la interfaz html
  - app component html (donde esta toda la card para el input y y el boton, aunque por buenas practicas se recomienda hacer componetes aparte, por facilidad se lo hizo en un solo componetes html )


