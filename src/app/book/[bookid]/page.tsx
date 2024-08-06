import React from 'react';
import { Book } from '@/types';
import Image from 'next/image';
import type { Metadata } from 'next';
import DownloadButton from './components/downloadbtn';

export const metadata: Metadata = {
  title: 'E-book',
  description: 'e-book reader in online pdf',
};

const SingleBook = async ({ params }: { params: { bookid: string } }) => {
  let book;

  try {
    const resp = await fetch(
      `http://localhost:4000/api/books/${params.bookid}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    book = await resp.json();
  } catch (error: any) {
    throw new Error('Error fetching Book');
  }

  return (
    <div>
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-10 px-5 py-10">
        <div className="col-span-2 pr-16 text-black">
          <h2 className="mb-5 text-5xl font-bold leading-[1.1]">
            {book?.title}
          </h2>
          <span className="font-semibold">by {book?.author.name}</span>
          <p className="mt-5 text-lg leading-8">{book?.description}</p>
          <DownloadButton fileLink={book.file} />
        </div>
        <div className="flex justify-end">
          <Image
            src={book.coverImage}
            alt={book.title}
            className="rounded-md border"
            height={0}
            width={0}
            sizes="100vw"
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
