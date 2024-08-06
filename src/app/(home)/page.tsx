import Banner from '@/components/banner';
import BookList from './components/BookList';
import { Suspense } from 'react';
import Loading from '@/components/Loadin';

export default function Home() {
  return (
    <main className="">
      <Banner></Banner>
      <Suspense fallback={<Loading></Loading>}>
        <BookList></BookList>
      </Suspense>
    </main>
  );
}
