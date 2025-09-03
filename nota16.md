Automatizar  Unit tests en GitHubAction

Una de las cosas importantes a la hora de hacer testing es preocuparnos con la Automatización de por si cobra muchismo sentido empezar a hacer Automatización de 
todas estas capas de testing de UNIT TEST integration, End To End, UI TEST, etc.

Normalmente eso es lo que acerla y agiliza a los equipos simplemente, si tenemos equipos en los cuales tenemos un equipo de ingenieria grande o pequeño no importa,
pero todos estan contribuyendo, todas estas pruebas que estamos corriendo manualmente
en nuestro local podemos emepezar automatizarlas desde el lado de nuestros repsositorios, no importa en cual o en donde este hospedado tu repositorio.

Por ejemplo

BITBOKER
GitLab 
Github

Cada uno de ellos tiene un sistema para automatizar este tipo de cosas vamos a emepzar a utlizar GitHubActions con github.

Recuerda ahi ciclos

Ciclo pequeño:

  DEVELOP -> TEST -> DEPLOY 

Se puede hacer más complejos

   DEVELOP -> TEST -> DEPLOY TO STADING -> UI -> SECURITY CHECK -> DEPLOY PRODUCTION.

Todo va de forma automamzaida.

Dev Ops: 

codiar
construir
testiar
lazar
monitoriar.

