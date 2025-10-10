import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {

    //insérer le code ici pour créer des variables de hook useState pour l'email, le mot de passe
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // insérer le code ici pour créer la fonction handleLogin et inclure console.log
    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("À l'intérieur de handleLogin");
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

            </div>
          </div>
        </div>
      </div>
    )
}

export default LoginPage;