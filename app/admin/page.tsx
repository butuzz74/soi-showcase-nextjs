import { redirect } from 'next/navigation';

export default function AdminPage() {
  redirect('/api/auth/signin');
}