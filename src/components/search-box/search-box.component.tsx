import { ChangeEvent } from 'react';
import './search-box.styles.css'

// Typescript
// never use any keyword
// const name: string = 999 will throw error
// const func: (a: string, b: number, c: boolean) => void = (a, b, c) => {}
// const func2: (a: string, b: number, c: boolean) => boolean = (a, b, c) => {return true}
// type~funcitonal style or interface~object oriented style - extendable like class component
// interface ISearchBoxProps {
//     className: string;
//     placeholder?: string; //either string or null with '?'
// }

// interface ISearchBoxProps {
//     onChangeHandler: (a: string) => void
// }

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    // func: ChangeEventHandler;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

// type CanadianAddress = {
//     street: string;
//     province: string;
// }

// type USAddress = {
//     street: string;
//     state: string;
// }

// type NorthAmericanAddress = CanadianAddress | USAddress;

// const Address: NorthAmericanAddress = {
//     street: '',
//     state: '',
//     province: ''
// }

const SearchBox = ( {className, placeholder, onChangeHandler}: SearchBoxProps) => {
    return (
        <input 
        className={`search-box ${className}`}
        type="search" 
        placeholder={placeholder}
        onChange={onChangeHandler} 
        />
    )
}

export default SearchBox;