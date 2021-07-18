import React, {Fragment, useState} from 'react';

export default function InputTodo() {
    const [description, setDescription] = useState('');

    const onDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            } );

            window.location = "/";
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <Fragment>
            <h1 className='text-center mt-5'>Input Todo List</h1>
            <form className='d-flex mt-5' onSubmit={onSubmitForm}>
                <input type='text' className='form-control' value={description} onChange={onDescriptionChange} placeholder='Add ToDo List Item'/>
                <button className='btn btn-success'>Add</button>
            </form>
        </Fragment>
    );
};