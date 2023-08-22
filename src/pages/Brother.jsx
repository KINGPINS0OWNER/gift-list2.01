import { useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Brother() {
    const [brothersheet, setBrothersheet] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/getBrothersheet')
            .then(response => setBrothersheet(response.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
            <div className="w-50">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {brothersheet.map(brother => (
                            <tr key={brother._id}>
                                <td>{brother.item}</td>
                                <td>{brother.price}</td>
                                <td>{brother.availability}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Brother;
