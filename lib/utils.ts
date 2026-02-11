import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getAssetUrl = (filename: string) => {
  if (!filename) return "";
  return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${filename}`;
};