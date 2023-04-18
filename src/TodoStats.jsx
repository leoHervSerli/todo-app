import TodoDoughnut from './TodoDoughnut';
export default function TodoStats({numbersOfEtats})
{
    // Retourne le donut des statistiques sur les etats.
    return(
        <div className='todoStats'>
            <h1>Statistiques</h1>
            <div className='todoDoughnut'>
                <TodoDoughnut numbersOfEtats={numbersOfEtats}/>
            </div>
        </div>
    );
}