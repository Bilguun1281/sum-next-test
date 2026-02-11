export interface DirectusFile {
  id: string;
  filename_disk: string;
  filename_download: string;
  directus_files_id: string;
  filesize?: number;
  title?: string;
  type?: string;
  width?: number;
  height?: number;
}
export type Statistic = {
  label: string
  value: string
  icon: string
}

export interface GlobalSettings {
  site_name: string;
  contact_email: string;
  contact_phone?: string;
  contact_address: string;
  social_links: { platform: string; url: string }[];
  logo_light: DirectusFile; // For Dark Backgrounds (Footer)
  logo_dark: DirectusFile; // For Light Backgrounds (Header
  province_name: string;
  Statistics?: Statistic[];
}