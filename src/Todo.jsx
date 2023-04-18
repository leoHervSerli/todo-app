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

    const displayEtat = (etat) => etat === 1 ? <InboxIcon size={50} /> : (etat === 2 ? <SyncIcon size={50} /> : <CheckIcon size={50} />);

    // Retourne le titre d'une tache ainsi que ça description, sa date de création et l'image de son état.
    return(
        <div className='todo'>
            <div className='leftTodo'>
                <h2>{data.titre}</h2>
                {/*<p dangerouslySetInnerHTML={{__html: description}}></p>*/}
                <pre>{data.description}</pre>
            </div>
            <div className='rightTodo'>
                <p>{new Date(data.date).toLocaleDateString("fr")}</p>
                <div onClick={data.etat === 1 || data.etat === 2 ? () => changeEtat(data) : null}>{displayEtat(data.etat)}</div>
            </div>
        </div>
    );
}