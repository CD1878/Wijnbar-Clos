export interface NavItem {
  label: string;
  path: string;
}

export interface FormData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  date?: string;
  guests?: number;
  type?: string; // For tasting type
  cv?: FileList; // For jobs
}

export interface SectionProps {
  className?: string;
}