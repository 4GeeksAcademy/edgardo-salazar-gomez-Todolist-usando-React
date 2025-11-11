import { useState, useEffect } from "react";

export function Todolist() {
  // Estado para las tareas (array de objetos)
  const [tareas, setTareas] = useState(() => {
    const saved = localStorage.getItem("tareas");
    return saved ? JSON.parse(saved) : [];
  });

  // Estado para la nueva tarea
  const [nuevaTarea, setNuevaTarea] = useState("");

  // Guardar en localStorage cada vez que cambian las tareas
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  // Manejar envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    if (nuevaTarea.trim() === "") return;

    // 👇 Cada tarea ahora es un objeto
    const nueva = {
      texto: nuevaTarea.trim().toUpperCase(),
      completada: false,
    };

    setTareas([...tareas, nueva]);
    setNuevaTarea("");
  };

  // Marcar/desmarcar una tarea como completada
  const toggleCompletada = (index) => {
    const nuevas = [...tareas];
    nuevas[index].completada = !nuevas[index].completada;
    setTareas(nuevas);
  };

  // Eliminar tarea
  const eliminarTarea = (index) => {
    setTareas(tareas.filter((_, i) => i !== index));
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="display-1 fw-light text-muted mb-4">
        Registra una nueva tarea
      </h1>

      <div className="card mx-auto shadow-sm" style={{ maxWidth: "400px" }}>
        {/* Formulario */}
        <form onSubmit={handleSubmit} className="d-flex align-items-center p-2">
          <input
            type="text"
            className="form-control form-control-lg border-0 border-bottom"
            placeholder="¿Qué necesitas hacer?"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
          />

          <button type="submit" className="btn btn-primary ms-2">
            <i className="bi bi-plus-lg"></i>
          </button>
        </form>

        {/* Lista de tareas */}
        {tareas.length === 0 ? (
          <p className="text-secondary py-3 m-0">No hay tareas, añade una.</p>
        ) : (
          <ul className="list-group list-group-flush text-start">
            {tareas.map(({ texto, completada }, index) => (
              <li
                key={index}
                className="list-group-item d-flex align-items-center tarea-item animate-fade"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  checked={completada}
                  onChange={() => toggleCompletada(index)}
                />

                <span
                  style={{
                    textDecoration: completada ? "line-through" : "none",
                    color: completada ? "#888" : "inherit",
                  }}
                >
                  {texto}
                </span>

                <button
                  className="btn btn-link text-dark btn-sm eliminar-btn ms-auto"
                  onClick={() => eliminarTarea(index)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Contador */}
        {tareas.length > 0 && (
          <div className="text-secondary text-start p-2 small border-top">
            {tareas.filter((t) => !t.completada).length} pendientes ·{" "}
            {tareas.filter((t) => t.completada).length} completadas
          </div>
        )}
      </div>
    </div>
  );
}