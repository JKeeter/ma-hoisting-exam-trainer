import { curriculum } from '@/lib/curriculum';
import SessionDetailClient from './SessionDetailClient';

export function generateStaticParams() {
  return curriculum.flatMap(r =>
    r.modules.flatMap(m =>
      m.sessions.map(s => ({ sessionId: s.id }))
    )
  );
}

export default function SessionDetailPage() {
  return <SessionDetailClient />;
}
