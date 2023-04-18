import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export default function TodoDoughnut({numbersOfEtats})
{
    // Les informations pour faire le donut.
    const data =
    {
        labels: ['A faire', 'En cours', 'Fini'],
        datasets:
            [
                {
                    label: '',
                    data: [numbersOfEtats.etat1, numbersOfEtats.etat2, numbersOfEtats.etat3],
                    backgroundColor:
                        [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                        ],
                    borderColor:
                        [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                        ],
                    borderWidth: 3,
                },
            ],
    };

    // Les options pour le donut.
    const options =
    {
        aspectRatio: 2,
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            }
        },
        responsive: true,
        cutoutPercentage: 90,
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    };

    // Retourne le donut.
    return <Doughnut options={options} data={data} />;
}