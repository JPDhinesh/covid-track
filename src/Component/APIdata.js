import React, { useState, useEffect } from 'react'
import axios from 'axios'

const APIdata = (WrappedComponent) => {
    function NewComponent(props) {
        const [statistics, setStatistics] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
                const options = {
                    method: 'GET',
                    url: 'https://covid-193.p.rapidapi.com/statistics',
                    headers: {
                        'X-RapidAPI-Key': 'eeed92ef6cmsh1127f6b82f1f43cp10f313jsne3f4ca23e260',
                        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
                    }
                };

                try {
                    const response = await axios.request(options);
                    setStatistics(response.data.response);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchData();
        }, []);

        return <WrappedComponent statistics={statistics} />
    }
    return NewComponent
}

export default APIdata;

