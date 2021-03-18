import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type CartItemRelateToManyInput = {
  create?: Maybe<Array<Maybe<CartItemCreateInput>>>;
  connect?: Maybe<Array<Maybe<CartItemWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<CartItemWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type OrderRelateToManyInput = {
  create?: Maybe<Array<Maybe<OrderCreateInput>>>;
  connect?: Maybe<Array<Maybe<OrderWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<OrderWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type RoleRelateToOneInput = {
  create?: Maybe<RoleCreateInput>;
  connect?: Maybe<RoleWhereUniqueInput>;
  disconnect?: Maybe<RoleWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type ProductRelateToManyInput = {
  create?: Maybe<Array<Maybe<ProductCreateInput>>>;
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  A keystone list  */
export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  cart: Array<CartItem>;
  _cartMeta?: Maybe<_QueryMeta>;
  orders: Array<Order>;
  _ordersMeta?: Maybe<_QueryMeta>;
  role?: Maybe<Role>;
  products: Array<Product>;
  _productsMeta?: Maybe<_QueryMeta>;
  passwordResetToken_is_set?: Maybe<Scalars['Boolean']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
};


/**  A keystone list  */
export type UserCartArgs = {
  where?: Maybe<CartItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortCartItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type User_CartMetaArgs = {
  where?: Maybe<CartItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortCartItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type UserOrdersArgs = {
  where?: Maybe<OrderWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrdersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type User_OrdersMetaArgs = {
  where?: Maybe<OrderWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrdersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type UserProductsArgs = {
  where?: Maybe<ProductWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type User_ProductsMetaArgs = {
  where?: Maybe<ProductWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_i?: Maybe<Scalars['String']>;
  email_not_i?: Maybe<Scalars['String']>;
  email_contains_i?: Maybe<Scalars['String']>;
  email_not_contains_i?: Maybe<Scalars['String']>;
  email_starts_with_i?: Maybe<Scalars['String']>;
  email_not_starts_with_i?: Maybe<Scalars['String']>;
  email_ends_with_i?: Maybe<Scalars['String']>;
  email_not_ends_with_i?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  /**  condition must be true for all nodes  */
  cart_every?: Maybe<CartItemWhereInput>;
  /**  condition must be true for at least 1 node  */
  cart_some?: Maybe<CartItemWhereInput>;
  /**  condition must be false for all nodes  */
  cart_none?: Maybe<CartItemWhereInput>;
  /**  condition must be true for all nodes  */
  orders_every?: Maybe<OrderWhereInput>;
  /**  condition must be true for at least 1 node  */
  orders_some?: Maybe<OrderWhereInput>;
  /**  condition must be false for all nodes  */
  orders_none?: Maybe<OrderWhereInput>;
  role?: Maybe<RoleWhereInput>;
  role_is_null?: Maybe<Scalars['Boolean']>;
  /**  condition must be true for all nodes  */
  products_every?: Maybe<ProductWhereInput>;
  /**  condition must be true for at least 1 node  */
  products_some?: Maybe<ProductWhereInput>;
  /**  condition must be false for all nodes  */
  products_none?: Maybe<ProductWhereInput>;
  passwordResetToken_is_set?: Maybe<Scalars['Boolean']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_not?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_lt?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_lte?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_gt?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_gte?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  passwordResetIssuedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_not?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_lt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_lte?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_gt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_gte?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  passwordResetRedeemedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UserWhereUniqueInput = {
  id: Scalars['ID'];
};

export const SortUsersBy = {
  IdAsc: 'id_ASC',
  IdDesc: 'id_DESC',
  NameAsc: 'name_ASC',
  NameDesc: 'name_DESC',
  EmailAsc: 'email_ASC',
  EmailDesc: 'email_DESC',
  CartAsc: 'cart_ASC',
  CartDesc: 'cart_DESC',
  OrdersAsc: 'orders_ASC',
  OrdersDesc: 'orders_DESC',
  RoleAsc: 'role_ASC',
  RoleDesc: 'role_DESC',
  ProductsAsc: 'products_ASC',
  ProductsDesc: 'products_DESC',
  PasswordResetIssuedAtAsc: 'passwordResetIssuedAt_ASC',
  PasswordResetIssuedAtDesc: 'passwordResetIssuedAt_DESC',
  PasswordResetRedeemedAtAsc: 'passwordResetRedeemedAt_ASC',
  PasswordResetRedeemedAtDesc: 'passwordResetRedeemedAt_DESC'
} as const;

export type SortUsersBy = typeof SortUsersBy[keyof typeof SortUsersBy];
export type UserUpdateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  cart?: Maybe<CartItemRelateToManyInput>;
  orders?: Maybe<OrderRelateToManyInput>;
  role?: Maybe<RoleRelateToOneInput>;
  products?: Maybe<ProductRelateToManyInput>;
  passwordResetToken?: Maybe<Scalars['String']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
};

export type UsersUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};

export type UserCreateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  cart?: Maybe<CartItemRelateToManyInput>;
  orders?: Maybe<OrderRelateToManyInput>;
  role?: Maybe<RoleRelateToOneInput>;
  products?: Maybe<ProductRelateToManyInput>;
  passwordResetToken?: Maybe<Scalars['String']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
};

export type UsersCreateInput = {
  data?: Maybe<UserCreateInput>;
};

export type ProductImageRelateToOneInput = {
  create?: Maybe<ProductImageCreateInput>;
  connect?: Maybe<ProductImageWhereUniqueInput>;
  disconnect?: Maybe<ProductImageWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type UserRelateToOneInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<UserWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  A keystone list  */
export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  photo?: Maybe<ProductImage>;
  user?: Maybe<User>;
};

export type ProductWhereInput = {
  AND?: Maybe<Array<Maybe<ProductWhereInput>>>;
  OR?: Maybe<Array<Maybe<ProductWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_i?: Maybe<Scalars['String']>;
  description_not_i?: Maybe<Scalars['String']>;
  description_contains_i?: Maybe<Scalars['String']>;
  description_not_contains_i?: Maybe<Scalars['String']>;
  description_starts_with_i?: Maybe<Scalars['String']>;
  description_not_starts_with_i?: Maybe<Scalars['String']>;
  description_ends_with_i?: Maybe<Scalars['String']>;
  description_not_ends_with_i?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  status_not?: Maybe<Scalars['String']>;
  status_contains?: Maybe<Scalars['String']>;
  status_not_contains?: Maybe<Scalars['String']>;
  status_starts_with?: Maybe<Scalars['String']>;
  status_not_starts_with?: Maybe<Scalars['String']>;
  status_ends_with?: Maybe<Scalars['String']>;
  status_not_ends_with?: Maybe<Scalars['String']>;
  status_i?: Maybe<Scalars['String']>;
  status_not_i?: Maybe<Scalars['String']>;
  status_contains_i?: Maybe<Scalars['String']>;
  status_not_contains_i?: Maybe<Scalars['String']>;
  status_starts_with_i?: Maybe<Scalars['String']>;
  status_not_starts_with_i?: Maybe<Scalars['String']>;
  status_ends_with_i?: Maybe<Scalars['String']>;
  status_not_ends_with_i?: Maybe<Scalars['String']>;
  status_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  status_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  price?: Maybe<Scalars['Int']>;
  price_not?: Maybe<Scalars['Int']>;
  price_lt?: Maybe<Scalars['Int']>;
  price_lte?: Maybe<Scalars['Int']>;
  price_gt?: Maybe<Scalars['Int']>;
  price_gte?: Maybe<Scalars['Int']>;
  price_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  price_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  photo?: Maybe<ProductImageWhereInput>;
  photo_is_null?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserWhereInput>;
  user_is_null?: Maybe<Scalars['Boolean']>;
};

export type ProductWhereUniqueInput = {
  id: Scalars['ID'];
};

export const SortProductsBy = {
  IdAsc: 'id_ASC',
  IdDesc: 'id_DESC',
  NameAsc: 'name_ASC',
  NameDesc: 'name_DESC',
  DescriptionAsc: 'description_ASC',
  DescriptionDesc: 'description_DESC',
  StatusAsc: 'status_ASC',
  StatusDesc: 'status_DESC',
  PriceAsc: 'price_ASC',
  PriceDesc: 'price_DESC',
  PhotoAsc: 'photo_ASC',
  PhotoDesc: 'photo_DESC',
  UserAsc: 'user_ASC',
  UserDesc: 'user_DESC'
} as const;

export type SortProductsBy = typeof SortProductsBy[keyof typeof SortProductsBy];
export type ProductUpdateInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  photo?: Maybe<ProductImageRelateToOneInput>;
  user?: Maybe<UserRelateToOneInput>;
};

export type ProductsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ProductUpdateInput>;
};

export type ProductCreateInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  photo?: Maybe<ProductImageRelateToOneInput>;
  user?: Maybe<UserRelateToOneInput>;
};

export type ProductsCreateInput = {
  data?: Maybe<ProductCreateInput>;
};

export type CloudinaryImage_File = {
  __typename?: 'CloudinaryImage_File';
  id?: Maybe<Scalars['ID']>;
  path?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  publicUrl?: Maybe<Scalars['String']>;
  publicUrlTransformed?: Maybe<Scalars['String']>;
};


export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: Maybe<CloudinaryImageFormat>;
};

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.`  */
  prettyName?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  crop?: Maybe<Scalars['String']>;
  aspect_ratio?: Maybe<Scalars['String']>;
  gravity?: Maybe<Scalars['String']>;
  zoom?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['String']>;
  y?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  fetch_format?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['String']>;
  radius?: Maybe<Scalars['String']>;
  angle?: Maybe<Scalars['String']>;
  effect?: Maybe<Scalars['String']>;
  opacity?: Maybe<Scalars['String']>;
  border?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  overlay?: Maybe<Scalars['String']>;
  underlay?: Maybe<Scalars['String']>;
  default_image?: Maybe<Scalars['String']>;
  delay?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  color_space?: Maybe<Scalars['String']>;
  dpr?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['String']>;
  density?: Maybe<Scalars['String']>;
  flags?: Maybe<Scalars['String']>;
  transformation?: Maybe<Scalars['String']>;
};

export type ProductRelateToOneInput = {
  create?: Maybe<ProductCreateInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  disconnect?: Maybe<ProductWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  A keystone list  */
export type ProductImage = {
  __typename?: 'ProductImage';
  id: Scalars['ID'];
  image?: Maybe<CloudinaryImage_File>;
  altText?: Maybe<Scalars['String']>;
  product?: Maybe<Product>;
};

export type ProductImageWhereInput = {
  AND?: Maybe<Array<Maybe<ProductImageWhereInput>>>;
  OR?: Maybe<Array<Maybe<ProductImageWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  image?: Maybe<Scalars['String']>;
  image_not?: Maybe<Scalars['String']>;
  image_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  image_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  altText?: Maybe<Scalars['String']>;
  altText_not?: Maybe<Scalars['String']>;
  altText_contains?: Maybe<Scalars['String']>;
  altText_not_contains?: Maybe<Scalars['String']>;
  altText_starts_with?: Maybe<Scalars['String']>;
  altText_not_starts_with?: Maybe<Scalars['String']>;
  altText_ends_with?: Maybe<Scalars['String']>;
  altText_not_ends_with?: Maybe<Scalars['String']>;
  altText_i?: Maybe<Scalars['String']>;
  altText_not_i?: Maybe<Scalars['String']>;
  altText_contains_i?: Maybe<Scalars['String']>;
  altText_not_contains_i?: Maybe<Scalars['String']>;
  altText_starts_with_i?: Maybe<Scalars['String']>;
  altText_not_starts_with_i?: Maybe<Scalars['String']>;
  altText_ends_with_i?: Maybe<Scalars['String']>;
  altText_not_ends_with_i?: Maybe<Scalars['String']>;
  altText_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  altText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  product?: Maybe<ProductWhereInput>;
  product_is_null?: Maybe<Scalars['Boolean']>;
};

export type ProductImageWhereUniqueInput = {
  id: Scalars['ID'];
};

export const SortProductImagesBy = {
  IdAsc: 'id_ASC',
  IdDesc: 'id_DESC',
  AltTextAsc: 'altText_ASC',
  AltTextDesc: 'altText_DESC',
  ProductAsc: 'product_ASC',
  ProductDesc: 'product_DESC'
} as const;

export type SortProductImagesBy = typeof SortProductImagesBy[keyof typeof SortProductImagesBy];
export type ProductImageUpdateInput = {
  image?: Maybe<Scalars['Upload']>;
  altText?: Maybe<Scalars['String']>;
  product?: Maybe<ProductRelateToOneInput>;
};

export type ProductImagesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ProductImageUpdateInput>;
};

export type ProductImageCreateInput = {
  image?: Maybe<Scalars['Upload']>;
  altText?: Maybe<Scalars['String']>;
  product?: Maybe<ProductRelateToOneInput>;
};

export type ProductImagesCreateInput = {
  data?: Maybe<ProductImageCreateInput>;
};

/**  A keystone list  */
export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['ID'];
  quantity?: Maybe<Scalars['Int']>;
  product?: Maybe<Product>;
  user?: Maybe<User>;
};

export type CartItemWhereInput = {
  AND?: Maybe<Array<Maybe<CartItemWhereInput>>>;
  OR?: Maybe<Array<Maybe<CartItemWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  quantity?: Maybe<Scalars['Int']>;
  quantity_not?: Maybe<Scalars['Int']>;
  quantity_lt?: Maybe<Scalars['Int']>;
  quantity_lte?: Maybe<Scalars['Int']>;
  quantity_gt?: Maybe<Scalars['Int']>;
  quantity_gte?: Maybe<Scalars['Int']>;
  quantity_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  quantity_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  product?: Maybe<ProductWhereInput>;
  product_is_null?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserWhereInput>;
  user_is_null?: Maybe<Scalars['Boolean']>;
};

export type CartItemWhereUniqueInput = {
  id: Scalars['ID'];
};

export const SortCartItemsBy = {
  IdAsc: 'id_ASC',
  IdDesc: 'id_DESC',
  QuantityAsc: 'quantity_ASC',
  QuantityDesc: 'quantity_DESC',
  ProductAsc: 'product_ASC',
  ProductDesc: 'product_DESC',
  UserAsc: 'user_ASC',
  UserDesc: 'user_DESC'
} as const;

export type SortCartItemsBy = typeof SortCartItemsBy[keyof typeof SortCartItemsBy];
export type CartItemUpdateInput = {
  quantity?: Maybe<Scalars['Int']>;
  product?: Maybe<ProductRelateToOneInput>;
  user?: Maybe<UserRelateToOneInput>;
};

export type CartItemsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<CartItemUpdateInput>;
};

export type CartItemCreateInput = {
  quantity?: Maybe<Scalars['Int']>;
  product?: Maybe<ProductRelateToOneInput>;
  user?: Maybe<UserRelateToOneInput>;
};

export type CartItemsCreateInput = {
  data?: Maybe<CartItemCreateInput>;
};

export type OrderItemRelateToManyInput = {
  create?: Maybe<Array<Maybe<OrderItemCreateInput>>>;
  connect?: Maybe<Array<Maybe<OrderItemWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<OrderItemWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  A keystone list  */
export type Order = {
  __typename?: 'Order';
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
  items: Array<OrderItem>;
  _itemsMeta?: Maybe<_QueryMeta>;
  user?: Maybe<User>;
  charge?: Maybe<Scalars['String']>;
};


/**  A keystone list  */
export type OrderItemsArgs = {
  where?: Maybe<OrderItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrderItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type Order_ItemsMetaArgs = {
  where?: Maybe<OrderItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrderItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type OrderWhereInput = {
  AND?: Maybe<Array<Maybe<OrderWhereInput>>>;
  OR?: Maybe<Array<Maybe<OrderWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  total?: Maybe<Scalars['Int']>;
  total_not?: Maybe<Scalars['Int']>;
  total_lt?: Maybe<Scalars['Int']>;
  total_lte?: Maybe<Scalars['Int']>;
  total_gt?: Maybe<Scalars['Int']>;
  total_gte?: Maybe<Scalars['Int']>;
  total_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  total_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /**  condition must be true for all nodes  */
  items_every?: Maybe<OrderItemWhereInput>;
  /**  condition must be true for at least 1 node  */
  items_some?: Maybe<OrderItemWhereInput>;
  /**  condition must be false for all nodes  */
  items_none?: Maybe<OrderItemWhereInput>;
  user?: Maybe<UserWhereInput>;
  user_is_null?: Maybe<Scalars['Boolean']>;
  charge?: Maybe<Scalars['String']>;
  charge_not?: Maybe<Scalars['String']>;
  charge_contains?: Maybe<Scalars['String']>;
  charge_not_contains?: Maybe<Scalars['String']>;
  charge_starts_with?: Maybe<Scalars['String']>;
  charge_not_starts_with?: Maybe<Scalars['String']>;
  charge_ends_with?: Maybe<Scalars['String']>;
  charge_not_ends_with?: Maybe<Scalars['String']>;
  charge_i?: Maybe<Scalars['String']>;
  charge_not_i?: Maybe<Scalars['String']>;
  charge_contains_i?: Maybe<Scalars['String']>;
  charge_not_contains_i?: Maybe<Scalars['String']>;
  charge_starts_with_i?: Maybe<Scalars['String']>;
  charge_not_starts_with_i?: Maybe<Scalars['String']>;
  charge_ends_with_i?: Maybe<Scalars['String']>;
  charge_not_ends_with_i?: Maybe<Scalars['String']>;
  charge_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  charge_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type OrderWhereUniqueInput = {
  id: Scalars['ID'];
};

export const SortOrdersBy = {
  IdAsc: 'id_ASC',
  IdDesc: 'id_DESC',
  TotalAsc: 'total_ASC',
  TotalDesc: 'total_DESC',
  ItemsAsc: 'items_ASC',
  ItemsDesc: 'items_DESC',
  UserAsc: 'user_ASC',
  UserDesc: 'user_DESC',
  ChargeAsc: 'charge_ASC',
  ChargeDesc: 'charge_DESC'
} as const;

export type SortOrdersBy = typeof SortOrdersBy[keyof typeof SortOrdersBy];
export type OrderUpdateInput = {
  total?: Maybe<Scalars['Int']>;
  items?: Maybe<OrderItemRelateToManyInput>;
  user?: Maybe<UserRelateToOneInput>;
  charge?: Maybe<Scalars['String']>;
};

export type OrdersUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<OrderUpdateInput>;
};

export type OrderCreateInput = {
  total?: Maybe<Scalars['Int']>;
  items?: Maybe<OrderItemRelateToManyInput>;
  user?: Maybe<UserRelateToOneInput>;
  charge?: Maybe<Scalars['String']>;
};

export type OrdersCreateInput = {
  data?: Maybe<OrderCreateInput>;
};

export type OrderRelateToOneInput = {
  create?: Maybe<OrderCreateInput>;
  connect?: Maybe<OrderWhereUniqueInput>;
  disconnect?: Maybe<OrderWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  A keystone list  */
export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  photo?: Maybe<ProductImage>;
  quantity?: Maybe<Scalars['Int']>;
  order?: Maybe<Order>;
};

export type OrderItemWhereInput = {
  AND?: Maybe<Array<Maybe<OrderItemWhereInput>>>;
  OR?: Maybe<Array<Maybe<OrderItemWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_i?: Maybe<Scalars['String']>;
  description_not_i?: Maybe<Scalars['String']>;
  description_contains_i?: Maybe<Scalars['String']>;
  description_not_contains_i?: Maybe<Scalars['String']>;
  description_starts_with_i?: Maybe<Scalars['String']>;
  description_not_starts_with_i?: Maybe<Scalars['String']>;
  description_ends_with_i?: Maybe<Scalars['String']>;
  description_not_ends_with_i?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  price?: Maybe<Scalars['Int']>;
  price_not?: Maybe<Scalars['Int']>;
  price_lt?: Maybe<Scalars['Int']>;
  price_lte?: Maybe<Scalars['Int']>;
  price_gt?: Maybe<Scalars['Int']>;
  price_gte?: Maybe<Scalars['Int']>;
  price_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  price_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  photo?: Maybe<ProductImageWhereInput>;
  photo_is_null?: Maybe<Scalars['Boolean']>;
  quantity?: Maybe<Scalars['Int']>;
  quantity_not?: Maybe<Scalars['Int']>;
  quantity_lt?: Maybe<Scalars['Int']>;
  quantity_lte?: Maybe<Scalars['Int']>;
  quantity_gt?: Maybe<Scalars['Int']>;
  quantity_gte?: Maybe<Scalars['Int']>;
  quantity_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  quantity_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  order?: Maybe<OrderWhereInput>;
  order_is_null?: Maybe<Scalars['Boolean']>;
};

export type OrderItemWhereUniqueInput = {
  id: Scalars['ID'];
};

export const SortOrderItemsBy = {
  IdAsc: 'id_ASC',
  IdDesc: 'id_DESC',
  NameAsc: 'name_ASC',
  NameDesc: 'name_DESC',
  DescriptionAsc: 'description_ASC',
  DescriptionDesc: 'description_DESC',
  PriceAsc: 'price_ASC',
  PriceDesc: 'price_DESC',
  PhotoAsc: 'photo_ASC',
  PhotoDesc: 'photo_DESC',
  QuantityAsc: 'quantity_ASC',
  QuantityDesc: 'quantity_DESC',
  OrderAsc: 'order_ASC',
  OrderDesc: 'order_DESC'
} as const;

export type SortOrderItemsBy = typeof SortOrderItemsBy[keyof typeof SortOrderItemsBy];
export type OrderItemUpdateInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  photo?: Maybe<ProductImageRelateToOneInput>;
  quantity?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderRelateToOneInput>;
};

export type OrderItemsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<OrderItemUpdateInput>;
};

export type OrderItemCreateInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  photo?: Maybe<ProductImageRelateToOneInput>;
  quantity?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderRelateToOneInput>;
};

export type OrderItemsCreateInput = {
  data?: Maybe<OrderItemCreateInput>;
};

export type UserRelateToManyInput = {
  create?: Maybe<Array<Maybe<UserCreateInput>>>;
  connect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

/**  A keystone list  */
export type Role = {
  __typename?: 'Role';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  canManageProducts?: Maybe<Scalars['Boolean']>;
  canSeeOtherUsers?: Maybe<Scalars['Boolean']>;
  canManageUsers?: Maybe<Scalars['Boolean']>;
  canManageRoles?: Maybe<Scalars['Boolean']>;
  canManageCart?: Maybe<Scalars['Boolean']>;
  canManageOrders?: Maybe<Scalars['Boolean']>;
  assignedTo: Array<User>;
  _assignedToMeta?: Maybe<_QueryMeta>;
};


/**  A keystone list  */
export type RoleAssignedToArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type Role_AssignedToMetaArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type RoleWhereInput = {
  AND?: Maybe<Array<Maybe<RoleWhereInput>>>;
  OR?: Maybe<Array<Maybe<RoleWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  canManageProducts?: Maybe<Scalars['Boolean']>;
  canManageProducts_not?: Maybe<Scalars['Boolean']>;
  canSeeOtherUsers?: Maybe<Scalars['Boolean']>;
  canSeeOtherUsers_not?: Maybe<Scalars['Boolean']>;
  canManageUsers?: Maybe<Scalars['Boolean']>;
  canManageUsers_not?: Maybe<Scalars['Boolean']>;
  canManageRoles?: Maybe<Scalars['Boolean']>;
  canManageRoles_not?: Maybe<Scalars['Boolean']>;
  canManageCart?: Maybe<Scalars['Boolean']>;
  canManageCart_not?: Maybe<Scalars['Boolean']>;
  canManageOrders?: Maybe<Scalars['Boolean']>;
  canManageOrders_not?: Maybe<Scalars['Boolean']>;
  /**  condition must be true for all nodes  */
  assignedTo_every?: Maybe<UserWhereInput>;
  /**  condition must be true for at least 1 node  */
  assignedTo_some?: Maybe<UserWhereInput>;
  /**  condition must be false for all nodes  */
  assignedTo_none?: Maybe<UserWhereInput>;
};

export type RoleWhereUniqueInput = {
  id: Scalars['ID'];
};

export const SortRolesBy = {
  IdAsc: 'id_ASC',
  IdDesc: 'id_DESC',
  NameAsc: 'name_ASC',
  NameDesc: 'name_DESC',
  CanManageProductsAsc: 'canManageProducts_ASC',
  CanManageProductsDesc: 'canManageProducts_DESC',
  CanSeeOtherUsersAsc: 'canSeeOtherUsers_ASC',
  CanSeeOtherUsersDesc: 'canSeeOtherUsers_DESC',
  CanManageUsersAsc: 'canManageUsers_ASC',
  CanManageUsersDesc: 'canManageUsers_DESC',
  CanManageRolesAsc: 'canManageRoles_ASC',
  CanManageRolesDesc: 'canManageRoles_DESC',
  CanManageCartAsc: 'canManageCart_ASC',
  CanManageCartDesc: 'canManageCart_DESC',
  CanManageOrdersAsc: 'canManageOrders_ASC',
  CanManageOrdersDesc: 'canManageOrders_DESC',
  AssignedToAsc: 'assignedTo_ASC',
  AssignedToDesc: 'assignedTo_DESC'
} as const;

export type SortRolesBy = typeof SortRolesBy[keyof typeof SortRolesBy];
export type RoleUpdateInput = {
  name?: Maybe<Scalars['String']>;
  canManageProducts?: Maybe<Scalars['Boolean']>;
  canSeeOtherUsers?: Maybe<Scalars['Boolean']>;
  canManageUsers?: Maybe<Scalars['Boolean']>;
  canManageRoles?: Maybe<Scalars['Boolean']>;
  canManageCart?: Maybe<Scalars['Boolean']>;
  canManageOrders?: Maybe<Scalars['Boolean']>;
  assignedTo?: Maybe<UserRelateToManyInput>;
};

export type RolesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<RoleUpdateInput>;
};

export type RoleCreateInput = {
  name?: Maybe<Scalars['String']>;
  canManageProducts?: Maybe<Scalars['Boolean']>;
  canSeeOtherUsers?: Maybe<Scalars['Boolean']>;
  canManageUsers?: Maybe<Scalars['Boolean']>;
  canManageRoles?: Maybe<Scalars['Boolean']>;
  canManageCart?: Maybe<Scalars['Boolean']>;
  canManageOrders?: Maybe<Scalars['Boolean']>;
  assignedTo?: Maybe<UserRelateToManyInput>;
};

export type RolesCreateInput = {
  data?: Maybe<RoleCreateInput>;
};


export type _ListAccess = {
  __typename?: '_ListAccess';
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'create' operations.
   * NOTE: 'create' can only return a Boolean.
   * It is not possible to specify a declarative Where clause for this
   * operation
   */
  create?: Maybe<Scalars['Boolean']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'read' operations.
   */
  read?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'update' operations.
   */
  update?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'delete' operations.
   */
  delete?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'auth' operations.
   */
  auth?: Maybe<Scalars['JSON']>;
};

export type _ListQueries = {
  __typename?: '_ListQueries';
  /** Single-item query name */
  item?: Maybe<Scalars['String']>;
  /** All-items query name */
  list?: Maybe<Scalars['String']>;
  /** List metadata query name */
  meta?: Maybe<Scalars['String']>;
};

export type _ListMutations = {
  __typename?: '_ListMutations';
  /** Create mutation name */
  create?: Maybe<Scalars['String']>;
  /** Create many mutation name */
  createMany?: Maybe<Scalars['String']>;
  /** Update mutation name */
  update?: Maybe<Scalars['String']>;
  /** Update many mutation name */
  updateMany?: Maybe<Scalars['String']>;
  /** Delete mutation name */
  delete?: Maybe<Scalars['String']>;
  /** Delete many mutation name */
  deleteMany?: Maybe<Scalars['String']>;
};

export type _ListInputTypes = {
  __typename?: '_ListInputTypes';
  /** Input type for matching multiple items */
  whereInput?: Maybe<Scalars['String']>;
  /** Input type for matching a unique item */
  whereUniqueInput?: Maybe<Scalars['String']>;
  /** Create mutation input type name */
  createInput?: Maybe<Scalars['String']>;
  /** Create many mutation input type name */
  createManyInput?: Maybe<Scalars['String']>;
  /** Update mutation name input */
  updateInput?: Maybe<Scalars['String']>;
  /** Update many mutation name input */
  updateManyInput?: Maybe<Scalars['String']>;
};

export type _ListSchemaFields = {
  __typename?: '_ListSchemaFields';
  /** The path of the field in its list */
  path?: Maybe<Scalars['String']>;
  /**
   * The name of the field in its list
   * @deprecated Use `path` instead
   */
  name?: Maybe<Scalars['String']>;
  /** The field type (ie, Checkbox, Text, etc) */
  type?: Maybe<Scalars['String']>;
};

export type _ListSchemaRelatedFields = {
  __typename?: '_ListSchemaRelatedFields';
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']>;
  /** A list of GraphQL field names */
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type _ListSchema = {
  __typename?: '_ListSchema';
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']>;
  /**
   * Top level GraphQL query names which either return this type, or
   * provide aggregate information about this type
   */
  queries?: Maybe<_ListQueries>;
  /** Top-level GraphQL mutation names */
  mutations?: Maybe<_ListMutations>;
  /** Top-level GraphQL input types */
  inputTypes?: Maybe<_ListInputTypes>;
  /** Information about fields defined on this list */
  fields?: Maybe<Array<Maybe<_ListSchemaFields>>>;
  /**
   * Information about fields on other types which return this type, or
   * provide aggregate information about this type
   */
  relatedFields?: Maybe<Array<Maybe<_ListSchemaRelatedFields>>>;
};


export type _ListSchemaFieldsArgs = {
  where?: Maybe<_ListSchemaFieldsInput>;
};

export type _ListMeta = {
  __typename?: '_ListMeta';
  /** The Keystone list key */
  key?: Maybe<Scalars['String']>;
  /**
   * The Keystone List name
   * @deprecated Use `key` instead
   */
  name?: Maybe<Scalars['String']>;
  /** The list's user-facing description */
  description?: Maybe<Scalars['String']>;
  /** The list's display name in the Admin UI */
  label?: Maybe<Scalars['String']>;
  /** The list's singular display name */
  singular?: Maybe<Scalars['String']>;
  /** The list's plural display name */
  plural?: Maybe<Scalars['String']>;
  /** The list's data path */
  path?: Maybe<Scalars['String']>;
  /** Access control configuration for the currently authenticated request */
  access?: Maybe<_ListAccess>;
  /** Information on the generated GraphQL schema */
  schema?: Maybe<_ListSchema>;
};

export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count?: Maybe<Scalars['Int']>;
};

export type _KsListsMetaInput = {
  key?: Maybe<Scalars['String']>;
  /** Whether this is an auxiliary helper list */
  auxiliary?: Maybe<Scalars['Boolean']>;
};

export type _ListSchemaFieldsInput = {
  type?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**  Create a single User item.  */
  createUser?: Maybe<User>;
  /**  Create multiple User items.  */
  createUsers?: Maybe<Array<Maybe<User>>>;
  /**  Update a single User item by ID.  */
  updateUser?: Maybe<User>;
  /**  Update multiple User items by ID.  */
  updateUsers?: Maybe<Array<Maybe<User>>>;
  /**  Delete a single User item by ID.  */
  deleteUser?: Maybe<User>;
  /**  Delete multiple User items by ID.  */
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  /**  Create a single Product item.  */
  createProduct?: Maybe<Product>;
  /**  Create multiple Product items.  */
  createProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Update a single Product item by ID.  */
  updateProduct?: Maybe<Product>;
  /**  Update multiple Product items by ID.  */
  updateProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Delete a single Product item by ID.  */
  deleteProduct?: Maybe<Product>;
  /**  Delete multiple Product items by ID.  */
  deleteProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Create a single ProductImage item.  */
  createProductImage?: Maybe<ProductImage>;
  /**  Create multiple ProductImage items.  */
  createProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Update a single ProductImage item by ID.  */
  updateProductImage?: Maybe<ProductImage>;
  /**  Update multiple ProductImage items by ID.  */
  updateProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Delete a single ProductImage item by ID.  */
  deleteProductImage?: Maybe<ProductImage>;
  /**  Delete multiple ProductImage items by ID.  */
  deleteProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Create a single CartItem item.  */
  createCartItem?: Maybe<CartItem>;
  /**  Create multiple CartItem items.  */
  createCartItems?: Maybe<Array<Maybe<CartItem>>>;
  /**  Update a single CartItem item by ID.  */
  updateCartItem?: Maybe<CartItem>;
  /**  Update multiple CartItem items by ID.  */
  updateCartItems?: Maybe<Array<Maybe<CartItem>>>;
  /**  Delete a single CartItem item by ID.  */
  deleteCartItem?: Maybe<CartItem>;
  /**  Delete multiple CartItem items by ID.  */
  deleteCartItems?: Maybe<Array<Maybe<CartItem>>>;
  /**  Create a single Order item.  */
  createOrder?: Maybe<Order>;
  /**  Create multiple Order items.  */
  createOrders?: Maybe<Array<Maybe<Order>>>;
  /**  Update a single Order item by ID.  */
  updateOrder?: Maybe<Order>;
  /**  Update multiple Order items by ID.  */
  updateOrders?: Maybe<Array<Maybe<Order>>>;
  /**  Delete a single Order item by ID.  */
  deleteOrder?: Maybe<Order>;
  /**  Delete multiple Order items by ID.  */
  deleteOrders?: Maybe<Array<Maybe<Order>>>;
  /**  Create a single OrderItem item.  */
  createOrderItem?: Maybe<OrderItem>;
  /**  Create multiple OrderItem items.  */
  createOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  /**  Update a single OrderItem item by ID.  */
  updateOrderItem?: Maybe<OrderItem>;
  /**  Update multiple OrderItem items by ID.  */
  updateOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  /**  Delete a single OrderItem item by ID.  */
  deleteOrderItem?: Maybe<OrderItem>;
  /**  Delete multiple OrderItem items by ID.  */
  deleteOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  /**  Create a single Role item.  */
  createRole?: Maybe<Role>;
  /**  Create multiple Role items.  */
  createRoles?: Maybe<Array<Maybe<Role>>>;
  /**  Update a single Role item by ID.  */
  updateRole?: Maybe<Role>;
  /**  Update multiple Role items by ID.  */
  updateRoles?: Maybe<Array<Maybe<Role>>>;
  /**  Delete a single Role item by ID.  */
  deleteRole?: Maybe<Role>;
  /**  Delete multiple Role items by ID.  */
  deleteRoles?: Maybe<Array<Maybe<Role>>>;
  authenticateUserWithPassword: UserAuthenticationWithPasswordResult;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  sendUserPasswordResetLink?: Maybe<SendUserPasswordResetLinkResult>;
  redeemUserPasswordResetToken?: Maybe<RedeemUserPasswordResetTokenResult>;
  addToCart?: Maybe<CartItem>;
  checkout?: Maybe<Order>;
  endSession: Scalars['Boolean'];
};


export type MutationCreateUserArgs = {
  data?: Maybe<UserCreateInput>;
};


export type MutationCreateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersCreateInput>>>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};


export type MutationUpdateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersUpdateInput>>>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateProductArgs = {
  data?: Maybe<ProductCreateInput>;
};


export type MutationCreateProductsArgs = {
  data?: Maybe<Array<Maybe<ProductsCreateInput>>>;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  data?: Maybe<ProductUpdateInput>;
};


export type MutationUpdateProductsArgs = {
  data?: Maybe<Array<Maybe<ProductsUpdateInput>>>;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateProductImageArgs = {
  data?: Maybe<ProductImageCreateInput>;
};


export type MutationCreateProductImagesArgs = {
  data?: Maybe<Array<Maybe<ProductImagesCreateInput>>>;
};


export type MutationUpdateProductImageArgs = {
  id: Scalars['ID'];
  data?: Maybe<ProductImageUpdateInput>;
};


export type MutationUpdateProductImagesArgs = {
  data?: Maybe<Array<Maybe<ProductImagesUpdateInput>>>;
};


export type MutationDeleteProductImageArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductImagesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateCartItemArgs = {
  data?: Maybe<CartItemCreateInput>;
};


export type MutationCreateCartItemsArgs = {
  data?: Maybe<Array<Maybe<CartItemsCreateInput>>>;
};


export type MutationUpdateCartItemArgs = {
  id: Scalars['ID'];
  data?: Maybe<CartItemUpdateInput>;
};


export type MutationUpdateCartItemsArgs = {
  data?: Maybe<Array<Maybe<CartItemsUpdateInput>>>;
};


export type MutationDeleteCartItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCartItemsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateOrderArgs = {
  data?: Maybe<OrderCreateInput>;
};


export type MutationCreateOrdersArgs = {
  data?: Maybe<Array<Maybe<OrdersCreateInput>>>;
};


export type MutationUpdateOrderArgs = {
  id: Scalars['ID'];
  data?: Maybe<OrderUpdateInput>;
};


export type MutationUpdateOrdersArgs = {
  data?: Maybe<Array<Maybe<OrdersUpdateInput>>>;
};


export type MutationDeleteOrderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOrdersArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateOrderItemArgs = {
  data?: Maybe<OrderItemCreateInput>;
};


export type MutationCreateOrderItemsArgs = {
  data?: Maybe<Array<Maybe<OrderItemsCreateInput>>>;
};


export type MutationUpdateOrderItemArgs = {
  id: Scalars['ID'];
  data?: Maybe<OrderItemUpdateInput>;
};


export type MutationUpdateOrderItemsArgs = {
  data?: Maybe<Array<Maybe<OrderItemsUpdateInput>>>;
};


export type MutationDeleteOrderItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOrderItemsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateRoleArgs = {
  data?: Maybe<RoleCreateInput>;
};


export type MutationCreateRolesArgs = {
  data?: Maybe<Array<Maybe<RolesCreateInput>>>;
};


export type MutationUpdateRoleArgs = {
  id: Scalars['ID'];
  data?: Maybe<RoleUpdateInput>;
};


export type MutationUpdateRolesArgs = {
  data?: Maybe<Array<Maybe<RolesUpdateInput>>>;
};


export type MutationDeleteRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRolesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationSendUserPasswordResetLinkArgs = {
  email: Scalars['String'];
};


export type MutationRedeemUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
  password: Scalars['String'];
};


export type MutationAddToCartArgs = {
  productId?: Maybe<Scalars['ID']>;
};


export type MutationCheckoutArgs = {
  token: Scalars['String'];
};


export type AuthenticatedItem = User;

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordSuccess | UserAuthenticationWithPasswordFailure;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  sessionToken: Scalars['String'];
  item: User;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  code: PasswordAuthErrorCode;
  message: Scalars['String'];
};

export const PasswordAuthErrorCode = {
  Failure: 'FAILURE',
  IdentityNotFound: 'IDENTITY_NOT_FOUND',
  SecretNotSet: 'SECRET_NOT_SET',
  MultipleIdentityMatches: 'MULTIPLE_IDENTITY_MATCHES',
  SecretMismatch: 'SECRET_MISMATCH'
} as const;

export type PasswordAuthErrorCode = typeof PasswordAuthErrorCode[keyof typeof PasswordAuthErrorCode];
export type CreateInitialUserInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type SendUserPasswordResetLinkResult = {
  __typename?: 'SendUserPasswordResetLinkResult';
  code: PasswordResetRequestErrorCode;
  message: Scalars['String'];
};

export const PasswordResetRequestErrorCode = {
  IdentityNotFound: 'IDENTITY_NOT_FOUND',
  MultipleIdentityMatches: 'MULTIPLE_IDENTITY_MATCHES'
} as const;

export type PasswordResetRequestErrorCode = typeof PasswordResetRequestErrorCode[keyof typeof PasswordResetRequestErrorCode];
export type ValidateUserPasswordResetTokenResult = {
  __typename?: 'ValidateUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};

export type RedeemUserPasswordResetTokenResult = {
  __typename?: 'RedeemUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};

export const PasswordResetRedemptionErrorCode = {
  Failure: 'FAILURE',
  IdentityNotFound: 'IDENTITY_NOT_FOUND',
  MultipleIdentityMatches: 'MULTIPLE_IDENTITY_MATCHES',
  TokenNotSet: 'TOKEN_NOT_SET',
  TokenMismatch: 'TOKEN_MISMATCH',
  TokenExpired: 'TOKEN_EXPIRED',
  TokenRedeemed: 'TOKEN_REDEEMED'
} as const;

export type PasswordResetRedemptionErrorCode = typeof PasswordResetRedemptionErrorCode[keyof typeof PasswordResetRedemptionErrorCode];
export type Query = {
  __typename?: 'Query';
  /**  Search for all User items which match the where clause.  */
  allUsers?: Maybe<Array<Maybe<User>>>;
  /**  Search for the User item with the matching ID.  */
  User?: Maybe<User>;
  /**  Perform a meta-query on all User items which match the where clause.  */
  _allUsersMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the User list.  */
  _UsersMeta?: Maybe<_ListMeta>;
  /**  Search for all Product items which match the where clause.  */
  allProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Search for the Product item with the matching ID.  */
  Product?: Maybe<Product>;
  /**  Perform a meta-query on all Product items which match the where clause.  */
  _allProductsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the Product list.  */
  _ProductsMeta?: Maybe<_ListMeta>;
  /**  Search for all ProductImage items which match the where clause.  */
  allProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Search for the ProductImage item with the matching ID.  */
  ProductImage?: Maybe<ProductImage>;
  /**  Perform a meta-query on all ProductImage items which match the where clause.  */
  _allProductImagesMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the ProductImage list.  */
  _ProductImagesMeta?: Maybe<_ListMeta>;
  /**  Search for all CartItem items which match the where clause.  */
  allCartItems?: Maybe<Array<Maybe<CartItem>>>;
  /**  Search for the CartItem item with the matching ID.  */
  CartItem?: Maybe<CartItem>;
  /**  Perform a meta-query on all CartItem items which match the where clause.  */
  _allCartItemsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the CartItem list.  */
  _CartItemsMeta?: Maybe<_ListMeta>;
  /**  Search for all Order items which match the where clause.  */
  allOrders?: Maybe<Array<Maybe<Order>>>;
  /**  Search for the Order item with the matching ID.  */
  Order?: Maybe<Order>;
  /**  Perform a meta-query on all Order items which match the where clause.  */
  _allOrdersMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the Order list.  */
  _OrdersMeta?: Maybe<_ListMeta>;
  /**  Search for all OrderItem items which match the where clause.  */
  allOrderItems?: Maybe<Array<Maybe<OrderItem>>>;
  /**  Search for the OrderItem item with the matching ID.  */
  OrderItem?: Maybe<OrderItem>;
  /**  Perform a meta-query on all OrderItem items which match the where clause.  */
  _allOrderItemsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the OrderItem list.  */
  _OrderItemsMeta?: Maybe<_ListMeta>;
  /**  Search for all Role items which match the where clause.  */
  allRoles?: Maybe<Array<Maybe<Role>>>;
  /**  Search for the Role item with the matching ID.  */
  Role?: Maybe<Role>;
  /**  Perform a meta-query on all Role items which match the where clause.  */
  _allRolesMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the Role list.  */
  _RolesMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for all lists.  */
  _ksListsMeta?: Maybe<Array<Maybe<_ListMeta>>>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
  keystone: KeystoneMeta;
};


export type QueryAllUsersArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type Query_AllUsersMetaArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllProductsArgs = {
  where?: Maybe<ProductWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type Query_AllProductsMetaArgs = {
  where?: Maybe<ProductWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllProductImagesArgs = {
  where?: Maybe<ProductImageWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductImagesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryProductImageArgs = {
  where: ProductImageWhereUniqueInput;
};


export type Query_AllProductImagesMetaArgs = {
  where?: Maybe<ProductImageWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortProductImagesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllCartItemsArgs = {
  where?: Maybe<CartItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortCartItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryCartItemArgs = {
  where: CartItemWhereUniqueInput;
};


export type Query_AllCartItemsMetaArgs = {
  where?: Maybe<CartItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortCartItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllOrdersArgs = {
  where?: Maybe<OrderWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrdersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type Query_AllOrdersMetaArgs = {
  where?: Maybe<OrderWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrdersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllOrderItemsArgs = {
  where?: Maybe<OrderItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrderItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};


export type Query_AllOrderItemsMetaArgs = {
  where?: Maybe<OrderItemWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortOrderItemsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllRolesArgs = {
  where?: Maybe<RoleWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortRolesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryRoleArgs = {
  where: RoleWhereUniqueInput;
};


export type Query_AllRolesMetaArgs = {
  where?: Maybe<RoleWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortRolesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type Query_KsListsMetaArgs = {
  where?: Maybe<_KsListsMetaInput>;
};


export type QueryValidateUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSignout: Scalars['Boolean'];
  enableSessionItem: Scalars['Boolean'];
  lists: Array<KeystoneAdminUiListMeta>;
  list?: Maybe<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  key: Scalars['String'];
  itemQueryName: Scalars['String'];
  listQueryName: Scalars['String'];
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  path: Scalars['String'];
  label: Scalars['String'];
  singular: Scalars['String'];
  plural: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  initialColumns: Array<Scalars['String']>;
  pageSize: Scalars['Int'];
  labelField: Scalars['String'];
  fields: Array<KeystoneAdminUiFieldMeta>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  path: Scalars['String'];
  label: Scalars['String'];
  isOrderable: Scalars['Boolean'];
  fieldMeta?: Maybe<Scalars['JSON']>;
  viewsIndex: Scalars['Int'];
  customViewsIndex?: Maybe<Scalars['Int']>;
  createView: KeystoneAdminUiFieldMetaCreateView;
  listView: KeystoneAdminUiFieldMetaListView;
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id: Scalars['ID'];
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export const KeystoneAdminUiFieldMetaCreateViewFieldMode = {
  Edit: 'edit',
  Hidden: 'hidden'
} as const;

export type KeystoneAdminUiFieldMetaCreateViewFieldMode = typeof KeystoneAdminUiFieldMetaCreateViewFieldMode[keyof typeof KeystoneAdminUiFieldMetaCreateViewFieldMode];
export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export const KeystoneAdminUiFieldMetaListViewFieldMode = {
  Read: 'read',
  Hidden: 'hidden'
} as const;

export type KeystoneAdminUiFieldMetaListViewFieldMode = typeof KeystoneAdminUiFieldMetaListViewFieldMode[keyof typeof KeystoneAdminUiFieldMetaListViewFieldMode];
export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
};

export const KeystoneAdminUiFieldMetaItemViewFieldMode = {
  Edit: 'edit',
  Read: 'read',
  Hidden: 'hidden'
} as const;

export type KeystoneAdminUiFieldMetaItemViewFieldMode = typeof KeystoneAdminUiFieldMetaItemViewFieldMode[keyof typeof KeystoneAdminUiFieldMetaItemViewFieldMode];
export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  field: Scalars['String'];
  direction: KeystoneAdminUiSortDirection;
};

export const KeystoneAdminUiSortDirection = {
  Asc: 'ASC',
  Desc: 'DESC'
} as const;

export type KeystoneAdminUiSortDirection = typeof KeystoneAdminUiSortDirection[keyof typeof KeystoneAdminUiSortDirection];
export type OrderQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OrderQuery = (
  { __typename?: 'Query' }
  & { order?: Maybe<(
    { __typename?: 'Order' }
    & OrderFragment
  )> }
);

export type AllOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllOrdersQuery = (
  { __typename?: 'Query' }
  & { allOrders?: Maybe<Array<Maybe<(
    { __typename?: 'Order' }
    & OrderFragment
  )>>> }
);

export type CheckoutMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type CheckoutMutation = (
  { __typename?: 'Mutation' }
  & { checkout?: Maybe<(
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'charge' | 'total'>
    & { items: Array<(
      { __typename?: 'OrderItem' }
      & Pick<OrderItem, 'id' | 'name'>
    )> }
  )> }
);

export type OrderFragment = (
  { __typename?: 'Order' }
  & Pick<Order, 'id' | 'charge' | 'total'>
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )>, items: Array<(
    { __typename?: 'OrderItem' }
    & Pick<OrderItem, 'id' | 'name' | 'description' | 'price' | 'quantity'>
    & { photo?: Maybe<(
      { __typename?: 'ProductImage' }
      & { image?: Maybe<(
        { __typename?: 'CloudinaryImage_File' }
        & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
      )> }
    )> }
  )> }
);

export type AllProductsQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type AllProductsQuery = (
  { __typename?: 'Query' }
  & { allProducts?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & ProductFragment
  )>>> }
);

export type ProductsCountQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsCountQuery = (
  { __typename?: 'Query' }
  & { _allProductsMeta?: Maybe<(
    { __typename?: '_QueryMeta' }
    & Pick<_QueryMeta, 'count'>
  )> }
);

export type ProductQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductQuery = (
  { __typename?: 'Query' }
  & { product?: Maybe<(
    { __typename?: 'Product' }
    & ProductFragment
  )> }
);

export type SearchProductsQueryVariables = Exact<{
  searchTerm: Scalars['String'];
}>;


export type SearchProductsQuery = (
  { __typename?: 'Query' }
  & { searchTerms?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name'>
    & { photo?: Maybe<(
      { __typename?: 'ProductImage' }
      & { image?: Maybe<(
        { __typename?: 'CloudinaryImage_File' }
        & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
      )> }
    )> }
  )>>> }
);

export type CreateProductMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Int'];
  image?: Maybe<Scalars['Upload']>;
}>;


export type CreateProductMutation = (
  { __typename?: 'Mutation' }
  & { createProduct?: Maybe<(
    { __typename?: 'Product' }
    & ProductFragment
  )> }
);

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Int'];
}>;


export type UpdateProductMutation = (
  { __typename?: 'Mutation' }
  & { updateProduct?: Maybe<(
    { __typename?: 'Product' }
    & ProductFragment
  )> }
);

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteProductMutation = (
  { __typename?: 'Mutation' }
  & { deleteProduct?: Maybe<(
    { __typename?: 'Product' }
    & ProductFragment
  )> }
);

export type AddToCartMutationVariables = Exact<{
  productId: Scalars['ID'];
}>;


export type AddToCartMutation = (
  { __typename?: 'Mutation' }
  & { addToCart?: Maybe<(
    { __typename?: 'CartItem' }
    & Pick<CartItem, 'id'>
  )> }
);

export type RemoveFromCartMutationVariables = Exact<{
  productId: Scalars['ID'];
}>;


export type RemoveFromCartMutation = (
  { __typename?: 'Mutation' }
  & { deleteCartItem?: Maybe<(
    { __typename?: 'CartItem' }
    & Pick<CartItem, 'id'>
  )> }
);

export type ProductFragment = (
  { __typename?: 'Product' }
  & Pick<Product, 'id' | 'name' | 'price' | 'description' | 'status'>
  & { photo?: Maybe<(
    { __typename?: 'ProductImage' }
    & Pick<ProductImage, 'id' | 'altText'>
    & { image?: Maybe<(
      { __typename?: 'CloudinaryImage_File' }
      & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
    )> }
  )> }
);

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { authenticatedItem?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
    & { cart: Array<(
      { __typename?: 'CartItem' }
      & Pick<CartItem, 'id' | 'quantity'>
      & { product?: Maybe<(
        { __typename?: 'Product' }
        & Pick<Product, 'id' | 'price' | 'name' | 'description'>
        & { photo?: Maybe<(
          { __typename?: 'ProductImage' }
          & { image?: Maybe<(
            { __typename?: 'CloudinaryImage_File' }
            & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
          )> }
        )> }
      )> }
    )> }
  )> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { authenticateUserWithPassword: (
    { __typename?: 'UserAuthenticationWithPasswordSuccess' }
    & Pick<UserAuthenticationWithPasswordSuccess, 'sessionToken'>
    & { item: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'email'>
    ) }
  ) | (
    { __typename?: 'UserAuthenticationWithPasswordFailure' }
    & Pick<UserAuthenticationWithPasswordFailure, 'code' | 'message'>
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'endSession'>
);

export type RegisterMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { createUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  )> }
);

export type RequestPasswordResetMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type RequestPasswordResetMutation = (
  { __typename?: 'Mutation' }
  & { sendUserPasswordResetLink?: Maybe<(
    { __typename?: 'SendUserPasswordResetLinkResult' }
    & Pick<SendUserPasswordResetLinkResult, 'code' | 'message'>
  )> }
);

export type ResetPasswordMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
}>;


export type ResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & { redeemUserPasswordResetToken?: Maybe<(
    { __typename?: 'RedeemUserPasswordResetTokenResult' }
    & Pick<RedeemUserPasswordResetTokenResult, 'code' | 'message'>
  )> }
);

export const OrderFragmentDoc = gql`
    fragment order on Order {
  id
  charge
  total
  user {
    id
  }
  items {
    id
    name
    description
    price
    quantity
    photo {
      image {
        publicUrlTransformed
      }
    }
  }
}
    `;
export const ProductFragmentDoc = gql`
    fragment product on Product {
  id
  name
  price
  description
  status
  photo {
    id
    altText
    image {
      publicUrlTransformed
    }
  }
}
    `;
export const OrderDocument = gql`
    query order($id: ID!) {
  order: Order(where: {id: $id}) {
    ...order
  }
}
    ${OrderFragmentDoc}`;

/**
 * __useOrderQuery__
 *
 * To run a query within a React component, call `useOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrderQuery(baseOptions: Apollo.QueryHookOptions<OrderQuery, OrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
      }
export function useOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderQuery, OrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
        }
export type OrderQueryHookResult = ReturnType<typeof useOrderQuery>;
export type OrderLazyQueryHookResult = ReturnType<typeof useOrderLazyQuery>;
export type OrderQueryResult = Apollo.QueryResult<OrderQuery, OrderQueryVariables>;
export const AllOrdersDocument = gql`
    query allOrders {
  allOrders {
    ...order
  }
}
    ${OrderFragmentDoc}`;

/**
 * __useAllOrdersQuery__
 *
 * To run a query within a React component, call `useAllOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllOrdersQuery(baseOptions?: Apollo.QueryHookOptions<AllOrdersQuery, AllOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllOrdersQuery, AllOrdersQueryVariables>(AllOrdersDocument, options);
      }
export function useAllOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllOrdersQuery, AllOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllOrdersQuery, AllOrdersQueryVariables>(AllOrdersDocument, options);
        }
export type AllOrdersQueryHookResult = ReturnType<typeof useAllOrdersQuery>;
export type AllOrdersLazyQueryHookResult = ReturnType<typeof useAllOrdersLazyQuery>;
export type AllOrdersQueryResult = Apollo.QueryResult<AllOrdersQuery, AllOrdersQueryVariables>;
export const CheckoutDocument = gql`
    mutation checkout($token: String!) {
  checkout(token: $token) {
    id
    charge
    total
    items {
      id
      name
    }
  }
}
    `;
export type CheckoutMutationFn = Apollo.MutationFunction<CheckoutMutation, CheckoutMutationVariables>;

/**
 * __useCheckoutMutation__
 *
 * To run a mutation, you first call `useCheckoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkoutMutation, { data, loading, error }] = useCheckoutMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useCheckoutMutation(baseOptions?: Apollo.MutationHookOptions<CheckoutMutation, CheckoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CheckoutMutation, CheckoutMutationVariables>(CheckoutDocument, options);
      }
export type CheckoutMutationHookResult = ReturnType<typeof useCheckoutMutation>;
export type CheckoutMutationResult = Apollo.MutationResult<CheckoutMutation>;
export type CheckoutMutationOptions = Apollo.BaseMutationOptions<CheckoutMutation, CheckoutMutationVariables>;
export const AllProductsDocument = gql`
    query allProducts($first: Int, $skip: Int = 0) {
  allProducts(first: $first, skip: $skip, sortBy: id_DESC) {
    ...product
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useAllProductsQuery__
 *
 * To run a query within a React component, call `useAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProductsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<AllProductsQuery, AllProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options);
      }
export function useAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProductsQuery, AllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options);
        }
export type AllProductsQueryHookResult = ReturnType<typeof useAllProductsQuery>;
export type AllProductsLazyQueryHookResult = ReturnType<typeof useAllProductsLazyQuery>;
export type AllProductsQueryResult = Apollo.QueryResult<AllProductsQuery, AllProductsQueryVariables>;
export const ProductsCountDocument = gql`
    query productsCount {
  _allProductsMeta {
    count
  }
}
    `;

/**
 * __useProductsCountQuery__
 *
 * To run a query within a React component, call `useProductsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsCountQuery(baseOptions?: Apollo.QueryHookOptions<ProductsCountQuery, ProductsCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsCountQuery, ProductsCountQueryVariables>(ProductsCountDocument, options);
      }
export function useProductsCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsCountQuery, ProductsCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsCountQuery, ProductsCountQueryVariables>(ProductsCountDocument, options);
        }
export type ProductsCountQueryHookResult = ReturnType<typeof useProductsCountQuery>;
export type ProductsCountLazyQueryHookResult = ReturnType<typeof useProductsCountLazyQuery>;
export type ProductsCountQueryResult = Apollo.QueryResult<ProductsCountQuery, ProductsCountQueryVariables>;
export const ProductDocument = gql`
    query product($id: ID!) {
  product: Product(where: {id: $id}) {
    ...product
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductQuery(baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const SearchProductsDocument = gql`
    query searchProducts($searchTerm: String!) {
  searchTerms: allProducts(
    where: {OR: [{name_contains_i: $searchTerm}, {description_contains_i: $searchTerm}]}
  ) {
    id
    name
    photo {
      image {
        publicUrlTransformed
      }
    }
  }
}
    `;

/**
 * __useSearchProductsQuery__
 *
 * To run a query within a React component, call `useSearchProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchProductsQuery({
 *   variables: {
 *      searchTerm: // value for 'searchTerm'
 *   },
 * });
 */
export function useSearchProductsQuery(baseOptions: Apollo.QueryHookOptions<SearchProductsQuery, SearchProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchProductsQuery, SearchProductsQueryVariables>(SearchProductsDocument, options);
      }
export function useSearchProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchProductsQuery, SearchProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchProductsQuery, SearchProductsQueryVariables>(SearchProductsDocument, options);
        }
export type SearchProductsQueryHookResult = ReturnType<typeof useSearchProductsQuery>;
export type SearchProductsLazyQueryHookResult = ReturnType<typeof useSearchProductsLazyQuery>;
export type SearchProductsQueryResult = Apollo.QueryResult<SearchProductsQuery, SearchProductsQueryVariables>;
export const CreateProductDocument = gql`
    mutation createProduct($name: String!, $description: String!, $price: Int!, $image: Upload) {
  createProduct(
    data: {name: $name, description: $description, price: $price, status: "AVAILABLE", photo: {create: {image: $image, altText: $name}}}
  ) {
    ...product
  }
}
    ${ProductFragmentDoc}`;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation updateProduct($id: ID!, $name: String!, $description: String!, $price: Int!) {
  updateProduct(
    id: $id
    data: {name: $name, description: $description, price: $price}
  ) {
    ...product
  }
}
    ${ProductFragmentDoc}`;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const DeleteProductDocument = gql`
    mutation deleteProduct($id: ID!) {
  deleteProduct(id: $id) {
    ...product
  }
}
    ${ProductFragmentDoc}`;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const AddToCartDocument = gql`
    mutation addToCart($productId: ID!) {
  addToCart(productId: $productId) {
    id
  }
}
    `;
export type AddToCartMutationFn = Apollo.MutationFunction<AddToCartMutation, AddToCartMutationVariables>;

/**
 * __useAddToCartMutation__
 *
 * To run a mutation, you first call `useAddToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToCartMutation, { data, loading, error }] = useAddToCartMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useAddToCartMutation(baseOptions?: Apollo.MutationHookOptions<AddToCartMutation, AddToCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddToCartMutation, AddToCartMutationVariables>(AddToCartDocument, options);
      }
export type AddToCartMutationHookResult = ReturnType<typeof useAddToCartMutation>;
export type AddToCartMutationResult = Apollo.MutationResult<AddToCartMutation>;
export type AddToCartMutationOptions = Apollo.BaseMutationOptions<AddToCartMutation, AddToCartMutationVariables>;
export const RemoveFromCartDocument = gql`
    mutation removeFromCart($productId: ID!) {
  deleteCartItem(id: $productId) {
    id
  }
}
    `;
export type RemoveFromCartMutationFn = Apollo.MutationFunction<RemoveFromCartMutation, RemoveFromCartMutationVariables>;

/**
 * __useRemoveFromCartMutation__
 *
 * To run a mutation, you first call `useRemoveFromCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFromCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFromCartMutation, { data, loading, error }] = useRemoveFromCartMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useRemoveFromCartMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFromCartMutation, RemoveFromCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveFromCartMutation, RemoveFromCartMutationVariables>(RemoveFromCartDocument, options);
      }
export type RemoveFromCartMutationHookResult = ReturnType<typeof useRemoveFromCartMutation>;
export type RemoveFromCartMutationResult = Apollo.MutationResult<RemoveFromCartMutation>;
export type RemoveFromCartMutationOptions = Apollo.BaseMutationOptions<RemoveFromCartMutation, RemoveFromCartMutationVariables>;
export const UserDocument = gql`
    query user {
  authenticatedItem {
    ... on User {
      id
      name
      email
      cart {
        id
        quantity
        product {
          id
          price
          name
          description
          photo {
            image {
              publicUrlTransformed
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  authenticateUserWithPassword(email: $email, password: $password) {
    ... on UserAuthenticationWithPasswordSuccess {
      item {
        id
        name
        email
      }
      sessionToken
    }
    ... on UserAuthenticationWithPasswordFailure {
      code
      message
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  endSession
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation register($name: String!, $email: String!, $password: String!) {
  createUser(data: {name: $name, email: $email, password: $password}) {
    id
    name
    email
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const RequestPasswordResetDocument = gql`
    mutation requestPasswordReset($email: String!) {
  sendUserPasswordResetLink(email: $email) {
    code
    message
  }
}
    `;
export type RequestPasswordResetMutationFn = Apollo.MutationFunction<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>;

/**
 * __useRequestPasswordResetMutation__
 *
 * To run a mutation, you first call `useRequestPasswordResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestPasswordResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestPasswordResetMutation, { data, loading, error }] = useRequestPasswordResetMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestPasswordResetMutation(baseOptions?: Apollo.MutationHookOptions<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>(RequestPasswordResetDocument, options);
      }
export type RequestPasswordResetMutationHookResult = ReturnType<typeof useRequestPasswordResetMutation>;
export type RequestPasswordResetMutationResult = Apollo.MutationResult<RequestPasswordResetMutation>;
export type RequestPasswordResetMutationOptions = Apollo.BaseMutationOptions<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation resetPassword($email: String!, $password: String!, $token: String!) {
  redeemUserPasswordResetToken(email: $email, password: $password, token: $token) {
    code
    message
  }
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export type UserKeySpecifier = ('id' | 'name' | 'email' | 'password_is_set' | 'cart' | '_cartMeta' | 'orders' | '_ordersMeta' | 'role' | 'products' | '_productsMeta' | 'passwordResetToken_is_set' | 'passwordResetIssuedAt' | 'passwordResetRedeemedAt' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	password_is_set?: FieldPolicy<any> | FieldReadFunction<any>,
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	_cartMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	_ordersMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	_productsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	passwordResetToken_is_set?: FieldPolicy<any> | FieldReadFunction<any>,
	passwordResetIssuedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	passwordResetRedeemedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductKeySpecifier = ('id' | 'name' | 'description' | 'status' | 'price' | 'photo' | 'user' | ProductKeySpecifier)[];
export type ProductFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	photo?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CloudinaryImage_FileKeySpecifier = ('id' | 'path' | 'filename' | 'originalFilename' | 'mimetype' | 'encoding' | 'publicUrl' | 'publicUrlTransformed' | CloudinaryImage_FileKeySpecifier)[];
export type CloudinaryImage_FileFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	originalFilename?: FieldPolicy<any> | FieldReadFunction<any>,
	mimetype?: FieldPolicy<any> | FieldReadFunction<any>,
	encoding?: FieldPolicy<any> | FieldReadFunction<any>,
	publicUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	publicUrlTransformed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductImageKeySpecifier = ('id' | 'image' | 'altText' | 'product' | ProductImageKeySpecifier)[];
export type ProductImageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	altText?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartItemKeySpecifier = ('id' | 'quantity' | 'product' | 'user' | CartItemKeySpecifier)[];
export type CartItemFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderKeySpecifier = ('id' | 'label' | 'total' | 'items' | '_itemsMeta' | 'user' | 'charge' | OrderKeySpecifier)[];
export type OrderFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	_itemsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	charge?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderItemKeySpecifier = ('id' | 'name' | 'description' | 'price' | 'photo' | 'quantity' | 'order' | OrderItemKeySpecifier)[];
export type OrderItemFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	photo?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoleKeySpecifier = ('id' | 'name' | 'canManageProducts' | 'canSeeOtherUsers' | 'canManageUsers' | 'canManageRoles' | 'canManageCart' | 'canManageOrders' | 'assignedTo' | '_assignedToMeta' | RoleKeySpecifier)[];
export type RoleFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	canManageProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	canSeeOtherUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	canManageUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	canManageRoles?: FieldPolicy<any> | FieldReadFunction<any>,
	canManageCart?: FieldPolicy<any> | FieldReadFunction<any>,
	canManageOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	assignedTo?: FieldPolicy<any> | FieldReadFunction<any>,
	_assignedToMeta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _ListAccessKeySpecifier = ('create' | 'read' | 'update' | 'delete' | 'auth' | _ListAccessKeySpecifier)[];
export type _ListAccessFieldPolicy = {
	create?: FieldPolicy<any> | FieldReadFunction<any>,
	read?: FieldPolicy<any> | FieldReadFunction<any>,
	update?: FieldPolicy<any> | FieldReadFunction<any>,
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	auth?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _ListQueriesKeySpecifier = ('item' | 'list' | 'meta' | _ListQueriesKeySpecifier)[];
export type _ListQueriesFieldPolicy = {
	item?: FieldPolicy<any> | FieldReadFunction<any>,
	list?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _ListMutationsKeySpecifier = ('create' | 'createMany' | 'update' | 'updateMany' | 'delete' | 'deleteMany' | _ListMutationsKeySpecifier)[];
export type _ListMutationsFieldPolicy = {
	create?: FieldPolicy<any> | FieldReadFunction<any>,
	createMany?: FieldPolicy<any> | FieldReadFunction<any>,
	update?: FieldPolicy<any> | FieldReadFunction<any>,
	updateMany?: FieldPolicy<any> | FieldReadFunction<any>,
	delete?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMany?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _ListInputTypesKeySpecifier = ('whereInput' | 'whereUniqueInput' | 'createInput' | 'createManyInput' | 'updateInput' | 'updateManyInput' | _ListInputTypesKeySpecifier)[];
export type _ListInputTypesFieldPolicy = {
	whereInput?: FieldPolicy<any> | FieldReadFunction<any>,
	whereUniqueInput?: FieldPolicy<any> | FieldReadFunction<any>,
	createInput?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyInput?: FieldPolicy<any> | FieldReadFunction<any>,
	updateInput?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyInput?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _ListSchemaFieldsKeySpecifier = ('path' | 'name' | 'type' | _ListSchemaFieldsKeySpecifier)[];
export type _ListSchemaFieldsFieldPolicy = {
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _ListSchemaRelatedFieldsKeySpecifier = ('type' | 'fields' | _ListSchemaRelatedFieldsKeySpecifier)[];
export type _ListSchemaRelatedFieldsFieldPolicy = {
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	fields?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _ListSchemaKeySpecifier = ('type' | 'queries' | 'mutations' | 'inputTypes' | 'fields' | 'relatedFields' | _ListSchemaKeySpecifier)[];
export type _ListSchemaFieldPolicy = {
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	queries?: FieldPolicy<any> | FieldReadFunction<any>,
	mutations?: FieldPolicy<any> | FieldReadFunction<any>,
	inputTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	fields?: FieldPolicy<any> | FieldReadFunction<any>,
	relatedFields?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _ListMetaKeySpecifier = ('key' | 'name' | 'description' | 'label' | 'singular' | 'plural' | 'path' | 'access' | 'schema' | _ListMetaKeySpecifier)[];
export type _ListMetaFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	singular?: FieldPolicy<any> | FieldReadFunction<any>,
	plural?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	access?: FieldPolicy<any> | FieldReadFunction<any>,
	schema?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _QueryMetaKeySpecifier = ('count' | _QueryMetaKeySpecifier)[];
export type _QueryMetaFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createUser' | 'createUsers' | 'updateUser' | 'updateUsers' | 'deleteUser' | 'deleteUsers' | 'createProduct' | 'createProducts' | 'updateProduct' | 'updateProducts' | 'deleteProduct' | 'deleteProducts' | 'createProductImage' | 'createProductImages' | 'updateProductImage' | 'updateProductImages' | 'deleteProductImage' | 'deleteProductImages' | 'createCartItem' | 'createCartItems' | 'updateCartItem' | 'updateCartItems' | 'deleteCartItem' | 'deleteCartItems' | 'createOrder' | 'createOrders' | 'updateOrder' | 'updateOrders' | 'deleteOrder' | 'deleteOrders' | 'createOrderItem' | 'createOrderItems' | 'updateOrderItem' | 'updateOrderItems' | 'deleteOrderItem' | 'deleteOrderItems' | 'createRole' | 'createRoles' | 'updateRole' | 'updateRoles' | 'deleteRole' | 'deleteRoles' | 'authenticateUserWithPassword' | 'createInitialUser' | 'sendUserPasswordResetLink' | 'redeemUserPasswordResetToken' | 'addToCart' | 'checkout' | 'endSession' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	createProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	createProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	createProductImage?: FieldPolicy<any> | FieldReadFunction<any>,
	createProductImages?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProductImage?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProductImages?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProductImage?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProductImages?: FieldPolicy<any> | FieldReadFunction<any>,
	createCartItem?: FieldPolicy<any> | FieldReadFunction<any>,
	createCartItems?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCartItem?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCartItems?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCartItem?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCartItems?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrderItem?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrderItems?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOrderItem?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOrderItems?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOrderItem?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOrderItems?: FieldPolicy<any> | FieldReadFunction<any>,
	createRole?: FieldPolicy<any> | FieldReadFunction<any>,
	createRoles?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRole?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRoles?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRole?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRoles?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticateUserWithPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	createInitialUser?: FieldPolicy<any> | FieldReadFunction<any>,
	sendUserPasswordResetLink?: FieldPolicy<any> | FieldReadFunction<any>,
	redeemUserPasswordResetToken?: FieldPolicy<any> | FieldReadFunction<any>,
	addToCart?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	endSession?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAuthenticationWithPasswordSuccessKeySpecifier = ('sessionToken' | 'item' | UserAuthenticationWithPasswordSuccessKeySpecifier)[];
export type UserAuthenticationWithPasswordSuccessFieldPolicy = {
	sessionToken?: FieldPolicy<any> | FieldReadFunction<any>,
	item?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAuthenticationWithPasswordFailureKeySpecifier = ('code' | 'message' | UserAuthenticationWithPasswordFailureKeySpecifier)[];
export type UserAuthenticationWithPasswordFailureFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SendUserPasswordResetLinkResultKeySpecifier = ('code' | 'message' | SendUserPasswordResetLinkResultKeySpecifier)[];
export type SendUserPasswordResetLinkResultFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ValidateUserPasswordResetTokenResultKeySpecifier = ('code' | 'message' | ValidateUserPasswordResetTokenResultKeySpecifier)[];
export type ValidateUserPasswordResetTokenResultFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RedeemUserPasswordResetTokenResultKeySpecifier = ('code' | 'message' | RedeemUserPasswordResetTokenResultKeySpecifier)[];
export type RedeemUserPasswordResetTokenResultFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('allUsers' | 'User' | '_allUsersMeta' | '_UsersMeta' | 'allProducts' | 'Product' | '_allProductsMeta' | '_ProductsMeta' | 'allProductImages' | 'ProductImage' | '_allProductImagesMeta' | '_ProductImagesMeta' | 'allCartItems' | 'CartItem' | '_allCartItemsMeta' | '_CartItemsMeta' | 'allOrders' | 'Order' | '_allOrdersMeta' | '_OrdersMeta' | 'allOrderItems' | 'OrderItem' | '_allOrderItemsMeta' | '_OrderItemsMeta' | 'allRoles' | 'Role' | '_allRolesMeta' | '_RolesMeta' | '_ksListsMeta' | 'authenticatedItem' | 'validateUserPasswordResetToken' | 'keystone' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	allUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	_allUsersMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	_UsersMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	allProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	Product?: FieldPolicy<any> | FieldReadFunction<any>,
	_allProductsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	_ProductsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	allProductImages?: FieldPolicy<any> | FieldReadFunction<any>,
	ProductImage?: FieldPolicy<any> | FieldReadFunction<any>,
	_allProductImagesMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	_ProductImagesMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	allCartItems?: FieldPolicy<any> | FieldReadFunction<any>,
	CartItem?: FieldPolicy<any> | FieldReadFunction<any>,
	_allCartItemsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	_CartItemsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	allOrders?: FieldPolicy<any> | FieldReadFunction<any>,
	Order?: FieldPolicy<any> | FieldReadFunction<any>,
	_allOrdersMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	_OrdersMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	allOrderItems?: FieldPolicy<any> | FieldReadFunction<any>,
	OrderItem?: FieldPolicy<any> | FieldReadFunction<any>,
	_allOrderItemsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	_OrderItemsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	allRoles?: FieldPolicy<any> | FieldReadFunction<any>,
	Role?: FieldPolicy<any> | FieldReadFunction<any>,
	_allRolesMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	_RolesMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	_ksListsMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticatedItem?: FieldPolicy<any> | FieldReadFunction<any>,
	validateUserPasswordResetToken?: FieldPolicy<any> | FieldReadFunction<any>,
	keystone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneMetaKeySpecifier = ('adminMeta' | KeystoneMetaKeySpecifier)[];
export type KeystoneMetaFieldPolicy = {
	adminMeta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminMetaKeySpecifier = ('enableSignout' | 'enableSessionItem' | 'lists' | 'list' | KeystoneAdminMetaKeySpecifier)[];
export type KeystoneAdminMetaFieldPolicy = {
	enableSignout?: FieldPolicy<any> | FieldReadFunction<any>,
	enableSessionItem?: FieldPolicy<any> | FieldReadFunction<any>,
	lists?: FieldPolicy<any> | FieldReadFunction<any>,
	list?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminUIListMetaKeySpecifier = ('key' | 'itemQueryName' | 'listQueryName' | 'hideCreate' | 'hideDelete' | 'path' | 'label' | 'singular' | 'plural' | 'description' | 'initialColumns' | 'pageSize' | 'labelField' | 'fields' | 'initialSort' | 'isHidden' | KeystoneAdminUIListMetaKeySpecifier)[];
export type KeystoneAdminUIListMetaFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	itemQueryName?: FieldPolicy<any> | FieldReadFunction<any>,
	listQueryName?: FieldPolicy<any> | FieldReadFunction<any>,
	hideCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	hideDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	singular?: FieldPolicy<any> | FieldReadFunction<any>,
	plural?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	initialColumns?: FieldPolicy<any> | FieldReadFunction<any>,
	pageSize?: FieldPolicy<any> | FieldReadFunction<any>,
	labelField?: FieldPolicy<any> | FieldReadFunction<any>,
	fields?: FieldPolicy<any> | FieldReadFunction<any>,
	initialSort?: FieldPolicy<any> | FieldReadFunction<any>,
	isHidden?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminUIFieldMetaKeySpecifier = ('path' | 'label' | 'isOrderable' | 'fieldMeta' | 'viewsIndex' | 'customViewsIndex' | 'createView' | 'listView' | 'itemView' | KeystoneAdminUIFieldMetaKeySpecifier)[];
export type KeystoneAdminUIFieldMetaFieldPolicy = {
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	isOrderable?: FieldPolicy<any> | FieldReadFunction<any>,
	fieldMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	viewsIndex?: FieldPolicy<any> | FieldReadFunction<any>,
	customViewsIndex?: FieldPolicy<any> | FieldReadFunction<any>,
	createView?: FieldPolicy<any> | FieldReadFunction<any>,
	listView?: FieldPolicy<any> | FieldReadFunction<any>,
	itemView?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminUIFieldMetaCreateViewKeySpecifier = ('fieldMode' | KeystoneAdminUIFieldMetaCreateViewKeySpecifier)[];
export type KeystoneAdminUIFieldMetaCreateViewFieldPolicy = {
	fieldMode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminUIFieldMetaListViewKeySpecifier = ('fieldMode' | KeystoneAdminUIFieldMetaListViewKeySpecifier)[];
export type KeystoneAdminUIFieldMetaListViewFieldPolicy = {
	fieldMode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminUIFieldMetaItemViewKeySpecifier = ('fieldMode' | KeystoneAdminUIFieldMetaItemViewKeySpecifier)[];
export type KeystoneAdminUIFieldMetaItemViewFieldPolicy = {
	fieldMode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeystoneAdminUISortKeySpecifier = ('field' | 'direction' | KeystoneAdminUISortKeySpecifier)[];
export type KeystoneAdminUISortFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	direction?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier),
		fields?: ProductFieldPolicy,
	},
	CloudinaryImage_File?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CloudinaryImage_FileKeySpecifier | (() => undefined | CloudinaryImage_FileKeySpecifier),
		fields?: CloudinaryImage_FileFieldPolicy,
	},
	ProductImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductImageKeySpecifier | (() => undefined | ProductImageKeySpecifier),
		fields?: ProductImageFieldPolicy,
	},
	CartItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartItemKeySpecifier | (() => undefined | CartItemKeySpecifier),
		fields?: CartItemFieldPolicy,
	},
	Order?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderKeySpecifier | (() => undefined | OrderKeySpecifier),
		fields?: OrderFieldPolicy,
	},
	OrderItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderItemKeySpecifier | (() => undefined | OrderItemKeySpecifier),
		fields?: OrderItemFieldPolicy,
	},
	Role?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RoleKeySpecifier | (() => undefined | RoleKeySpecifier),
		fields?: RoleFieldPolicy,
	},
	_ListAccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _ListAccessKeySpecifier | (() => undefined | _ListAccessKeySpecifier),
		fields?: _ListAccessFieldPolicy,
	},
	_ListQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _ListQueriesKeySpecifier | (() => undefined | _ListQueriesKeySpecifier),
		fields?: _ListQueriesFieldPolicy,
	},
	_ListMutations?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _ListMutationsKeySpecifier | (() => undefined | _ListMutationsKeySpecifier),
		fields?: _ListMutationsFieldPolicy,
	},
	_ListInputTypes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _ListInputTypesKeySpecifier | (() => undefined | _ListInputTypesKeySpecifier),
		fields?: _ListInputTypesFieldPolicy,
	},
	_ListSchemaFields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _ListSchemaFieldsKeySpecifier | (() => undefined | _ListSchemaFieldsKeySpecifier),
		fields?: _ListSchemaFieldsFieldPolicy,
	},
	_ListSchemaRelatedFields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _ListSchemaRelatedFieldsKeySpecifier | (() => undefined | _ListSchemaRelatedFieldsKeySpecifier),
		fields?: _ListSchemaRelatedFieldsFieldPolicy,
	},
	_ListSchema?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _ListSchemaKeySpecifier | (() => undefined | _ListSchemaKeySpecifier),
		fields?: _ListSchemaFieldPolicy,
	},
	_ListMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _ListMetaKeySpecifier | (() => undefined | _ListMetaKeySpecifier),
		fields?: _ListMetaFieldPolicy,
	},
	_QueryMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _QueryMetaKeySpecifier | (() => undefined | _QueryMetaKeySpecifier),
		fields?: _QueryMetaFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	UserAuthenticationWithPasswordSuccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAuthenticationWithPasswordSuccessKeySpecifier | (() => undefined | UserAuthenticationWithPasswordSuccessKeySpecifier),
		fields?: UserAuthenticationWithPasswordSuccessFieldPolicy,
	},
	UserAuthenticationWithPasswordFailure?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAuthenticationWithPasswordFailureKeySpecifier | (() => undefined | UserAuthenticationWithPasswordFailureKeySpecifier),
		fields?: UserAuthenticationWithPasswordFailureFieldPolicy,
	},
	SendUserPasswordResetLinkResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SendUserPasswordResetLinkResultKeySpecifier | (() => undefined | SendUserPasswordResetLinkResultKeySpecifier),
		fields?: SendUserPasswordResetLinkResultFieldPolicy,
	},
	ValidateUserPasswordResetTokenResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ValidateUserPasswordResetTokenResultKeySpecifier | (() => undefined | ValidateUserPasswordResetTokenResultKeySpecifier),
		fields?: ValidateUserPasswordResetTokenResultFieldPolicy,
	},
	RedeemUserPasswordResetTokenResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RedeemUserPasswordResetTokenResultKeySpecifier | (() => undefined | RedeemUserPasswordResetTokenResultKeySpecifier),
		fields?: RedeemUserPasswordResetTokenResultFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	KeystoneMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneMetaKeySpecifier | (() => undefined | KeystoneMetaKeySpecifier),
		fields?: KeystoneMetaFieldPolicy,
	},
	KeystoneAdminMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminMetaKeySpecifier | (() => undefined | KeystoneAdminMetaKeySpecifier),
		fields?: KeystoneAdminMetaFieldPolicy,
	},
	KeystoneAdminUIListMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminUIListMetaKeySpecifier | (() => undefined | KeystoneAdminUIListMetaKeySpecifier),
		fields?: KeystoneAdminUIListMetaFieldPolicy,
	},
	KeystoneAdminUIFieldMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminUIFieldMetaKeySpecifier | (() => undefined | KeystoneAdminUIFieldMetaKeySpecifier),
		fields?: KeystoneAdminUIFieldMetaFieldPolicy,
	},
	KeystoneAdminUIFieldMetaCreateView?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminUIFieldMetaCreateViewKeySpecifier | (() => undefined | KeystoneAdminUIFieldMetaCreateViewKeySpecifier),
		fields?: KeystoneAdminUIFieldMetaCreateViewFieldPolicy,
	},
	KeystoneAdminUIFieldMetaListView?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminUIFieldMetaListViewKeySpecifier | (() => undefined | KeystoneAdminUIFieldMetaListViewKeySpecifier),
		fields?: KeystoneAdminUIFieldMetaListViewFieldPolicy,
	},
	KeystoneAdminUIFieldMetaItemView?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminUIFieldMetaItemViewKeySpecifier | (() => undefined | KeystoneAdminUIFieldMetaItemViewKeySpecifier),
		fields?: KeystoneAdminUIFieldMetaItemViewFieldPolicy,
	},
	KeystoneAdminUISort?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeystoneAdminUISortKeySpecifier | (() => undefined | KeystoneAdminUISortKeySpecifier),
		fields?: KeystoneAdminUISortFieldPolicy,
	}
};