import z from 'zod';

export const NewProduct = z.object({
  url: z.string(),
  name: z.string(),
  listId: z.string(),
  price: z.number().nullish(),
  imageUrl: z.string().nullish(),
  store: z.string().nullish(),
  priority: z.enum(['low', 'medium', 'high']).nullish(),
  description: z.string().nullish(),
});

export type NewProduct = z.infer<typeof NewProduct>;

export const Product = NewProduct.extend({
  id: z.string(),
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
