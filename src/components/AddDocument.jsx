import React, { useState } from 'react';
import './AddDocument.css'; // Import the new CSS file
import PageTitle from './PageTitle';

function AddDocument({ onAdd }) {
    const [newDocument, setNewDocument] = useState({
        label: '',
        customerName: '',
        companyName: '',
        letterHead: '',
        status: '',
        createdBy: '',
        approvedBy: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewDocument({
            ...newDocument,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(newDocument); // This should be a function passed as a prop to handle the addition of the document
        window.location.href = '/documents';  // Redirect back to the document list
    };

    return (
        <main className="main" id='main'><PageTitle page="Create Document"/>
            <section className="document-section">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="add-document-card">
                            <div className="add-document-card-body">
                                <h5 className="add-document-title">Add New Document</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="add-document-input-row">
                                        <div className="add-document-input-group">
                                            <div className="add-document-form-group">
                                                <label>Document Name</label>
                                                <input 
                                                    type="text" 
                                                    name="label" 
                                                    value={newDocument.label} 
                                                    onChange={handleChange} 
                                                    className="add-document-form-control" 
                                                    required 
                                                />
                                            </div>
                                        </div>
                                        <div className="add-document-input-group">
                                            <div className="add-document-form-group">
                                                <label>Customer Name</label>
                                                <input 
                                                    type="text" 
                                                    name="customerName" 
                                                    value={newDocument.customerName} 
                                                    onChange={handleChange} 
                                                    className="add-document-form-control" 
                                                    required 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add-document-input-row">
                                        <div className="add-document-input-group">
                                            <div className="add-document-form-group">
                                                <label>Company Name</label>
                                                <input 
                                                    type="text" 
                                                    name="companyName" 
                                                    value={newDocument.companyName} 
                                                    onChange={handleChange} 
                                                    className="add-document-form-control" 
                                                    required 
                                                />
                                            </div>
                                        </div>
                                        <div className="add-document-input-group">
                                            <div className="add-document-form-group">
                                                <label>Letterhead</label>
                                                <input 
                                                    type="text" 
                                                    name="letterHead" 
                                                    value={newDocument.letterHead} 
                                                    onChange={handleChange} 
                                                    className="add-document-form-control" 
                                                    required 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add-document-input-row">
                                        <div className="add-document-input-group">
                                            <div className="add-document-form-group">
                                                <label>Status</label>
                                                <input 
                                                    type="text" 
                                                    name="status" 
                                                    value={newDocument.status} 
                                                    onChange={handleChange} 
                                                    className="add-document-form-control" 
                                                    required 
                                                />
                                            </div>
                                        </div>
                                        <div className="add-document-input-group">
                                            <div className="add-document-form-group">
                                                <label>Created By</label>
                                                <input 
                                                    type="text" 
                                                    name="createdBy" 
                                                    value={newDocument.createdBy} 
                                                    onChange={handleChange} 
                                                    className="add-document-form-control" 
                                                    required 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add-document-form-group">
                                        <label>Approved By</label>
                                        <input 
                                            type="text" 
                                            name="approvedBy" 
                                            value={newDocument.approvedBy} 
                                            onChange={handleChange} 
                                            className="add-document-form-control" 
                                            required 
                                        />
                                    </div>
                                    <button type="submit" className="btn add-document-btn mt-3">Add Document</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>  
            </section>
        </main>
    );
}

export default AddDocument;
