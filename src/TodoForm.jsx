import {useRef, useState} from "react";

export default function TodoForm({allTodoData, setAllTodoData, nextId, setNextId, correctDateFormat})
{
    /*
    //=== UseState pour le titre et la description d'une tache ===//
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');

    //=== Gère les input pour le titre et la description. ===//
    function handleTitre(event)
    {
        setTitre(event.target.value);
    }

    function handleDescription(event)
    {
        setDescription(event.target.value);
    }
    */

    const inputTitre = useRef(null);
    const inputDescription = useRef(null);


    // Ajoute la tache à la liste de tache si il y a un titre et une description.
    function handleSubmit(event)
    {
        event.preventDefault();
        const titre = inputTitre.current.value;
        const description = inputDescription.current.value;

        if(titre !== '' && description !== '')
        {
            const newTodo =
                {
                    id: nextId,
                    titre: titre,
                    description: description,
                    etat: 1,
                    date: correctDateFormat(new Date),
                };
            setNextId(nextId + 1);
            // setAllTodoData([...allTodoData, newTodo]);
            setAllTodoData((oldList) =>
                [...oldList, newTodo]
            );
        }
    }

    // Retourne le formulaire pour ajouter une tache.
    return(
        <div className='todoForm'>
            <h1>Nouvelle Tache</h1>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='divInsideForm'>
                        <div className='titre'>
                            <input type="text" name="titre" placeholder='Titre' size="25"
                                   ref={inputTitre}/>
                        </div>

                        <div className='description'>
                            <textarea name="description" placeholder='Description' rows="5" cols="25"
                                      ref={inputDescription} ></textarea>
                        </div>

                        <input type='submit' value='Créer'/>
                    </div>
                </form>
        </div>
    );
}