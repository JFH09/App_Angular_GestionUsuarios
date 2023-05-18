export  interface UsuarioEstudiante {
    nombre: string;
    apellidos: string, 
    identificacion: number,
    edad: number,
    salon: number,
    promedio: number,
    perfil: string,
    notasMaterias: {
      matematicas: number,
      ciencias: number,
      ingles: number,
      fisica: number,
    },
    observaciones: string
}