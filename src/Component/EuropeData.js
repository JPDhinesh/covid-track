import React from 'react'
import APIdata from './APIdata'
import Card from 'react-bootstrap/Card';
import './CountryData.css'

const EuropeData = (props) => {
    const europeStatistics = props.statistics.filter((statistic) => statistic.continent == 'Europe');
    return (
        <div className='continent-details'>
            <React.Fragment className='country-list'>
                {europeStatistics.map((statistic) => (
                    <Card className='country-details' key={statistic.country}>
                        <Card.Body>
                            <Card.Title><h4>{statistic.country}</h4></Card.Title>
                            <p>Total Cases: {statistic.cases.total}</p>
                            <p>Recovered: {statistic.cases.recovered}</p>
                            <p>Deaths: {statistic.deaths.total}</p>
                        </Card.Body>
                    </Card>
                ))}
            </React.Fragment>
        </div>
    )
}

export default APIdata(EuropeData);