import z from 'zod';
import { Products } from './product.schema';

export const NewList = z.object({
  name: z.string().min(1),
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
  }).extend({
    productCount: z.number(),
    productImages: z.array(z.string().optional()),
  })
);

export type Lists = z.infer<typeof Lists>;

export const UpdateList = NewList;

export type UpdateList = z.infer<typeof UpdateList>;
