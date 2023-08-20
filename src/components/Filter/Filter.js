export const Filter = ({ filter, onChange }) => {
    return (
    <>
        <h2 className="Filter" >Find contacts by name</h2>
            <input className="InputFilter"
                type="text"
                name="filter"
                value={filter}
                onChange={({ target }) => onChange(target.value)}
                        />
    </>
  );
};