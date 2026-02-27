export async function getCourses() {
    try {
        const response = await fetch('https://lion-school-backend.onrender.com/cursos')
        const data = await response.json()

        return data
    } catch (error) {
        console.error('Erro ao carregar os cursos:', error)
        throw error
    }
}

 export async function getStudentsByCourse(id) {
    try {
        const response = await fetch(`https://lion-school-backend.onrender.com/alunos?curso_id=${id}`)
        const data = await response.json()

        return data
    } catch (error) {
        console.error('Erro ao carregar os alunos:', error)
    }
}

export async function getStudentById(id) {
    try {
        const response = await fetch(`https://lion-school-backend.onrender.com/alunos/${id}`)
        const data = await response.json()

        return data
    } catch (error) {
        console.error('Erro ao carregar os alunos:', error)
    }
}

// module.exports = {
//     getCourses,
//     getStudentsByCourse,
//     getStudentById
// }