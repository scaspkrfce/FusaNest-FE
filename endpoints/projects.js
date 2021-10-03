export async function getProjects () {
  try {
    const response = await fetch('http://localhost:8080/projects', {
      method: 'GET',
    })
    console.log('response', response)
  } catch (error) {
    console.log('error', error)
  }
}
