import { z } from 'zod';
const Image = z
  .object({
    height: z.string().optional(),
    url: z.string().optional(),
    width: z.string().optional(),
    type: z.string().optional(),
  })
  .optional();

const Offer = z
  .object({
    '@type': z.string().optional(),
    sku: z.string().optional(),
    availability: z.string().optional(),
    price: z.number().optional(),
    priceCurrency: z.string().optional(),
    url: z.string().optional(),
  })
  .optional();

export const OpenGraph = z.object({
  success: z.boolean(),
  ogSiteName: z.string().optional(),
  ogUrl: z.string().optional(),
  ogTitle: z.string().optional(),
  ogType: z.string().optional(),
  ogDescription: z.string().optional(),
  ogPriceAmount: z.string().optional(),
  ogPriceCurrency: z.string().optional(),
  twitterCard: z.string().optional(),
  twitterTitle: z.string().optional(),
  twitterSite: z.string().optional(),
  twitterDescription: z.string().optional(),
  ogImage: z.array(Image).optional().or(Image),
  ogLocale: z.string().optional(),
  favicon: z.string().optional(),
  charset: z.string().optional(),
  jsonLD: z
    .array(
      z
        .object({
          '@context': z.string().optional(),
          '@type': z.string().optional(),
          name: z.string().optional(),
          url: z.string().optional(),
          image: z.array(z.string().optional()).or(z.string().optional()),
          description: z.string().optional(),
          sku: z.string().optional(),
          brand: z
            .object({
              '@type': z.string().optional(),
              name: z.string().optional(),
            })
            .optional(),
          offers: z.array(Offer).optional().or(Offer),
        })
        .optional()
    )
    .optional(),
  requestUrl: z.string().optional(),
});

export type OpenGraph = z.infer<typeof OpenGraph>;
