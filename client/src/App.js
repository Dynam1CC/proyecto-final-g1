// App.js
import { useState } from 'react';
import axios from 'axios';
const App = () => {

  const[title,setTitle] = useState('');
  const[text,setText] = useState('');

  const handleSubmit= e=> {
    e.preventDefault();
    console.log('Enviando formulario...');
    console.log(title,text);
    const note = {title, text};
    axios.post('http://localhost:4000/api/notes', note)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  };

  return(
  <div className="notas">
  <div className="agregarNota">
  <form onSubmit={handleSubmit}>
  <label>Titulo</label>
  <input
  onChange={e => setTitle(e.target.value)}
  value={title}
  type="text"
  />
  <label>Texto</label>
  <input
  onChange={e => setText(e.target.value)}
  value={text}
  type="text"
  />
  <input type="submit" value="Guardar" />
  </form>
  </div>
  <div className="notas">

  </div>
  </div>
  );
};

export default App;
