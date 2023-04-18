import Todo from "./Todo";
export default function TodoList({data, changeEtat})
{
    // Toutes les taches de l'application selon les filtres.
    const display =
        data.map((todo, index) =>
        <Todo key={index} data={todo} changeEtat={changeEtat}/>
    );

    // Retourne la liste des taches de l'application.
    return(
        <div className='todoList'>
            <div className="todoListTitre">
                <h1>Liste des taches</h1>
            </div>

            <div className='todos'>
                {display}
            </div>
        </div>
    );
}