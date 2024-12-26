import { z } from 'zod';

export const OpenGraph = z.object({
  success: z.boolean(),
  ogSiteName: z.string().nullish(),
  ogUrl: z.string().nullish(),
  ogTitle: z.string().nullish(),
  ogType: z.string().nullish(),
  ogDescription: z.string().nullish(),
  ogPriceAmount: z.string().nullish(),
  ogPriceCurrency: z.string().nullish(),
  twitterCard: z.string().nullish(),
  twitterTitle: z.string().nullish(),
  twitterDescription: z.string().nullish(),
  ogImage: z.array(
    z
      .object({
        height: z.string().nullish(),
        url: z.string().nullish(),
        width: z.string().nullish(),
        type: z.string().nullish(),
      })
      .nullish()
  ),
  ogLocale: z.string().nullish(),
  favicon: z.string().nullish(),
  charset: z.string().nullish(),
  jsonLD: z
    .array(
      z
        .object({
          '@context': z.string().nullish(),
          '@type': z.string().nullish(),
          name: z.string().nullish(),
          url: z.string().nullish(),
          image: z.array(z.string().nullish()),
          description: z.string().nullish(),
          sku: z.string().nullish(),
          brand: z
            .object({
              '@type': z.string().nullish(),
              name: z.string().nullish(),
            })
            .nullish(),
          offers: z
            .array(
              z
                .object({
                  '@type': z.string().nullish(),
                  sku: z.string().nullish(),
                  availability: z.string().nullish(),
                  price: z.number().nullish(),
                  priceCurrency: z.string().nullish(),
                  url: z.string().nullish(),
                })
                .nullish()
            )
            .nullish(),
        })
        .nullish()
    )
    .nullish(),
  requestUrl: z.string().nullish(),
});

export type OpenGraph = z.infer<typeof OpenGraph>;
