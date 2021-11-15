/*
Se nos da que por error hacemos un commit indebido o necesitamos regresar al proyecto a una versión anterior por sea cual sea el motivo.

Lo que debemos hacer es lo siguiente

// ubicar el ID del commit al cual queremos regresar
git reset --hard <commit-id>

// indicar que este commit será el nuevo
git reset --soft HEAD@{1}

// subir los cambios
git commit -m "Se revirtieron los cambios"
Y con estos pasos simples podemos regresar nuestro repositorio a una versión especifica.

Esto me ha salvado la vida porque no soy de aprenderme todos los comandos de GIT y me ayudo más de la UI.
*/
let helloWorld = () => "Hello world";