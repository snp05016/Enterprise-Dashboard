import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Dashboard.css';
import PageTitle from './PageTitle';
import './Documents.css';

function Mydocuments() {
    const [documents, setDocuments] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchData = () => {
        fetch('http://localhost:4000/documents')
            .then(res => res.json())
            .then(data => {
                console.log('Fetched Document data:', data); // Debug log
                setDocuments(data);
            })
            .catch(e => console.log('Error fetching Document data:', e.message));
    };

    useEffect(() => {   
        fetchData();
        // eslint-disable-next-line
    }, []);

    const highlightText = (text) => {
        if (!searchTerm) return text;
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return text.split(regex).map((part, index) =>
            regex.test(part) ? <span key={index} className="highlight">{part}</span> : part
        );
    };

    // Filter documents by any field
    const filteredDocuments = documents.filter(doc =>
        Object.keys(doc).some(key =>
            doc[key]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    // Function to get the appropriate status class
    const getStatusClass = (status) => {
        switch(status) {
            case 'Approved':
                return 'status-approved';
            case 'Pending':
                return 'status-pending';
            case 'Rejected':
                return 'status-rejected';
            case 'Under Review':
                return 'status-under-review';
            default:
                return '';
        }
    };

    return (
        <main className="main" id='main'>
            <PageTitle page="Documents" />
            <section className="dashboard section">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <br/>
                                {/* Search input field and add button */}
                                <div className="input-button-container">
                                    <input
                                        type="text"
                                        placeholder="Search by any field"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="form-control mb-3"
                                    />
                                    <Link to="/add-document" className="btn btn-primary mb-3">
                                        Add Document
                                    </Link>
                                </div>

                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Document Name</th>
                                                <th>Customer Name</th>
                                                <th>Company Name</th>
                                                <th>Letterhead</th>
                                                <th>Status</th>
                                                <th>Created By</th>
                                                <th>Approved By</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredDocuments.map(doc => (
                                                <tr key={doc.doc_id}>
                                                    <td>{highlightText(doc.label)}</td>
                                                    <td>{highlightText(doc.customer_name)}</td>
                                                    <td>{highlightText(doc.company_name)}</td>
                                                    <td><a href='#' className='letter-head-link'><u>{highlightText(doc.letter_head)}</u></a></td>
                                                    <td className={getStatusClass(doc.status)}>{highlightText(doc.status)}</td>
                                                    <td>{highlightText(doc.created_by)}</td>
                                                    <td>{highlightText(doc.approved_by)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </section>
        </main>
    );
}

export default Mydocuments;
