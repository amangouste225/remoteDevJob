export type JobItem = {
  id: number;
  company: string;
  badgeLetters: string;
  daysAgo: number;
  date: string;
  relevanceScore: number;
  title: string;
};

export type JobItemsExpanded = JobItem & {
  description: string;
  companyURL: string;
  coverImgURL: string;
  duration: string;
  location: string;
  qualifications: string[];
  salary: string;
  reviews: string[];
};
