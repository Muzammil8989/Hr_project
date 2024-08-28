import React from 'react';
import { useForm } from 'react-hook-form';

const ResumeForm = ({ formData, setFormData }) => {
  // Initialize the form with useForm hook
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: formData, // Use defaultValues to auto-fill the form
  });

  // Handle form submission
  const onSubmitHandler = (data) => {
    console.log('Submitted Data:', data);
    setFormData(data); // Update the formData state in the parent component
  };

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmitHandler)}>
      <h2 className="text-2xl font-bold mb-4 text-center text-[#1b0b75]">Resume Details</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2">Name:</label>
        <input
          type="text"
          {...register('name', { required: 'Name is required' })}
          className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#1b0b75] focus:border-transparent"
          placeholder="Enter your name"
        />
        {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2">Contact Number:</label>
        <input
          type="text"
          {...register('contact_number', { required: 'Contact number is required' })}
          className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#1b0b75] focus:border-transparent"
          placeholder="Enter your contact number"
        />
        {errors.contact_number && <p className="text-red-500 text-xs italic">{errors.contact_number.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2">Email:</label>
        <input
          type="email"
          {...register('email', { required: 'Email is required' })}
          className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#1b0b75] focus:border-transparent"
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2">Skills:</label>
        <input
          type="text"
          {...register('skills')}
          className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#1b0b75] focus:border-transparent"
          placeholder="Enter your skills (comma-separated)"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2">Education:</label>
        <input
          type="text"
          {...register('education')}
          className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#1b0b75] focus:border-transparent"
          placeholder="Enter your education"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2">Colleges:</label>
        <input
          type="text"
          {...register('colleges')}
          className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#1b0b75] focus:border-transparent"
          placeholder="Enter your colleges"
        />
      </div>

      
      
    </form>
  );
};

export default ResumeForm;
