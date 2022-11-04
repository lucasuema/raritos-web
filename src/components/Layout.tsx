import React, { ReactNode } from 'react';

import Head from 'next/head';

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
        content="Experimenting with the web and metaverse"
        key="ogdesc"
      />
      <meta
        property="og:image"
        content="https://dtqueiuscymwbtbwincx.supabase.co/storage/v1/object/public/ecoterreans-metatag/meta-tag-image.png?t=2022-09-30T17%3A46%3A06.794Z"
        key="ogimage"
      />
    </Head>

    {children}
  </div>
);

export default Layout;
