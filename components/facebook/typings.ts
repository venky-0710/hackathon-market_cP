export type Budget = Partial<{
  dailyBudget: number;
  startDate: Date;
  endDate: Date;
}>;

export type onChange = (
  key: string,
  value:
    | Date
    | undefined
    | string
    | number
    | { id: number; label: string }[]
    | number[]
) => void;

export enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other"
}
export type AudienceType = Partial<{
  targetedLocations: { id: number; label: string }[];
  excludedLocations: { id: number; label: string }[];
  gender: Gender;
  ageGroup: string;
}>;

export type AdDetailsType = Partial<{
  description: string;
  headLine: string;
  primaryText: string;
}>;

export type Form1 = Partial<{
  companyName: string;
  tagline: string;
}>;

export type Form2 = Partial<{
  desc?: string;
}>;

export type Form3 = Partial<{
  selectedImgs?: number[];
}>;

export type FormDetails = Partial<{
  companyName?: string;
  tagline?: string;
  desc?: string;
  selectedImgs?: number[];
}>;
