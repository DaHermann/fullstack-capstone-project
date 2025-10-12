import React, { useState } from 'react';
import './LoginPage.css';
import {urlConfig} from '../../config';
import { useAppContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  //insérer le code ici pour créer des variables de hook useState pour l'email, le mot de passe
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [incorrect, setIncorrect] = useState('');
  const navigate = useNavigate();
  const bearerToken = sessionStorage.getItem('bearer-token');
  const { setIsLoggedIn } = useAppContext();
  useEffect(() => {
    if (sessionStorage.getItem('auth-token')) {
      navigate('/app')
    }
  }, [navigate])

  // insérer le code ici pour créer la fonction handleLogin et inclure console.log
  const handleLogin = async () => {
    try{
        //first task
      const response = await fetch(`/api/auth/login`, {
          //{{Insert code here}} //Task 7: Set method
          method: 'POST',
          //{{Insert code here}} //Task 8: Set headers
          headers: {
          'content-type': 'application/json',
          'Authorization': bearerToken ? `Bearer ${bearerToken}` : '', // Include Bearer token if available
        },
          //{{Insert code here}} //Task 9: Set body to send user details
        body: JSON.stringify({    
          email: email,
          password: password,
        })
      })

      const json = await response.json();
      if (json.authtoken) {
          sessionStorage.setItem('auth-token', json.authtoken);
          sessionStorage.setItem('name', firstName);
          sessionStorage.setItem('email', json.email);
          //insert code for setting logged in state
          setIsLoggedIn(true);
          //insert code for navigating to MainPAge
          navigate('/app')
      }else {
        document.getElementById("email").value="";
        document.getElementById("password").value="";
        setIncorrect("Wrong password. Try again.");
        //Below is optional, but recommended - Clear out error message after 2 seconds
        setTimeout(() => {
          setIncorrect("");
        }, 2000);
      }


    }catch (e) {
      console.log("Error fetching details: " + e.message);
    }
  }
      return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="login-card p-4 border rounded">
              <h2 className="text-center mb-4 font-weight-bold">Connexion</h2>

        {/* insérer le code ici pour créer des éléments input pour les variables email et mot de passe */}
              <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                      id="email"
                      type="text"
                      className="form-control"
                      placeholder="Entrez votre email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
              </div>

        {/* insérer le code ici pour créer un bouton qui exécute la fonction `handleLogin` au clic */}
              <button className="btn btn-primary w-100 mb-3" onClick={handleLogin}>Se connecter</button>
              <p className="mt-4 text-center">
                  Nouveau ici ? <a href="/app/register" className="text-primary">Inscrivez-vous ici</a>
              </p>
              <span style={{color:'red',height:'.5cm',display:'block',fontStyle:'italic',fontSize:'12px'}}>{incorrect}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;