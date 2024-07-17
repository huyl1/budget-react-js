import React, { useState } from 'react';

export const AddTransaction = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <button className="btn" onClick={toggleForm}>
        {showForm ? 'Hide Form' : 'Show Form'}
      </button>
      {showForm && (
        <form>
          <div className="input-group">
            <input type="text" placeholder="Receipt name" />
            <input type="date" />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
};

export default AddTransaction;