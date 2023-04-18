export default function TodoFilters({etats, setEtats, dates, setDates})
{
    //=== Gère les differents input pour les etats. ===//
    function handleEtat1()
    {
        setEtats({...etats, etat1: !etats.etat1});
    }

    function handleEtat2()
    {
        setEtats({...etats, etat2: !etats.etat2});
    }

    function handleEtat3()
    {
        setEtats({...etats, etat3: !etats.etat3});
    }

    //=== Gère les differents input pour les dates. ===//
    function handleFirstDate(event)
    {
        setDates({...dates, firstDate: event.target.value});
    }

    function handleLastDate(event)
    {
        setDates({...dates, lastDate: event.target.value});
    }

    // Retourne les filtres pour l'application.
    return(
        <div className='todoFilters'>
            <h1>Filtres</h1>
            <div className='allFilters'>
                <div className='leftFilter'>
                    <h3>Par état</h3>
                    <div>
                        <input type="checkbox" checked={etats.etat1} onChange={handleEtat1}/>
                        <label>A faire</label>
                        <input type="checkbox" checked={etats.etat2} onChange={handleEtat2}/>
                        <label>En cours</label>
                        <input type="checkbox" checked={etats.etat3} onChange={handleEtat3}/>
                        <label>Fini</label>
                    </div>
                </div>
                <div className='rightFilter'>
                    <h3>Par date</h3>
                    <div className='selectDates'>
                        <p>Du</p>
                        <input type='date' value={dates.firstDate} onChange={handleFirstDate}/>
                        <p>au</p>
                        <input type='date' value={dates.lastDate} onChange={handleLastDate}/>
                    </div>
                </div>
            </div>
        </div>
    );
}