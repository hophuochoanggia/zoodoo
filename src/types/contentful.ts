/* types.ts */
import { Document } from "@contentful/rich-text-types";
import * as contentful from "contentful";
import { Entry } from "contentful";

export type INewsSkeleton = {
  contentTypeId: "news";
  fields: {
    title: contentful.EntryFieldTypes.Text;
    slug: contentful.EntryFieldTypes.Text;
    date: contentful.EntryFieldTypes.Date;
    content: contentful.EntryFieldTypes.RichText;
    coverImage: contentful.EntryFieldTypes.Object;
  };
};

export type INewsQueryResult = ReadonlyArray<INewsSkeleton>;

export type INewsItem = Entry<INewsSkeleton, undefined, string>;
export type INewItems = Entry<INewsSkeleton, undefined, string>[];

