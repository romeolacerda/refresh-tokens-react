import { httpClient } from './HttpClient';

interface ISignUpDto {
  name: string
  email: string
  password: string
}

interface ISignInDto {
  email: string
  password: string
}

interface ISignInResponse {
  refreshToken: string
  accessToken: string
}

export class AuthService {
  static async signUp({ name, email, password }: ISignUpDto) {
    const { data } = await httpClient.post('/signup', {
      name,
      email,
      password
    });

    return data;
  }


  static async signIn({email, password}: ISignInDto)  {
    const { data } = await httpClient.post<ISignInResponse>('/signin', {
      email,
      password
    });

    return data;
  }

}
