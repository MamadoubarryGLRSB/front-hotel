'use server';

interface RegisterData {
  username: string;
  password: string;
  email: string;
  role: string;
  passwordConfirm: string;
}

export async function register(data: RegisterData) {
  try {
    const response = await fetch(`${process.env.REACT_BASE_API_URL_PRISMA}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      } as HeadersInit,
      body: JSON.stringify(data)
    });

    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
}
