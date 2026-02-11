import { DirectusFile } from "@/types";

export interface HomePageData {
  hero_title: string;
  hero_subtitle: string;
  hero_cover: DirectusFile;
}

export interface QuickLink {
  title: string;
  link: string;
}
 export interface RelatedOrganization {
  name: string;
  href: string;
  logo: DirectusFile; // Directus image object
};

export interface EgovService {
  id: string;
  name: string;
  url: string;
  description: string;
  logo: DirectusFile;
}