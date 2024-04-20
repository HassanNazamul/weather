import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({onSeacrhChange}) => {

    const [search, setSearch] = useState(null); 
    const handleOnChannge = (searchData) =>{

        setSearch(searchData);
        onSeacrhChange(searchData);

    }

    return (

        <AsyncPaginate 
            placeholder="Seacrh for City"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChannge}
        >

        </AsyncPaginate>
    
    )
}

export default Search;