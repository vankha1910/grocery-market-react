const API_HOST = import.meta.env.VITE_API_HOST

export async function signUpApi(email: string, password: string, confirmPassword: string) {
  const API_URL = `${API_HOST}/api/v1/users/signup`
  console.log(API_URL)
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, passwordConfirm: confirmPassword })
  })

  return response
}

export async function signInApi(email: string, password: string) {
  const API_URL = `${API_HOST}/api/v1/users/login`
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  console.log(response)
  return response
}
