import ZoomInIcon from '@mui/icons-material/ZoomIn';

const SearchBox = () => {
    return (
        <div className="SearchBox postion-relative d-flex align-items-center">
            <ZoomInIcon className='mx-2'/>
            <input type="search" placeholder="Search here..." />
        </div>
    );
}

export default SearchBox;