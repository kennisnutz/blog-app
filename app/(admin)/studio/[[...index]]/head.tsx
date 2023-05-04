export { NextStudioHead } from 'next-sanity/studio/head';

import { NextStudioHead } from 'next-sanity/studio/head';

export default function CustomStudioHead() {
  return (
    <>
      <NextStudioHead favicons={false} />
      <link
        rel="icon"
        type="imag/png"
        sizes="32x32"
        href="https://www.sanity.io/static/images/favicons/favicon-32x32.png"
      />
    </>
  );
}
