/*
const  jwt  =  require ( '../lib/jwt' )

 función  asíncrona auth  ( solicitud ,  respuesta ,  siguiente )  {
  prueba  {
    const  {  autorización : token  }  =  solicitud . encabezados

    const  isTokenValid  =  esperar  jwt . verificar ( token )
    if  ( ! isTokenValid )  arroja un  nuevo  error ( 'No autorizado' )
    siguiente ( )
  }  captura  ( error )  {
    respuesta . estado ( 401 )
    respuesta . json ( {
      el éxito : falso ,
      mensaje : 'Token inválido' ,
      de error : error . mensaje
    } )
  }
}

módulo . exportaciones  =  autenticación
*/