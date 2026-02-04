export interface DirectusFile {
  id: string;
  filename_disk: string;
  title?: string;
  type?: string;
  width?: number;
  height?: number;
}
export interface GlobalSettings {
  title: string;
  description: string;
  logo?: DirectusFile;
}
