import React from 'react';
import CustomerCard from './CustomerCard';
import { Customer } from '../CustomerData/Customers';

interface CustomerListProps {
  customers: Customer[];
  selectedCustomerId: number | null;
  onSelectCustomer: (id: number) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, selectedCustomerId, onSelectCustomer }) => {
  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          isSelected={customer.id === selectedCustomerId}
          onSelect={onSelectCustomer}
        />
      ))}
    </div>
  );
};

export default CustomerList;