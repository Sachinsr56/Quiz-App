import React, { useState } from 'react';
import { useAuth } from './AuthContext';

function Login() {
  const { isAuthenticated, login, logout } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);

  const handleLogin = () => {
    // if (username === 'user' && password === 'password') {
    //   login(); // Simulate a successful login
    //   setLoginError(null);
    // } else {
    //   setLoginError('Invalid username or password');
    // }
    login();
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              {isAuthenticated ? (
                <div>
                  <h3 className="text-center">Welcome, you are logged in!</h3>
                  <a className="btn btn-info btn-block mt-3" href='/game'>
                    Play the Game
                  </a>
                </div>
              ) : (
                <div>
                  <h2 className="text-center">Login</h2>
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control mb-2"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    {loginError && <p className="text-danger">{loginError}</p>}
                    <button className="btn btn-primary btn-block w-100" onClick={handleLogin}>
                      Log In
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
