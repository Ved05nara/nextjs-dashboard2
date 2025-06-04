'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/app/ui/button';

export default function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    customerId: '',
    amount: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally call createInvoice(formData)
    setIsSubmitted(true);
    setFormData({ customerName: '', customerId: '', amount: '' }); // Reset form
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="rounded-md bg-green-50 p-4">
        <div className="flex items-center">
          <h3 className="text-lg font-medium text-green-800">
            Invoice created successfully!
          </h3>
        </div>
        <div className="mt-4 flex justify-end">
          <Link
            href="/dashboard/invoices"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Back to Invoices
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h1 className="text-2xl font-semibold">Create Invoice</h1>
      <p className="text-sm text-gray-500">
        Fill out the form below to create a new invoice.
      </p>
      
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customerName" className="mb-2 block text-sm font-medium">
            Customer Name
          </label>
          <input
            id="customerName"
            name="customerName"
            type="text"
            value={formData.customerName}
            onChange={handleChange}
            className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
            placeholder="Enter customer name"
            required
          />
        </div>

        {/* Customer ID */}
        <div className="mb-4">
          <label htmlFor="customerId" className="mb-2 block text-sm font-medium">
            Customer ID
          </label>
          <input
            id="customerId"
            name="customerId"
            type="text"
            value={formData.customerId}
            onChange={handleChange}
            className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
            placeholder="Enter customer ID"
            required
          />
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Amount
          </label>
          <input
            id="amount"
            name="amount"
            type="number"
            step="0.01"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter USD amount"
            className="peer block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
            required
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Invoice</Button>
      </div>
    </form>
  );
}