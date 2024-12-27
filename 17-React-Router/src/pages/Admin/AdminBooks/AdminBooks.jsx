import React from 'react'
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios';

function AdminBooks() {
    const [data, setData] = useState([]);
    async function getData() {
        axios
            .get("http://localhost:5000/suppliers")
            .then((res) => setData(res.data))
            .catch((error) => console.error("Error fetching data:", error));
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                await getData();
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className='main container'>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                {data.map((item) => (
                    <tbody>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    )
}

export default AdminBooks