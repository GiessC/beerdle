import Beer from '../../types/Beer';

interface SearchBeerProps extends React.HTMLAttributes<HTMLDivElement> {
    beer: Beer;
}

const SearchBeer = ({ beer, ...props }: SearchBeerProps) => {
    return (
        <div
            className='flex justify-center border-t-2 border-gray-500 h-20 text-lg text-center'
            {...props}></div>
    );
};

export default SearchBeer;
