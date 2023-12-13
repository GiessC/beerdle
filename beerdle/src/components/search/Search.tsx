import { useEffect, useState } from 'react';
import BeerAPI from '../../api/beers/BeerAPI';
import Beer from '../../types/Beer';
import SearchBeer from './SearchBeer';

const Search = () => {
    const [query, setQuery] = useState<string>('');
    const [autoCompleteList, setAutoCompleteList] = useState<Beer[]>([]);

    useEffect(() => {
        if (!query) {
            setAutoCompleteList([]);
            return;
        }
        const getAutoCompleteList = async () => {
            const beers: Beer[] = await BeerAPI.getInstance().getBeersByName(
                query,
                5,
            );
            setAutoCompleteList(beers);
        };
        getAutoCompleteList();
    }, [query]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <div className='flex justify-center'>
            <div className='w-2/3 h-auto rounded-md border-2 border-gray-500'>
                <input
                    value={query}
                    onChange={handleChange}
                    className='w-full h-20 text-xl text-center'
                    placeholder='Enter beer name'
                    aria-autocomplete='list'
                    autoComplete='on'
                    type='text'
                />
                <div className='flex flex-col autocomplete-list'>
                    {autoCompleteList.map((beer: Beer) => (
                        <SearchBeer beer={beer} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
