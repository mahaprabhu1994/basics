import React, { useState } from 'react';
import Filter from './Filter';
import FilterComponents from './FilterComponents';

function SearchBox() {
    const [search, setSearch] = useState('');
    const funcRes = () => {
        return <>
            {
                search === '' &&
                <Filter />
            }
            {
                search && <FilterComponents searchVal={search} />
            }
        </>
    }
    return (
        <div>
            <form >
                <input type='text' onChange={(e) => { setSearch(e.target.value) }} />
            </form>
            {funcRes()}
        </div>
    )
}

export default SearchBox