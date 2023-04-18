import TodoForm from "./TodoForm";
import TodoStats from "./TodoStats";
import TodoFilters from "./TodoFilters";
import TodoList from "./TodoList";
import {data} from "./data";
import {useState} from "react";

export default function TodoApp()
{
    //=========================================//
    //=== UseStates et Constantes
    //=========================================//

    // Toutes les taches.
    const [allTodoData, setAllTodoData] = useState(data);
    // L'id pour la prochaine tache.
    const [nextId, setNextId] = useState(allTodoData.length + 1);
    // Les etats pour le filtre des etats.
    const [etats, setEtats] = useState({etat1: true, etat2: true, etat3 : true});

    //=== Date de debut et Date actuel pour l'initialisation du filtre de date. ===//
    const previousDate = correctDateFormat(new Date('2023-04-01'));
    const currentDate = correctDateFormat(new Date());
    const [dates, setDates] = useState({firstDate: previousDate, lastDate: currentDate});

    // Filtre allTodoData selon le filtre d'etats et de date.
    const todoDataFlitred = allTodoData.filter(elem =>
        ((elem.etat === 1 && etats.etat1) || (elem.etat === 2 && etats.etat2) || (elem.etat === 3 && etats.etat3)) &&
        dateIsBetween(elem.date)
    );

    //=== Les nombres des differentes taches avec les etats 1, 2 et 3 ===//
    const numberOfEtat1 = allTodoData.filter(elem=>
        elem.etat === 1).length;
    const numberOfEtat2 = allTodoData.filter(elem=>
        elem.etat === 2).length;
    const numberOfEtat3 = allTodoData.filter(elem=>
        elem.etat === 3).length;
    const numbersOfEtats = {etat1: numberOfEtat1, etat2: numberOfEtat2, etat3: numberOfEtat3};

    //=========================================//

    //=========================================//
    //=== Fonctions
    //=========================================//

    // Pour savoir si une date est entre nos deux dates (filtre date).
    function dateIsBetween(date)
    {
        const firstDate = new Date(dates.firstDate);
        const lastDate = new Date(dates.lastDate);
        const currentDate = new Date(date);

        return firstDate <= currentDate && currentDate <= lastDate;
    }

    // Permet de incrementer l'etat d'une tache.
    function changeEtat(data)
    {
        const value = data.etat === 1 || data.etat === 2 ? 1 : 0;
        setAllTodoData(allTodoData.map(elem =>
        {
            return elem.id === data.id ? {...elem, etat: data.etat + value} : elem;
        }));
    }

    // Transforme une Date en format correct pour les <input type='date' />.
    function correctDateFormat(date)
    {
        return date.getFullYear() + "-" +
            ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
            ("0" + (date.getDate())).slice(-2);
    }

    //=========================================//

    //=========================================//
    //=== Return
    //=========================================//

    // Retourne le corps de l'application.
    return(
      <div className='todoApp'>
          <div className='leftTodoApp'>
                <TodoForm allTodoData={allTodoData} setAllTodoData={setAllTodoData} nextId={nextId}
                          setNextId={setNextId} correctDateFormat={correctDateFormat}/>
                <TodoStats numbersOfEtats={numbersOfEtats}/>
          </div>

          <div className='rightTodoApp'>
                <TodoFilters etats={etats} setEtats={setEtats} dates={dates} setDates={setDates}/>
                <TodoList data={todoDataFlitred} changeEtat={changeEtat}/>
          </div>
      </div>
    );

    //=========================================//
}