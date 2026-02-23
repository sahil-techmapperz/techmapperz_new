import { redirect } from 'next/navigation';

// Redirect /profile to /portfolios since profile pages are for individual items
export default function ProfileIndexPage() {
  redirect('/portfolios');
}