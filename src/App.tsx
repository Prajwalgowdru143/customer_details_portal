import React, { useState } from 'react';
import { Customer } from './CustomerData/Customers';
import CustomerList from './Components/CustomerList';
import CustomerDetails from './Components/CustomerDetails';
const App: React.FC = () => {
  const [customers] = useState<Customer[]>([
    {
      id: 1,
      name: "John Doe",
      title: "CEO",
      address: "123 Main St, Springfield, USA"
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "CTO",
      address: "456 Elm St, Springfield, USA"
    },
    {
      id: 3,
      name: "Alice Johnson",
      title: "CFO",
      address: "789 Maple St, Springfield, USA"
    },
    {
      id: 4,
      name: "Bob Brown",
      title: "COO",
      address: "101 Oak St, Springfield, USA"
    },
    {
      id: 5,
      name: "Charlie Green",
      title: "VP of Sales",
      address: "202 Pine St, Springfield, USA"
    },
    {
      id: 6,
      name: "Diana White",
      title: "VP of Marketing",
      address: "303 Cedar St, Springfield, USA"
    },
    {
      id: 7,
      name: "Eve Black",
      title: "VP of HR",
      address: "404 Birch St, Springfield, USA"
    },
    {
      id: 8,
      name: "Frank Blue",
      title: "VP of Engineering",
      address: "505 Ash St, Springfield, USA"
    },
    {
      id: 9,
      name: "Grace Gold",
      title: "VP of Product",
      address: "606 Walnut St, Springfield, USA"
    },
    {
      id: 10,
      name: "Henry Silver",
      title: "VP of Finance",
      address: "707 Chestnut St, Springfield, USA"
    },
  ]);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

  const selectedCustomer = customers.find(customer => customer.id === selectedCustomerId) || null;

  return (
    <div className="app-container">
      <CustomerList
        customers={customers}
        selectedCustomerId={selectedCustomerId}
        onSelectCustomer={setSelectedCustomerId}
      />
      <CustomerDetails customer={selectedCustomer} />
    </div>
  );
};

export default App;
