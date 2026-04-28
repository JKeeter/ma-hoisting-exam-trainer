import { ReferencePageProps } from '@/components/ReferencePage';
import m2s1 from './2a-m2-s1';
import m1s1 from './2a-m1-s1';
import m1s2 from './2a-m1-s2';
import m1s3 from './2a-m1-s3';
import m2s2 from './2a-m2-s2';
import m2s3 from './2a-m2-s3';
import m3s1 from './2a-m3-s1';
import m3s2 from './2a-m3-s2';
import m3s3 from './2a-m3-s3';
import m4s1 from './2a-m4-s1';
import m4s2 from './2a-m4-s2';
import m4s3 from './2a-m4-s3';

const registry: Record<string, ReferencePageProps> = {
  '2a-m2-s1': m2s1,
  '2a-m1-s1': m1s1,
  '2a-m1-s2': m1s2,
  '2a-m1-s3': m1s3,
  '2a-m2-s2': m2s2,
  '2a-m2-s3': m2s3,
  '2a-m3-s1': m3s1,
  '2a-m3-s2': m3s2,
  '2a-m3-s3': m3s3,
  '2a-m4-s1': m4s1,
  '2a-m4-s2': m4s2,
  '2a-m4-s3': m4s3,
};

export function getReferenceContent(sessionId: string): ReferencePageProps | null {
  return registry[sessionId] ?? null;
}
