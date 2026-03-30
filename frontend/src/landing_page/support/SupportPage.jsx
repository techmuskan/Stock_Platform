import React, { useMemo, useState } from 'react'
import Hero from './Hero'
import RaiseTicket from './RaiseTicket'
import "../../../src/index.css"
import { useSiteContent } from "../../content/SiteContentContext";

const SupportPage = () => {
  const { supportContent } = useSiteContent();
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredCategories = useMemo(() => {
    if (!normalizedQuery) return supportContent.categories;

    return supportContent.categories
      .map((category) => {
        const matchedItems = category.items.filter((item) =>
          item.toLowerCase().includes(normalizedQuery)
        );

        if (
          category.title.toLowerCase().includes(normalizedQuery) ||
          matchedItems.length > 0
        ) {
          return {
            ...category,
            items: matchedItems.length > 0 ? matchedItems : category.items,
          };
        }

        return null;
      })
      .filter(Boolean);
  }, [normalizedQuery, supportContent]);

  const filteredAnnouncements = useMemo(() => {
    if (!normalizedQuery) return supportContent.announcements;
    return supportContent.announcements.filter((announcement) =>
      announcement.toLowerCase().includes(normalizedQuery)
    );
  }, [normalizedQuery, supportContent]);

  const filteredQuickLinks = useMemo(() => {
    if (!normalizedQuery) return supportContent.quickLinks;
    return supportContent.quickLinks.filter((link) =>
      link.toLowerCase().includes(normalizedQuery)
    );
  }, [normalizedQuery, supportContent]);

  return (
    <div>
      <Hero
        title={supportContent.hero.title}
        ticketBadge={supportContent.hero.ticketBadge}
        searchPlaceholder={supportContent.hero.searchPlaceholder}
        query={query}
        onQueryChange={setQuery}
      />
      <RaiseTicket
        categories={filteredCategories}
        announcements={filteredAnnouncements}
        quickLinks={filteredQuickLinks}
      />
    </div>
  )
}

export default SupportPage
