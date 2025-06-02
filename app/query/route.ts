import postgres from 'postgres';

// Initialize connection to the database
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// Function to run a SQL query
async function listInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;
  return data;
}

// API route handler
export async function GET() {
  try {
    const invoices = await listInvoices();
    return Response.json(invoices);
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
