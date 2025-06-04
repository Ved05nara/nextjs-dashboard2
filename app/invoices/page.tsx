'use client';

import dynamic from 'next/dynamic';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';

// Lazy load heavier components
const Search = dynamic(() => import('@/app/ui/search'), { 
  loading: () => <div className="w-full h-[42px] bg-gray-100 rounded-md animate-pulse" />
});
const Table = dynamic(() => import('@/app/ui/invoices/table'), {
  loading: () => <InvoicesTableSkeleton />
});
const Pagination = dynamic(() => import('@/app/ui/invoices/pagination'));
const CreateInvoice = dynamic(() => import('@/app/ui/invoices/buttons'));

export default function Page({
  searchParams = {}
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        {/* Preload font to avoid layout shift */}
        <h1 className={`${lusitana.className} text-2xl`} style={{ fontFamily: 'lusitana, sans-serif' }}>
          Invoices
        </h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      
      {/* Suspense boundary for the table */}
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>

      {/* Pagination with dynamic data */}
      <Suspense fallback={<div className="h-[40px] mt-5" />}>
        <PaginationWrapper query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}

async function PaginationWrapper({ query, currentPage }: { query: string; currentPage: number }) {
  // Only fetch what's needed for pagination
  const totalPages = await fetchInvoicesPages(query);
  return (
    <div className="mt-5 flex w-full justify-center">
      <Pagination totalPages={totalPages} />
    </div>
  );
}