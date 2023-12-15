import { initContentfulClient } from "@/lib/contentful";

import { INewsSkeleton } from "@/types/contentful";

export default async function sitemap() {
  const SITE_URLL = process.env.SITE_URLL || "https://www.zoodoodalat.com";

  const response = await initContentfulClient.getEntries<INewsSkeleton>({
    content_type: "news",
    order: ["-sys.createdAt"],
  });

  const sitesURL = response.items.map((item) => ({
    url: SITE_URLL + "/tin-tuc-va-hoat-dong/" + item.fields.slug,
    lastModified: new Date(item.sys.updatedAt),
  }));

  return [
    {
      url: SITE_URLL,
      lastModified: new Date(),
    },
    {
      url: SITE_URLL + "/ghe-tham-zoodoo",
      lastModified: new Date(),
    },
    {
      url: SITE_URLL + "/lien-he-zoodoo",
      lastModified: new Date(),
    },
    {
      url: SITE_URLL + "/tin-tuc-va-hoat-dong",
      lastModified: new Date(),
    },
    {
      url: SITE_URLL + "/trai-nghiem-zoodoo",
      lastModified: new Date(),
    },
    {
      url: SITE_URLL + "/tuyen-dung",
      lastModified: new Date(),
    },
    {
      url: SITE_URLL + "/ve-zoo-doo",
      lastModified: new Date(),
    },
  ].concat(sitesURL);
}
