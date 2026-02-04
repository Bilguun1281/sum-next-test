import {directus} from './directus';
import {GlobalSettings} from '@/types';
import {readSingleton} from '@directus/sdk';

export const getGlobals = async (): Promise<GlobalSettings> => {
  return (await directus.request(
    readSingleton("globals", {
      fields: [
        "*", // Get all top-level text fields
        // Deeply expand the nested image objects to get their filenames
        { logo: ["id", "filename_disk", "title"] },
        { title: [] },
        { description: [] },
      ],
      // Next.js 16 Cache Policy: Revalidate every 60 seconds

      next: { revalidate: 60 },
    })
  )) as GlobalSettings;
};