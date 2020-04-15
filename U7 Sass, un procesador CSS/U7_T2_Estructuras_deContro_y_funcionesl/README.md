# U7_T2_1920_Estructuras_de_Control_y_Funciones

Continuando con vuestra página del CV debéis hacer lo siguiente:

* Añadir a la página una sección nueva que se llame "Módulos de 1º DAW" . En esa sección deberéis incluir una tabla con dos columnas (nombre del módulo y horas semanales). Utilizando una estructura repetitiva Sass en archivo .scss dotad de color de fondo distinto a cada una de las filas de la tabla. Los colores deben estar recogidos en una lista Sass.

Un ejemplo de posible resultado de la sección

![GitHub Logo](./ejemplo.PNG)

* Utilizando una estructura repetitiva Sass (diferente a la anterior) en el archivo .scss generar automáticamente unos nuevos estilos para las etiquetas h1-h6 estableciendo unos tamaños de letras diferentes a los tamaños que establecen los navegadores por defecto. Tu página deberá contener alguna ocurrencia de dichas etiquetas.
* Crear una función calcularAnchura() en tu arhivo .scss (con los parámetros que estimes oportunos) y usadla para indicar las anchuras de los elementos principales en los distintos breakpoints.
* Utilizando estructuras condicionales en el fichero .scss generar dos versiones de la página (tema-claro y tema-oscuro) que cambie los colores generales de la página atendiendo al valor de una variable. Deberéis crear un documento que explique el proceso para que el profesor pueda generar automáticamente las dos versiones. Entregad en carpetas separadas (claro y oscuro)  las dos versiones ya generadas



### Explicación:


##### Información cambio de Temas:

* Claro: 
En el scss le asignamos a la variable color-oscuro = false. 
Al ser esa variable false, en el if les asignara a los fondos colores claros y a las letras y líneas colores oscuros. 

* Oscuro: 
En le asignamos a la variable color-oscuro = true. 
Al ser esa variable true, en el if les asignara a los fondos colores oscuros y a las letras y líneas colores claros.


* Una vez compilado el css hay que cambiarle en el html la dirección de la hoja de estilos. 