import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Produtos from './Produtos'
import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [logado, setLogado] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === 'infinity' && password === 'infinity') {
      setLogado(true)
      navigate('/produtos')
    } else {
      alert('Usuário ou senha inválidos!')
    }
  }

  return (
    <>
      <header id="principal">
        <nav>
          <h1>INFINITY SCHOOL</h1>
        
        </nav>
      </header>
      <Routes>
        <Route path="/" element={
          <main>
            <div id="conteudo_principal">
              <div className="container">
                <img src="/banner.PNG" alt="Banner Infinity Stock" />
                <p>Contabilizador de estoque em aplicativo!</p>
              </div>
            </div>
            {!logado && (
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
            )}
          </main>
        } />
        <Route path="/produtos" element={logado ? <Produtos /> : <p>Faça login para acessar os produtos.</p>} />
      </Routes>
      <div id="conteudo_footer"></div>
    </>
  )
}

export default App
