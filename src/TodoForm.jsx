import {useRef /*, useState*/} from "react";

export default function TodoForm({setAllTodoData, correctDateFormat})
{
    /* A ne pas faire re update à chaque nouvelle lettre.

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

    // UseRef : à faire pour les forms.
    const inputTitre = useRef(null);
    const inputDescription = useRef(null);

    // Ajoute la tache à la liste de tache si il y a un titre et une description.
    async function handleSubmit(event) {
        event.preventDefault();
        const titre = inputTitre.current.value;
        const description = inputDescription.current.value;

        if (titre !== '' && description !== '')
        {
            const response = await fetch("/insert",
        {
                method: "POST",
                headers:
                    {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body:
                    JSON.stringify({
                        titre: titre,
                        description: description,
                        etat: 1,
                        date: correctDateFormat(new Date),
                    })

            });
            const newTodo = await response.json();
            setAllTodoData((old) => [...old, newTodo]);
        }
    }

    async function handleResetData()
    {
        await fetch("/deleteAll",
            {
                method: "DELETE",
            });
        const responseData = await fetch("/setDefaults",
            {
                method: "POST",
            });
        const newData = await responseData.json();
        setAllTodoData((old) => newData);
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
                            {/*value={description} onChange={handleDescription}*/}
                        </div>

                        <div className='description'>
                            <textarea name="description" placeholder='Description' rows="5" cols="25"
                                      ref={inputDescription} ></textarea>
                            {/*value={titre} onChange={handleTitre}*/}
                        </div>

                        <input type='submit' value='Créer'/>
                    </div>
                </form>
            <div className='resetData'>
                <button onClick={handleResetData}>ReLoad default Data</button>
            </div>
        </div>
    );
}