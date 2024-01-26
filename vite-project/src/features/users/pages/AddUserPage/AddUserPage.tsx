import React from 'react';
import { useForm } from 'react-hook-form';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { FormContainer, FormField } from '../../../gardens/pages/AddGardenPage/AddGardenStyle';
import { ActionButton } from '../../../global/layout/header/Heder.styles';

axios.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      console.error('Response Error:', error.response.status);
      console.error('Response Data:', error.response.data);
      console.error('Response Headers:', error.response.headers);
    } else if (error.request) {
      console.error('Request Error:', error.request);
    } else {
      console.error('Error:', error.message);
    }

    return Promise.reject(error);
  }
);

const AddUserPage = () => {
  const nav = useNavigate();
  const { register, handleSubmit, formState } = useForm();

  const submitHandler = async (data: any) => {
    console.log(data);

    try {
      // Replace 'http://localhost:4000/user-rest-api' with your actual API endpoint
      const response = await axios.post('http://localhost:4000/user-rest-api', data);

      if (response.status === 201) {
        console.log('User added successfully!', response);
        nav('/AllUsers'); // Redirect to the page displaying all users
      } else {
        console.error('Failed to add user. Please try again. ', response);
      }
    } catch (error) {
      console.error('An error occurred while adding the user:', error);
    }
  };
  return (
    <div style={{ backgroundColor: '#d3ffdb' }}>
      <FormContainer onSubmit={handleSubmit(submitHandler)}>
        <FormField>
          <label>Name</label>
          <input {...register('name', { required: true })} />
        </FormField>

        <FormField>
          <label>Email</label>
          <input {...register('email', { required: true })} />
        </FormField>

        <FormField>
          <label>Password</label>
          <input {...register('password', { required: true })} />
        </FormField>

        <FormField>
          <label>User Type</label>
          <input {...register('userType', { required: false })} />
        </FormField>

        <FormField>
          <label>Street Address</label>
          <input {...register('address.street', { required: false })} />
        </FormField>

        <FormField>
          <label>City</label>
          <input {...register('address.city', { required: false })} />
        </FormField>

        <FormField>
          <label>Contact Phone Number</label>
          <input {...register('contactPhoneNumber', { required: false })} />
        </FormField>

        <>
          <label>Is Admin</label>
          <input type="checkbox" {...register('isAdmin')} />
        </>

        <FormField>
          <label>Payment Method Type</label>
          <input {...register('paymentMethod.type', { required: false })} />
        </FormField>

        <FormField>
          <label>Payment Method Credit Card Number</label>
          <input {...register('paymentMethod.creditCardNumber', { required: false })} />
        </FormField>


        <FormField>
          <ActionButton type="submit" disabled={formState.isSubmitting}>
            Submit
          </ActionButton>
        </FormField>
      </FormContainer>
      <div style={{ margin: '8%' }} />
    </div>
  );
};

export default AddUserPage;