import z from 'zod';

export const NewProductSchema = z.object({
  url: z.string().url(),
  name: z.string().min(1),
  listId: z.string().cuid(),
  price: z.number().nullish(),
  imageUrl: z.string().nullish(),
  store: z.string().nullish(),
  priority: z.enum(['low', 'medium', 'high']).nullish(),
  description: z.string().nullish(),
});

export const ProductSchema = NewProductSchema.extend({
  id: z.string().cuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const ProductsSchema = z.array(
  ProductSchema.omit({ createdAt: true, updatedAt: true, listId: true })
);

export const UpdateProductSchema = NewProductSchema;

export type NewProduct = z.infer<typeof NewProductSchema>;
export type Product = z.infer<typeof ProductSchema>;
export type Products = z.infer<typeof ProductsSchema>;
export type UpdateProduct = z.infer<typeof UpdateProductSchema>;
