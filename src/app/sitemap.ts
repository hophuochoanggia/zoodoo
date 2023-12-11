import { initContentfulClient } from "@/lib/contentful";

import { INewsSkeleton } from "@/types/contentful";

export default async function sitemap() {
  const SITE_URL = process.env.SITE_URL || "www.zoodoodalat.com";

  const response = await initContentfulClient.getEntries<INewsSkeleton>({
    content_type: "news",
    order: ["-sys.createdAt"],
  });

  const sitesURL = response.items.map((item) => ({
    url: SITE_URL + "/tin-tuc-va-hoat-dong/" + item.fields.slug,
    lastModified: new Date(item.sys.updatedAt),
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
    },
    {
      url: SITE_URL + "/ghe-tham-zoodoo",
      lastModified: new Date(),
    },
    {
      url: SITE_URL + "/lien-he-zoodoo",
      lastModified: new Date(),
    },
    {
      url: SITE_URL + "/tin-tuc-va-hoat-dong",
      lastModified: new Date(),
    },
    {
      url: SITE_URL + "/trai-nghiem-zoodoo",
      lastModified: new Date(),
    },
    {
      url: SITE_URL + "/tuyen-dung",
      lastModified: new Date(),
    },
    {
      url: SITE_URL + "/ve-zoo-doo",
      lastModified: new Date(),
    },
  ].concat(sitesURL);
}
