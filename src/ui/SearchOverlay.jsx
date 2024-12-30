import { FaXmark } from "react-icons/fa6"


const SearchOverlay = ({toggleSearch,onToggleSearch}) => {
  return (
    <div
    id="searchOverlay"
    className={`fixed inset-0 bg-background-blurBg items-center justify-center search-overlay ${toggleSearch}`}
  >
    <button
      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      onClick={onToggleSearch}
    >
      <FaXmark className="text-3xl text-white linkhover"/>
    </button>
    <div  className="p-4 rounded-lg w-3/4 lg:w-2/3 relative">
      <form className="flex">
        <input
          className="w-full p-4 rounded-l-xl text-white bg-background-blurBg border border-solid border-secondary"
          placeholder="Search..."
          type="text"
          required
          name="search"
        />
        <button className="bg-secondary hover:bg-background text-black hover:text-secondary p-4 rounded-r-lg transition-all border border-solid border-secondary">
          Search
        </button>
      </form>
    </div>
  </div>
  )
}
export default SearchOverlay