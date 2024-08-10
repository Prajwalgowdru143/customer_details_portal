import React from 'react';
import PhotoGrid from './PhotoGrid';
import { Customer } from '../CustomerData/Customers';

interface CustomerDetailsProps {
  customer: Customer | null;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  if (!customer) {
    return <div className="customer-details">Click on the left list to see the details...</div>;
  }

  return (
    <div className="customer-details">
      <div className='headingDetails'>
      <h2>{customer.name}, </h2>
      <p>{customer.title}, </p>
      <p>{customer.address}</p>
      </div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, neque rem! Dolorum alias, earum quam inventore, laudantium maiores reprehenderit error et amet accusamus culpa commodi, quisquam ipsum? Sit, sequi tempore.</p>
      <PhotoGrid />
    </div>
  );
};

export default CustomerDetails;