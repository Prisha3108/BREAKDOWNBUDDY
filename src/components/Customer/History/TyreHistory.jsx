import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './History.css'
import HorizontalBar from '../HorizontalBar';

const TyreHistory = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = async () => {
        try {
            const response = await axios.get('http://localhost:8000/tyre/getTyreHistory');
            if (response.status === 200) {
                setHistory(response.data);
            } else {
                console.error('Failed to fetch tyre history');
                alert('Failed to fetch tyre history');
            }
        } catch (error) {
            console.error('Error fetching tyre history:', error);
            alert('Error fetching tyre history');
        }
    };

    return (
        <div className='history_page'>
            <HorizontalBar />
            <div className="history-container">
                <h2>Tyre History</h2>
                <table className="history-table">
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Model of Vehicle</th>
                            <th>License Plate</th>
                            <th>Current Location</th>
                            <th>Additional Note</th>
                            <th>Request Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((item) => (
                            <tr key={item._id}>
                                <td>{item.fullName}</td>
                                <td>{item.email}</td>
                                <td>{item.vehicleModel}</td>
                                <td>{item.licensePlateNumber}</td>
                                <td>{item.currentLocation}</td>
                                <td>{item.add_note}</td>
                                <td>{item.status || 'Pending'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TyreHistory
