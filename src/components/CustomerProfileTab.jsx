import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Addresses from './CustomerProfileTabs/Addresses';
import OptIns from './CustomerProfileTabs/OptIns';
import Relationships from './CustomerProfileTabs/Relationships';
import Donations from './CustomerProfileTabs/Donations';
import Memberships from './CustomerProfileTabs/Memberships';
import Subscriptions from './CustomerProfileTabs/Subscriptions';
import TicketHistory from './CustomerProfileTabs/TicketHistory';

function CustomerProfileTab() {
  const location = useLocation();
  const { customer } = location.state || { customer: null };
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('addresses');

  if (!customer) {
    return <div>No customer selected.</div>;
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="customer-profile-tab">
      <h2>Customer Profile</h2>
      <p><strong>Name:</strong> {customer.firstName} {customer.lastName}</p>
      <p><strong>Email:</strong> {customer.email}</p>

      <button onClick={toggleEdit}>{isEditing ? 'View' : 'Edit'}</button>

      <div className="profile-tabs">
        <button onClick={() => setActiveTab('addresses')}>Addresses</button>
        <button onClick={() => setActiveTab('opt-ins')}>Opt-Ins</button>
        <button onClick={() => setActiveTab('relationships')}>Relationships</button>
        <button onClick={() => setActiveTab('donations')}>Donations</button>
        <button onClick={() => setActiveTab('memberships')}>Memberships</button>
        <button onClick={() => setActiveTab('subscriptions')}>Subscriptions</button>
        <button onClick={() => setActiveTab('ticket-history')}>Ticket History</button>
      </div>

      <div className="tab-content">
        {activeTab === 'addresses' && <Addresses />}
        {activeTab === 'opt-ins' && <OptIns />}
        {activeTab === 'relationships' && <Relationships />}
        {activeTab === 'donations' && <Donations />}
        {activeTab === 'memberships' && <Memberships />}
        {activeTab === 'subscriptions' && <Subscriptions />}
        {activeTab === 'ticket-history' && <TicketHistory />}
      </div>
    </div>
  );
}

export default CustomerProfileTab;
