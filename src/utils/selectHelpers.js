export function selectListingsSort(size, callback) {
  return (
    <div className="select-container">
      <select
        className={`form-select form-select-${size}
                  align-middle
                  inline
                  px-3
                  py-1.5
                  font-normal
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  mt-4
                  pr-6
                  focus:outline-none`}
        onChange={callback}
      >
        <option value="newest" defaultValue>
          Newest
        </option>
        <option value="oldest">Oldest</option>
        <option value="asc">Price Asc</option>
        <option value="desc">Price Desc</option>
      </select>
    </div>
  );
}
