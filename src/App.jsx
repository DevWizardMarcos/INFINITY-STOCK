import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', { username, password })
  }

  return (
    <>
      <header id="principal">
        <nav>
          <h1>INFINITY SCHOOL</h1>
        </nav>
      </header>
      
      <main>
        <div id="conteudo_principal">
          <div className="container">
            <img src="/banner.PNG" alt="Banner Infinity Stock" />
            <p>Contabilizador de estoque em aplicativo!</p>
          </div>
        </div>    
      </main>
      
      <div id="conteudo_footer"></div>

      <div className="login-container">
        <div className="login-image">
          <img src="/banner_footer.png" alt="Imagem decorativa" />
        </div>
        <div className="login-form">
          <h2>INFINITY SCHOOL</h2>
          <h1>Bem-vindo!</h1>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Usuário" 
              required 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Senha" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">entrar</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
