import { useState, useEffect } from "react";

export function Todolist() {

    const [tareas, setTareas] = useState(() => {
        const saved = localStorage.getItem("tareas");
        return saved ? JSON.parse(saved) : [];
    });

    const [nuevaTarea, setNuevaTarea] = useState("");

    // Guardar tareas en localStorage cada vez que cambian
    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }, [tareas]);

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && nuevaTarea.trim() !== "") {
            setTareas([...tareas, nuevaTarea.trim()]);
            setNuevaTarea("");
        }
    };

    const eliminarTarea = (index) => {
        setTareas(tareas.filter((_, i) => i !== index));
    };

    return (
        <div className="container text-center mt-5">
            <h1 className="display-1 fw-light text-muted mb-4">Registra una nueva tarea</h1>

            <div className="card mx-auto shadow-sm" style={{ maxWidth: "400px" }}>
                <input
                    type="text"
                    className="form-control form-control-lg border-0 border-bottom"
                    placeholder="What needs to be done?"
                    value={nuevaTarea}
                    onChange={(event) => setNuevaTarea(event.target.value)}
                    onKeyDown={handleKeyDown}
                />

                {tareas.length === 0 ? (
                    <p className="text-secondary py-3 m-0">No hay tareas, añadir tareas</p>
                ) : (
                    <ul className="list-group list-group-flush text-start">
                        {tareas.map((tarea, index) => (
                            <li
                                key={index}
                                className="list-group-item d-flex justify-content-between align-items-center tarea-item animate-fade"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <span>{tarea}</span>
                                <button
                                    className="btn btn-link text-dark btn-sm eliminar-btn ms-auto"
                                    onClick={() => eliminarTarea(index)}
                                >
                                    ×
                                </button>
                            </li>
                        ))}
                    </ul>
                )}

                {tareas.length > 0 && (
                    <div className="text-secondary text-start p-2 small border-top">
                        {tareas.length} tarea{tareas.length !== 1 && "s"} pendiente
                    </div>
                )}
            </div>
        </div>
    );
}