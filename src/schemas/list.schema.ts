import z from 'zod';
import { ProductsSchema } from './product.schema';

export const NewListSchema = z.object({
  name: z.string().min(1),
  visibility: z.enum(['public', 'private']),
});

export const ListSchema = NewListSchema.extend({
  id: z.string().cuid(),
  products: ProductsSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const ListsSchema = z.array(
  ListSchema.omit({
    createdAt: true,
    updatedAt: true,
    products: true,
  }).extend({
    productCount: z.number(),
    productImages: z.array(z.string().nullish()),
  })
);

export const UpdateListSchema = NewListSchema;

export type NewList = z.infer<typeof NewListSchema>;
export type List = z.infer<typeof ListSchema>;
export type Lists = z.infer<typeof ListsSchema>;
export type UpdateList = z.infer<typeof UpdateListSchema>;
