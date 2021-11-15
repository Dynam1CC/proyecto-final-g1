const Nota = props => {
  const { id, title, text, deleteNote, updateNote} = props;
  return (
    <div className="nota">
      <h2>{title}</h2>
      <p>{text}</p>
      <p>{id}</p>
      <button onClick={() => deleteNote(id)}>Borrar</button>
      <button onClick={() => updateNote(id)}>Editar</button>
    </div>
  );
};

export default Nota;
