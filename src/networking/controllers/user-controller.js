import axios from 'axios';

// { "token": "MRGJTDKFOER" }
class UserController {
  static async login(email, password) {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      throw new Error('Error en login', error);
    }
  }
}

export default UserController;
