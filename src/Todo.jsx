import {InboxIcon , SyncIcon, CheckIcon } from '@primer/octicons-react'
export default function TodoList({data, changeEtat})
{
    // Old version, dangerouslySetInnerHTML à eviter.

    // Pour avoir la description avec les sauts de lignes.
    // const description = data.description.replaceAll('\n', '<br/>');

    // Affiche une image selon l'etat de la tache.
    // function displayEtat(etat)
    // {
    //     return etat === 1 ? <InboxIcon size={50} /> : (etat === 2 ? <SyncIcon size={50} /> : <CheckIcon size={50} />);
    //
    //     if(etat === 1)
    //     {
    //         return <InboxIcon size={50} />;
    //     }
    //     if( etat === 2)
    //     {
    //         return <SyncIcon size={50} />;
    //     }
    //
    //     return <CheckIcon size={50} />;
    //
    // }

    const obj = {1: <InboxIcon size={50} />, 2: <SyncIcon size={50} />, 3:  <CheckIcon size={50} />};

    const displayEtat = (etat) => obj[etat];

    // Retourne le titre d'une tache ainsi que ça description, sa date de création et l'image de son état.
    const {titre, description, etat, date} = data;
    return(
        <div className='todo'>
            <div className='leftTodo'>
                <h2>{titre}</h2>
                {/*<p dangerouslySetInnerHTML={{__html: description}}></p>*/}
                <pre>{description}</pre>
            </div>
            <div className='rightTodo'>
                <p>{new Date(date).toLocaleDateString("fr")}</p>
                <div onClick={etat === 1 || etat === 2 ? () => changeEtat(data) : null}>{obj[etat]}</div>
            </div>
        </div>
    );
}