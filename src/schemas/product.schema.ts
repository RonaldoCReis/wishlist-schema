import z from 'zod';

export const NewProduct = z.object({
  url: z.string(),
  name: z.string(),
  listId: z.string(),
  price: z.number().optional(),
  imageUrl: z.string().optional(),
  store: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high']).optional(),
  description: z.string().optional(),
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
