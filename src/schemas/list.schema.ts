import z from 'zod';
import { Products } from './product.schema';

export const NewList = z.object({
  userId: z.string(),
  name: z.string(),
  visibility: z.enum(['public', 'private']),
});

export type NewList = z.infer<typeof NewList>;

export const List = NewList.extend({
  id: z.string(),
  products: Products,
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type List = z.infer<typeof List>;

export const Lists = z.array(
  List.omit({
    createdAt: true,
    updatedAt: true,
    products: true,
    userId: true,
  }).extend({
    productCount: z.number(),
    productImages: z.array(z.string().nullish()),
  })
);

export type Lists = z.infer<typeof Lists>;

export const UpdateList = NewList.omit({ userId: true });

export type UpdateList = z.infer<typeof UpdateList>;
