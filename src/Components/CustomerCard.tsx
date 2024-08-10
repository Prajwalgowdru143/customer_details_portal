import React from 'react';
import { Customer } from '../CustomerData/Customers';

interface CustomerCardProps {
  customer: Customer;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer, isSelected, onSelect }) => {
  return (
    <div
      className={`customer-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(customer.id)}
    >
      <h3>{customer.name}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repudiandae doloribus doloremque earum tempore architecto.</p>
    </div>
  );
};

export default CustomerCard;