/* Core */
import { useRouter } from 'next/router';
import { useCombobox } from 'downshift';
import debounce from 'lodash.debounce';

/* Components */
import { SearchStyles, DropDown, DropDownItem } from '@/components/styled';

/* Instruments */
import * as gql from '@/graphql';

export const Search: React.FC<SearchProps> = () => {
    const router = useRouter();

    const [
        searchProducts,
        searchProductsQueryMeta,
    ] = gql.useSearchProductsLazyQuery({ fetchPolicy: 'no-cache' });

    const searchProductsDebounced = debounce(searchProducts, 350);

    const {
        inputValue: searchTerm,
        getMenuProps,
        getInputProps,
        getComboboxProps,
        getItemProps,
        highlightedIndex,
        isOpen,
    } = useCombobox({
        items: searchProductsQueryMeta.data?.searchTerms ?? [],
        onInputValueChange() {
            searchProductsDebounced({ variables: { searchTerm } });
        },
        onSelectedItemChange(options) {
            router.push(`/product/${options.selectedItem.id}`);
        },
        itemToString: product => product?.name ?? '',
    });

    const foundProductsJSX =
        isOpen &&
        searchProductsQueryMeta.data?.searchTerms.map((product, index) => {
            return (
                <DropDownItem
                    $highlighted = { index === highlightedIndex }
                    { ...getItemProps({ item: product, index }) }
                    key = { product.id }
                >
                    <img
                        alt = { product.name }
                        src = { product.photo.image.publicUrlTransformed }
                        width = '50'
                    />
                    {product.name}
                </DropDownItem>
            );
        });

    return (
        <SearchStyles>
            <div { ...getComboboxProps() }>
                <input
                    { ...getInputProps({
                        id:          'search',
                        type:        'search',
                        placeholder: 'Search for a product...',
                        className:   searchProductsQueryMeta.loading
                            ? 'loading'
                            : '',
                    }) }
                />
            </div>
            <DropDown { ...getMenuProps() }>
                {foundProductsJSX}
                {isOpen &&
                    !searchProductsQueryMeta.data?.searchTerms.length &&
                    searchProductsQueryMeta.loading && (
                    <DropDownItem $highlighted = { false }>
                        Sorry, no items found...
                    </DropDownItem>
                )}
            </DropDown>
        </SearchStyles>
    );
};

/* Types */
interface SearchProps {}
