import z from 'zod';
import { ListsSchema } from './list.schema';

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const UpdateUserImageSchema = z.object({
  profileImage: z
    .any()
    .refine((files) => files?.length == 1, 'Image is required.')
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      '.jpg, .jpeg, .png and .webp files are accepted.'
    ),
});

export const UpdateUserSchema = z.object({
  name: z.string().nullish(),
  bio: z.string().max(150).nullish(),
});

export const NewUserSchema = UpdateUserSchema.extend({
  id: z.string(),
  email: z.string().email(),
  username: z.string(),
  profileImageUrl: z.string().nullish(),
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
export type UpdateUserImage = z.infer<typeof UpdateUserImageSchema>;

export type UsersQuery = z.infer<typeof UsersQuerySchema>;
