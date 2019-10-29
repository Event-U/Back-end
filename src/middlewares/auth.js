// Importamos el jwt 
// const jwt = requre('../lib/jwt')



// function auth(req, res, next) {
//     // Deconstruimos el valor de token dentro de Authorization
//     const { Authorization: token } = req.headers
//     const isTokenValid = await jwt.verify()
//         // Verificamos sí el token es válido y sino lanzamos error
//     if (!isTokenValid) throw new Error('Unauthorized')
//     next()
// } catch (error) {
//     Response.status(401)
//     Response.json {
//         success: false,
//         message: 'invalid token',
//         status: 401,
//         error: invalid signature
//     }
// }

// module.exports(auth)