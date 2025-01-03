import z from 'zod';

export const NewProduct = z.object({
  url: z.string().url(),
  name: z.string().min(1),
  listId: z.string().cuid(),
  price: z.number().nullish(),
  imageUrl: z.string().optional(),
  store: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high']).optional(),
  description: z.string().optional(),
});

export type NewProduct = z.infer<typeof NewProduct>;

export const Product = NewProduct.extend({
  id: z.string().cuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Product = z.infer<typeof Product>;

export const Products = z.array(
  Product.omit({ createdAt: true, updatedAt: true, listId: true })
);

export type Products = z.infer<typeof Products>;

export const UpdateProduct = NewProduct;

export type UpdateProduct = z.infer<typeof UpdateProduct>;
