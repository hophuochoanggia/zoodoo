/* types.ts */
import type { Asset, Entry, EntryFields, EntriesQueries } from "contentful";

export type INewsFields = {
  title: EntryFields.Text;
  slug: EntryFields.Text;
  date: EntryFields.Date;
  content: EntryFields.RichText;
  coverImage: Asset;
  description: EntryFields.RichText;
};

export type INewsSkeleton = {
  contentTypeId: "news";
  fields: INewsFields;
};

export type INewsQueryResult = ReadonlyArray<INewsSkeleton>;

export type INewsItem = Entry<INewsSkeleton, undefined, string>;
export type INewItems = Entry<INewsSkeleton, undefined, string>[];

export type IHiringJobFields = {
  jobTitle: EntryFields.Text;
  jobDescription: EntryFields.RichText;
  jobSalary: EntryFields.Text;
  jobRequirement: EntryFields.RichText;
  jobBenefit: EntryFields.RichText;
  employmentStatus: EntryFields.Text;
  slug: EntryFields.Text;
  expiredDate: EntryFields.Date;
};

export type IHiringJobSkeleton = {
  contentTypeId: "hiring";
  fields: IHiringJobFields;
};

export type IHiringJobQueryResult = ReadonlyArray<IHiringJobSkeleton>;
