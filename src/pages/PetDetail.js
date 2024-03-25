import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from "react-router";
import petApi from '../services/petApi';

const PetDetail = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await petApi.getOne(id);
        setPet(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching pet:', error);
        setLoading(false);
      }
    };

    fetchPet();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!pet) {
    return <div>Pet not found!</div>;
  }

  return (
    <div>
      <h2>Pet Detail Page</h2>
      <div>
        <h3>{pet.name}</h3>
        <p>Type: {pet.petType}</p>
        <p>Status: {pet.status}</p>
        <p>DOB: {pet.dob}</p>
      </div>
    </div>
  );
};

export default PetDetail;