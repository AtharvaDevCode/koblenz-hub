
export type HubLink = {
  title: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  category: "OLAT" | "Materials";
  url: string;
};

export const links: HubLink[] = [
  // OLAT
  {
    title: "EWADIS",
    slug: "ewadis",
    description: "Engineering Web and Data-intensive Systems",
    icon: "Globe",
    color: "cyan",
    category: "OLAT",
    url: "https://olat.vcrp.de/auth/RepositoryEntry/5334401100/CourseNode/100528440399098",
  },
  {
    title: "Machine Learning",
    slug: "ml",
    description: "Machine Learning",
    icon: "BrainCircuit",
    color: "blue",
    category: "OLAT",
    url: "https://olat.vcrp.de/auth/RepositoryEntry/5142085898/CourseNode/108607582049441",
  },
  {
    title: "German A1.1",
    slug: "german-a11",
    description: "German language course",
    icon: "Languages",
    color: "orange",
    category: "OLAT",
    url: "https://olat.vcrp.de/auth/RepositoryEntry/4969201926/CourseNode/112135580357044",
  },
  {
    title: "Introduction to Web Science",
    slug: "web-science",
    description: "Introduction to Web Science",
    icon: "Globe",
    color: "purple",
    category: "OLAT",
    url: "https://olat.vcrp.de/auth/RepositoryEntry/5318476840/CourseNode/106434573746123",
  },
  {
    title: "Data Science",
    slug: "ds",
    description: "Data Science",
    icon: "Database",
    color: "emerald",
    category: "OLAT",
    url: "https://olat.vcrp.de/auth/RepositoryEntry/5318476832/CourseNode/106136292271536",
  },

  // MATERIALS
  {
    title: "EWADIS",
    slug: "ewadis-materials",
    description: "Course materials",
    icon: "Folder",
    color: "cyan",
    category: "Materials",
    url: "https://mega.nz/folder/XDBFSKwL#o3BMQCGD-nyq6rheqmP0qQ",
  },
  {
    title: "Machine Learning",
    slug: "ml-materials",
    description: "Course materials",
    icon: "Folder",
    color: "blue",
    category: "Materials",
    url: "https://mega.nz/folder/LT5SAZbT#1HRZ8ebeBMSk30a1En9zBw",
  },
  {
    title: "German A1.1",
    slug: "german-materials",
    description: "Course materials",
    icon: "Folder",
    color: "orange",
    category: "Materials",
    url: "https://mega.nz/",
  },
  {
    title: "Web Science",
    slug: "web-science-materials",
    description: "Course materials",
    icon: "Folder",
    color: "purple",
    category: "Materials",
    url: "https://mega.nz/",
  },
  {
    title: "Data Science",
    slug: "ds-materials",
    description: "Course materials",
    icon: "Folder",
    color: "emerald",
    category: "Materials",
    url: "https://mega.nz/",
  },
];
