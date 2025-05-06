import images from './images.jpg';
import { useState } from 'react';
import './App.css';

function App() {
  //Permite adicionar estado ao componente (monitorar mudancas no conteudo)
  const [usuario, setUsuario] = useState('');
  const [usuarios, setUsuarios] = useState(['Maria', 'Lucas', 'Jose']);

  const adicionarUsuario = () => {
    //Verificando se o novo usuário já existe na lista.
    if (usuarios.includes(usuario)) {
      alert('Usuario já existe na lista');
      return;
    }

    //Adicionar novo usuário na lista, mantendo os anteriores.
    setUsuarios([...usuarios, usuario]);
    //Limpar campo de entrada.
    setUsuario('');
    }

  return (
    <div className='App'>
      <hr/>
      <img src={images} className='imagem' alt="logo"/> 
      <h1>Lista de usuários</h1>
      <hr/>
      <h2>Adicionar usuários</h2>
      <input
      type='text'
      placeholder='Digite o nome do usuário'
      value={usuario}
      onChange={(e) => setUsuario(e.target.value)}
      />
      <button onClick={adicionarUsuario}>Adiconar</button>
      <hr/>
      <h2>Lista de usuário</h2>
      <ol>
        {usuarios.map((usuario, index) => {
          <li key={index}>{usuario}</li>
        })}
      </ol>
    </div>
  );
}

export default App;
