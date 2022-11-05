import React, { ReactNode } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import metatagImage from '../../public/metatagImage.png';

const Layout = ({
  children,
  title = 'This is the default title',
}: {
  children: ReactNode;
  title: string;
}) => (
  <div className="bg-black">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        property="og:description"
        content="👹 How How many times people called you a weirdo? They don’t know they are raritos too. We
        are special, we are unique. 7471 randomly generated with the same DNA. Minting a Rarito
        is a celebration of your inner weirdness."
        key="ogdesc"
      />
      <meta
        property="og:image"
        content="https://dtqueiuscymwbtbwincx.supabase.co/storage/v1/object/public/raritos/metatagImage.png"
        key="ogimage"
      />
    </Head>

    {children}
  </div>
);

export default Layout;
