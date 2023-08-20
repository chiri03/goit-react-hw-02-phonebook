export const Filter = ({ filter, onChange }) => {
    return (
        <>
            <h2 className="Filter" style={{ marginLeft: "200px" }}>
                Find contacts by name
            </h2>
            <input
                className="InputFilter"
                type="text"
                name="filter"
                value={filter}
                onChange={(event) => onChange(event.target.value)} // Use 'event' instead of 'target'
                style={{ marginLeft: "200px", height: "20px" }}
            />
        </>
    );
};