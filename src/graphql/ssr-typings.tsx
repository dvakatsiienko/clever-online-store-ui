import { gql } from '@apollo/client';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import type { NormalizedCacheObject } from '@apollo/client';
export const OrderDocument = gql`
    query order($id: ID!) {
  order: Order(where: {id: $id}) {
    ...order
  }
}
    ${OrderFragmentDoc}`;
export async function getServerPageOrder
    (options: Omit<Apollo.QueryOptions<OrderQueryVariables>, 'query'>, apolloClient: Apollo.ApolloClient<NormalizedCacheObject> ){
        
        
        const data = await apolloClient.query<OrderQuery>({ ...options, query:Operations.OrderDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export type PageOrderComp = React.FC<{data?: OrderQuery, error?: Apollo.ApolloError}>;
export const withPageOrder = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<OrderQuery, OrderQueryVariables>) => (WrappedComponent:PageOrderComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.OrderDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrOrder = {
      getServerPage: getServerPageOrder,
      withPage: withPageOrder,
      
    }
export const AllOrdersDocument = gql`
    query allOrders {
  allOrders {
    ...order
  }
}
    ${OrderFragmentDoc}`;
export async function getServerPageAllOrders
    (options: Omit<Apollo.QueryOptions<AllOrdersQueryVariables>, 'query'>, apolloClient: Apollo.ApolloClient<NormalizedCacheObject> ){
        
        
        const data = await apolloClient.query<AllOrdersQuery>({ ...options, query:Operations.AllOrdersDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export type PageAllOrdersComp = React.FC<{data?: AllOrdersQuery, error?: Apollo.ApolloError}>;
export const withPageAllOrders = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<AllOrdersQuery, AllOrdersQueryVariables>) => (WrappedComponent:PageAllOrdersComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.AllOrdersDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrAllOrders = {
      getServerPage: getServerPageAllOrders,
      withPage: withPageAllOrders,
      
    }
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
export const ProductsDocument = gql`
    query products($first: Int, $skip: Int = 0) {
  allProducts(first: $first, skip: $skip, sortBy: id_DESC) {
    ...product
  }
}
    ${ProductFragmentDoc}`;
export async function getServerPageProducts
    (options: Omit<Apollo.QueryOptions<ProductsQueryVariables>, 'query'>, apolloClient: Apollo.ApolloClient<NormalizedCacheObject> ){
        
        
        const data = await apolloClient.query<ProductsQuery>({ ...options, query:Operations.ProductsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export type PageProductsComp = React.FC<{data?: ProductsQuery, error?: Apollo.ApolloError}>;
export const withPageProducts = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<ProductsQuery, ProductsQueryVariables>) => (WrappedComponent:PageProductsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ProductsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrProducts = {
      getServerPage: getServerPageProducts,
      withPage: withPageProducts,
      
    }
export const ProductsCountDocument = gql`
    query productsCount {
  _allProductsMeta {
    count
  }
}
    `;
export async function getServerPageProductsCount
    (options: Omit<Apollo.QueryOptions<ProductsCountQueryVariables>, 'query'>, apolloClient: Apollo.ApolloClient<NormalizedCacheObject> ){
        
        
        const data = await apolloClient.query<ProductsCountQuery>({ ...options, query:Operations.ProductsCountDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export type PageProductsCountComp = React.FC<{data?: ProductsCountQuery, error?: Apollo.ApolloError}>;
export const withPageProductsCount = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<ProductsCountQuery, ProductsCountQueryVariables>) => (WrappedComponent:PageProductsCountComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ProductsCountDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrProductsCount = {
      getServerPage: getServerPageProductsCount,
      withPage: withPageProductsCount,
      
    }
export const ProductDocument = gql`
    query product($id: ID!) {
  Product(where: {id: $id}) {
    ...product
  }
}
    ${ProductFragmentDoc}`;
export async function getServerPageProduct
    (options: Omit<Apollo.QueryOptions<ProductQueryVariables>, 'query'>, apolloClient: Apollo.ApolloClient<NormalizedCacheObject> ){
        
        
        const data = await apolloClient.query<ProductQuery>({ ...options, query:Operations.ProductDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export type PageProductComp = React.FC<{data?: ProductQuery, error?: Apollo.ApolloError}>;
export const withPageProduct = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<ProductQuery, ProductQueryVariables>) => (WrappedComponent:PageProductComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.ProductDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrProduct = {
      getServerPage: getServerPageProduct,
      withPage: withPageProduct,
      
    }
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
export async function getServerPageSearchProducts
    (options: Omit<Apollo.QueryOptions<SearchProductsQueryVariables>, 'query'>, apolloClient: Apollo.ApolloClient<NormalizedCacheObject> ){
        
        
        const data = await apolloClient.query<SearchProductsQuery>({ ...options, query:Operations.SearchProductsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export type PageSearchProductsComp = React.FC<{data?: SearchProductsQuery, error?: Apollo.ApolloError}>;
export const withPageSearchProducts = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<SearchProductsQuery, SearchProductsQueryVariables>) => (WrappedComponent:PageSearchProductsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.SearchProductsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrSearchProducts = {
      getServerPage: getServerPageSearchProducts,
      withPage: withPageSearchProducts,
      
    }
export const CreateProductDocument = gql`
    mutation createProduct($name: String!, $description: String!, $price: Int!, $image: Upload) {
  createProduct(
    data: {name: $name, description: $description, price: $price, status: "AVAILABLE", photo: {create: {image: $image, altText: $name}}}
  ) {
    ...product
  }
}
    ${ProductFragmentDoc}`;
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
export const DeleteProductDocument = gql`
    mutation deleteProduct($id: ID!) {
  deleteProduct(id: $id) {
    ...product
  }
}
    ${ProductFragmentDoc}`;
export const AddToCartDocument = gql`
    mutation addToCart($productId: ID!) {
  addToCart(productId: $productId) {
    id
  }
}
    `;
export const RemoveFromCartDocument = gql`
    mutation removeFromCart($productId: ID!) {
  deleteCartItem(id: $productId) {
    id
  }
}
    `;
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
export async function getServerPageUser
    (options: Omit<Apollo.QueryOptions<UserQueryVariables>, 'query'>, apolloClient: Apollo.ApolloClient<NormalizedCacheObject> ){
        
        
        const data = await apolloClient.query<UserQuery>({ ...options, query:Operations.UserDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export type PageUserComp = React.FC<{data?: UserQuery, error?: Apollo.ApolloError}>;
export const withPageUser = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<UserQuery, UserQueryVariables>) => (WrappedComponent:PageUserComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.UserDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrUser = {
      getServerPage: getServerPageUser,
      withPage: withPageUser,
      
    }
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
export const LogoutDocument = gql`
    mutation logout {
  endSession
}
    `;
export const RegisterDocument = gql`
    mutation register($name: String!, $email: String!, $password: String!) {
  createUser(data: {name: $name, email: $email, password: $password}) {
    id
    name
    email
  }
}
    `;
export const RequestPasswordResetDocument = gql`
    mutation requestPasswordReset($email: String!) {
  sendUserPasswordResetLink(email: $email) {
    code
    message
  }
}
    `;
export const ResetPasswordDocument = gql`
    mutation resetPassword($email: String!, $password: String!, $token: String!) {
  redeemUserPasswordResetToken(email: $email, password: $password, token: $token) {
    code
    message
  }
}
    `;