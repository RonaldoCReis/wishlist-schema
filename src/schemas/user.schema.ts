import z from 'zod';
import { ListsSchema } from './list.schema';

export const UpdateUserSchema = z.object({
  name: z.string().nullish(),
  profileImageUrl: z.string().nullish(),
  bio: z.string().nullish(),
});

export const NewUserSchema = UpdateUserSchema.extend({
  id: z.string(),
  email: z.string().email(),
  username: z.string(),
});

export const UserSchema = NewUserSchema.extend({
  lists: ListsSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const UsersSchema = z.array(
  UserSchema.omit({
    createdAt: true,
    updatedAt: true,
    bio: true,
    email: true,
    lists: true,
  })
);

export const UsersQuerySchema = z.object({
  search: z.string().optional(),
});

export type UpdateUser = z.infer<typeof UpdateUserSchema>;
export type NewUser = z.infer<typeof NewUserSchema>;
export type User = z.infer<typeof UserSchema>;
export type Users = z.infer<typeof UsersSchema>;

export type UsersQuery = z.infer<typeof UsersQuerySchema>;
