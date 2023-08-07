import React from 'react';
import './ApplicationForm.css';

const ApplicationForm = ({ jobName, jobDescription, onSubmit }) => {
  return (
    <div className="form-container">
      <h2>Apply for {jobName}</h2>
      <p>{jobDescription}</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="coverLetter">Why are you a good fit for this job?</label>
        <textarea id="coverLetter" name="coverLetter" rows="4" />

        <button type="button" onClick={onSubmit}>
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
