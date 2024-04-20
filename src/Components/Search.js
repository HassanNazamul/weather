import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions } from "../Api";

const Search = ({ onSeacrhChange }) => {
    const [search, setSearch] = useState(null);

    const handleOnChannge = (searchData) => {
        setSearch(searchData);
        onSeacrhChange(searchData);
    };

    const loadOptions = (inputValue) => {
        return fetch(
            `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=100000&namePrefix=${inputValue}`,
            geoApiOptions
        )
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name} ${city.countryCode}`,
                        }
                    })
                }
            })
            .catch((err) => console.error(err));
    };

    return (
        <AsyncPaginate
            placeholder="Seacrh for City"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChannge}
            loadOptions={loadOptions}
        ></AsyncPaginate>
    );
};

export default Search;
