import React, { useState } from 'react';
import UserController from '../../networking/controllers/user-controller';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    UserController.login(email, password);
    // Vamos al home
  };
  return (
    <form onSubmit={handleSubmit()}>
      <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
