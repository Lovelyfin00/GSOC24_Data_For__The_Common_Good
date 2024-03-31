import React from 'react';

const Questions = ({ question, formData, handleInputChange }) => {
    switch (question.type) {
        case 'text':
          return (
            <div key={question.id}>
              <label>{question.text}</label>
              <input
                type="text"
                className='ml-4 border border-primary-orange rounded-md px-2 py-2'
                name={`${question.text}`}
                required={true}
                onChange={handleInputChange}
                value={formData[`${question.text}`] || ''}
              />
            </div>
          );
        case 'select':
          return (
            <div key={question.id}>
              <label>{question.text}</label>
              <select
              className='ml-4 border border-primary-orange rounded-md px-2 py-2'
                name={`${question.text}`}
                onChange={handleInputChange}
                required={true}
                value={formData[`${question.text}`] || ''}
              >
                <option value="">Select...</option>
                {question.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          );
        default:
          return null;
      }
};

export default Questions
