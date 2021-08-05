import "./search.css";


export function Search({placeholder, filter}) {
    return (
        <input type="search" className="search-box" placeholder={placeholder} onChange={filter} />
    );
}