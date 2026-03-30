import React, { createContext, useContext, useEffect, useState } from "react";
import defaultSiteContent from "./siteContent";

const SiteContentContext = createContext(defaultSiteContent);

export const SiteContentProvider = ({ children }) => {
  const [content, setContent] = useState(defaultSiteContent);

  useEffect(() => {
    let ignore = false;

    const loadContent = async () => {
      try {
        const apiBaseUrl =
          import.meta.env.VITE_API_BASE_URL || window.location.origin;
        const res = await fetch(`${apiBaseUrl}/api/content/site`);
        if (!res.ok) return;
        const data = await res.json();
        if (!ignore) {
          setContent((prev) => ({ ...prev, ...data }));
        }
      } catch (_error) {
      }
    };

    loadContent();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <SiteContentContext.Provider value={content}>
      {children}
    </SiteContentContext.Provider>
  );
};

export const useSiteContent = () => useContext(SiteContentContext);
