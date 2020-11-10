/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  const NoFollow = (
    <meta
      name="robots"
      content="noindex, nofollow, noimageindex"
      data-no-index="true"
      key="no-index-ssr-key"
    />
  );
  setHeadComponents([NoFollow]);
};
