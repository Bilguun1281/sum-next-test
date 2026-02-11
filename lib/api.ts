import { GlobalSettings } from '@/src/types';
import directus from './directus';
import {readSingleton} from '@directus/sdk';

export const getGlobals = async (): Promise<GlobalSettings> => {
  return (await directus.request(
    readSingleton("globals", {
      fields: [
        "*", // Get all top-level text fields
        // Deeply expand the nested image objects to get their filenames
        { logo_light: ["id", "filename_disk", "title"] },
        { logo_dark: ["id", "filename_disk", "title"] },
        { social_links: ["platform", "url"] },
        { contact_phone: [] },
        { contact_email: [] },
        { site_name: [] },
        { contact_address: [] },
        { province_name: []},
        { Statistics: ["label", "value", "icon"] },
        
      ],
      // Next.js 16 Cache Policy: Revalidate every 60 seconds

      next: { revalidate: 60 },
    })
  )) as GlobalSettings;
};