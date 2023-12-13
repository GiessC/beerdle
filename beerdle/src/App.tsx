import GuessList from './components/guessList/GuessList';
import Header from './components/header/Header';
import Search from './components/search/Search';

function App() {
    return (
        <div className='flex flex-col align-middle h-screen w-screen'>
            <div className='my-auto'>
                <Header />
                <Search />
                <GuessList />
            </div>
        </div>
    );
}

export default App;

