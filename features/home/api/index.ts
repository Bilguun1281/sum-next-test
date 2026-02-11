import directus from '@/lib/directus';
import { readItems, readSingleton } from '@directus/sdk';
import { HomePageData, EgovService, QuickLink, RelatedOrganization } from '../types';

export const getHomeData = async (): Promise<HomePageData> => {
  return (await directus.request(
    readSingleton("page_home", {
      fields: [
        "hero_title","hero_subtitle",
        { hero_cover: ["id", "filename_disk"] },
      ],
      next: { revalidate: 60 },
    })
  )) as HomePageData;
};


export const getEgovServices = async (): Promise<EgovService[]> => {
  return (await directus.request(
    readItems("egov_services", {
      fields: ["id", "name", "url", { logo: ["id", "filename_disk"], }, "description"],
      limit: -1,
    })
  )) as EgovService[];
};

export const getQuickLinks = async (): Promise<QuickLink[]> => {
  const res = await directus.request(
    readSingleton("page_home", {
      fields: ["quick_links"],
      next: { revalidate: 60 },
    })
  );

  // Repeater is returned as an array of objects
  return Array.isArray(res.quick_links) ? res.quick_links : [];
};


export const getRelatedOrganizations = async (): Promise<RelatedOrganization[]> => {
  const res = await directus.request(
    readItems("related_organizations", {
      fields: ["name", "href", { logo: ["id", "filename_disk"] }],
      limit: -1,
      sort: "id" // optional, can sort by name etc.
    })
  );

  return res as RelatedOrganization[];
};