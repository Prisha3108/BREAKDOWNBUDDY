import React, { useState, useEffect } from 'react'
import axios from 'axios'; // Import Axios

const TyreReply = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        // Fetch data from backend when component mounts
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/tyre/getTyreRequests');
            if (response.status === 200) {
                setRequests(response.data);
            } else {
                console.error('Failed to fetch tyre requests');
                alert('Failed to fetch tyre requests');
            }
        } catch (error) {
            console.error('Error fetching tyre requests:', error);
            alert('Error fetching tyre requests');
        }
    };

    const handleApprove = async (requestId, index) => {
        if (window.confirm('Are you sure you want to approve this request?')) {
            try {
                const response = await axios.put(`http://localhost:8000/tyre/updateRequestStatus/${requestId}`, { status: 'Approved' });
                if (response.status === 200) {
                    const newRequests = [...requests];
                    newRequests[index].status = 'Approved';
                    setRequests(newRequests);
                } else {
                    console.error('Failed to update request status');
                    alert('Failed to update request status');
                }
            } catch (error) {
                console.error('Error updating request status:', error);
                alert('Error updating request status');
            }
        }
    };

    const handleDeny = async (requestId, index) => {
        if (window.confirm('Are you sure you want to deny this request?')) {
            try {
                const response = await axios.put(`http://localhost:8000/tyre/updateRequestStatus/${requestId}`, { status: 'Denied' });
                if (response.status === 200) {
                    const newRequests = [...requests];
                    newRequests[index].status = 'Denied';
                    setRequests(newRequests);
                } else {
                    console.error('Failed to update request status');
                    alert('Failed to update request status');
                }
            } catch (error) {
                console.error('Error updating request status:', error);
                alert('Error updating request status');
            }
        }
    };

    return (
        <div className="tow-reply-container">
            <h2>Tyre Requests</h2>
            <table className="tow-request-table">
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
                    {requests.map((request, index) => (
                        <tr key={request.id}>
                            <td>{request.fullName}</td>
                            <td>{request.email}</td>
                            <td>{request.vehicleModel}</td>
                            <td>{request.licensePlateNumber}</td>
                            <td>{request.currentLocation}</td>
                            <td>{request.add_note}</td>
                            <td>
                                {request.status ? request.status :
                                    <div style={{ display: 'flex' }}>
                                        <button onClick={() => handleApprove(request._id, index)} className='approve_btn'>Approve</button>
                                        <button onClick={() => handleDeny(request._id, index)} className='deny_btn' >Deny</button>
                                    </div>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TyreReply
