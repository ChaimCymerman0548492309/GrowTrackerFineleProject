import React from 'react';
import { useForm } from 'react-hook-form';
import axios, { AxiosError } from 'axios'; // Import Axios and AxiosError
import { useNavigate } from 'react-router-dom';
import { FormContainer, FormField } from './AddGardenStyle';
import { ActionButton } from '../../../global/layout/header/Heder.styles';

// Axios Interceptor
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

const AddGardenPage = () => {
  const nav = useNavigate();
  const { register, handleSubmit, formState, setValue } = useForm();

  const submitHandler = async (data: any) => {
    console.log(data);

    try {
      const response = await axios.post('http://localhost:4000/garden-rest-api', data);

      if (response.status === 201) {
        // Successful response from the server
        console.log('Garden added successfully!', response);
        nav('/AllGardens');
        // Display a success message to the user using any preferred UI method
      } else {
        // Server returned an error
        console.error('Failed to add garden. Please try again. ', response);
        // Display an error message to the user using any preferred UI method
      }
    } catch (error) {
      // Network error or other issues
      console.error('An error occurred while adding the garden:', error);
      // Display an error message to the user using any preferred UI method
    }
  }


  return (
    <div style={{ backgroundColor: '#d3ffdb' }}>
      <FormContainer onSubmit={handleSubmit(submitHandler)}>
        <FormField>
          <label>Garden Name</label>
          <input {...register('name', { required: false })} />
        </FormField>

        <FormField>
          <label>Garden Description</label>
          <textarea {...register('description', { required: false })} />
        </FormField>

        <FormField>
          <label>Contact Person Name</label>
          <input {...register('Contact_person.name', { required: false })} />
        </FormField>

        <FormField>
          <label>Contact Person Phone Number</label>
          <input {...register('Contact_person.phone_number', { required: false })} />
        </FormField>

        <FormField>
          <label>Gardner Name</label>
          <input {...register('Gardner.name', { required: false })} />
        </FormField>

        <FormField>
          <label>Gardner Phone</label>
          <input {...register('Gardner.Phone', { required: false })} />
        </FormField>

        <FormField>
          <label>Gardner Rating</label>
          <input {...register('Gardner.Rating' as const, { required: false } as const)} />
        </FormField>

        <FormField>
          <label>Gardner Image URL</label>
          <input {...register('Gardner.gardner_image', { required: false } as const)} />
        </FormField>

        <FormField>
          <label>Park Size</label>
          <input {...register('Park_size', { required: false })} />
        </FormField>

        <FormField>
          <label>Vegetation</label>
          <input {...register('Vegetation', { required: false })} />
        </FormField>

        <FormField>
          <label>Type</label>
          <input {...register('Type', { required: false })} />
        </FormField>

        <FormField>
          <label>Grass Trimming</label>
          <input {...register('Treatment.grass_trimming', { required: false } as const)} />
        </FormField>

        <FormField>
          <label>Tree Pruning</label>
          <input {...register('Treatment.tree_pruning', { required: false } as const)} />
        </FormField>

        <FormField>
          <label>Pest Control</label>
          <input {...register('Treatment.pest_control', { required: false } as const)} />
        </FormField>

        <FormField>
          <label>Latitude</label>
          <input {...register('Coordinates[0]', { required: false } as const)} />
        </FormField>

        <FormField>
          <label>Longitude</label>
          <input {...register('Coordinates[1]', { required: false } as const)} />
        </FormField>

        <FormField>
          <label>Street Address</label>
          <input {...register('Address.street', { required: false })} />
        </FormField>

        <FormField>
          <label>City</label>
          <input {...register('Address.city', { required: false })} />
        </FormField>

        <FormField>
          <label>Garden Image URLs (comma-separated)</label>
          <input {...register('GardenImg', { required: false })} />
        </FormField>

        <FormField>
          <label>Garden Image Alt Text</label>
          <input {...register('GardenImgAlt', { required: false })} />
        </FormField>

        <FormField>
          <ActionButton
            type="submit"
            disabled={formState.isSubmitting}>
            Submit
          </ActionButton>
        </FormField>
        <div style={{ margin: '20% 0' }} />

      </FormContainer>
    </div>
  );
};

export default AddGardenPage;
