import { useState, useEffect } from "react";

export function TodoListFetch() {
  const urlAPI = "https://playground.4geeks.com/todo";
  const user = "sp-todos-edgardo";

  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editTask, setEditTask] = useState({
    id: null,
    label: "",
    is_done: false,
  });

  // GET — Obtener tareas
  const fetchTodos = async () => {
    try {
      const res = await fetch(`${urlAPI}/users/${user}`);
      const data = await res.json();
      setTodos(data.todos || []);
    } catch (error) {
      console.error("Error al obtener tareas:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // POST — Agregar tarea
  const handleSubmitAdd = async (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    try {
      const res = await fetch(`${urlAPI}/todos/${user}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ label: newTask, is_done: false }),
      });

      if (!res.ok) throw new Error("Error al agregar tarea");

      setNewTask("");
      fetchTodos();
    } catch (error) {
      console.error("Error al agregar tarea:", error);
    }
  };

  // Iniciar edición
  const handleEdit = (task) => {
    setIsEdit(true);
    setEditTask({
      id: task.id,
      label: task.label,
      is_done: task.is_done,
    });
  };

    // Cancelar edición
  const handleCancel = () => {
    setIsEdit(false);
    setEditTask({ id: null, label: "", is_done: false });
  };

  
  // PUT — Guardar edición
   const handleSubmitEdit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(`${urlAPI}/todos/${editTask.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          label: editTask.label,
          is_done: editTask.is_done,
        }),
      });

      if (!res.ok) throw new Error("Error al actualizar tarea");

      // Actualizar lista
      fetchTodos();
      handleCancel();
    } catch (error) {
      console.error("Error al actualizar tarea:", error);
    }
  };


  // DELETE — Eliminar tarea
  const handleDelete = async (id) => {
    try {
      await fetch(`${urlAPI}/todos/${id}`, { method: "DELETE" });
      fetchTodos();
    } catch (error) {
      console.error("Error al eliminar tarea:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Todo List with Fetch</h1>

      {/* FORMULARIO AGREGAR */}
      {!isEdit && (
        <form onSubmit={handleSubmitAdd} className="mb-3">
          <label>Agregar tarea</label>
          <input
            className="form-control"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </form>
      )}

      {/* FORMULARIO EDITAR */}
      {isEdit && (
        <form onSubmit={handleSubmitEdit} className="mb-3">
          <label>Editar tarea</label>

          <input
            className="form-control"
            value={editTask.label}
            onChange={(event) =>
              setEditTask({ ...editTask, label: event.target.value })
            }
          />

          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="checkbox"
              checked={editTask.is_done}
              onChange={(event) =>
                setEditTask({ ...editTask, is_done: event.target.checked })
              }
            />
            <label className="form-check-label">Completed</label>
          </div>

          <button type="submit" className="btn btn-primary mt-3 me-2">
            Guardar
          </button>

          <button
            type="button"
            className="btn btn-secondary mt-3"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </form>
      )}

      {/* LISTADO DE TAREAS */}
      <h4 className="text-primary">Listado de tareas</h4>

      <ul className="list-group">
        {todos.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex align-items-center"
          >
            {/* Icono estado */}
            <span className="me-3">
              {task.is_done ? (
                <i className="bi bi-check-circle text-success"></i>
              ) : (
                <i className="bi bi-x-circle text-danger"></i>
              )}
            </span>

            {/* Texto */}
            <span className="flex-grow-1">{task.label}</span>

            {/* Botón editar */}
            <button
              className="btn btn-sm btn-success me-2"
              onClick={() => handleEdit(task)}
            >
              <i className="bi bi-pencil-fill"></i>
            </button>

            {/* Botón borrar */}
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => handleDelete(task.id)}
            >
              <i className="bi bi-trash-fill"></i>
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-2 text-muted">{todos.length} tareas</p>
    </div>
  );
}