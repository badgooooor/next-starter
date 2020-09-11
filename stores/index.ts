import { useStaticRendering } from "mobx-react";

import Data from "./Data";
import { useMemo } from "react";

const isServer = typeof window === "undefined";
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer);

let store: any = null;

function initializeStore(
  initialData = { data: "Next.js is up and running 👋" }
) {
  if (isServer) {
    return {
      data: new Data(initialData.data),
    };
  }

  if (store === null) {
    store = {
      data: new Data(initialData.data),
    };
  }

  return store;
}

export function useStore(initialState: any) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);

  return store;
}
