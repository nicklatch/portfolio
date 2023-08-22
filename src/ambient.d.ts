// Interfaces
declare interface Project {
  title: string;
  description: string;
  screenshot?: Screenshot;
}

declare interface Screenshot {
  src: string;
  alt: string;
}

// Types
declare type Path = {
  name: string;
  path: string;
}