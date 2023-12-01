const CategoryButton = ({
  buttonText,
  categoryFilter,
  categorySelected,
  setCategorySelected,
}) => {
  return (
    <button
      className={`${ (categorySelected === buttonText) ? 'bg-teal-400 font-bold text-white' : 'bg-gray-100'} py-1 px-5 rounded-lg border border-gray-300 hover:bg-gray-200 hover:border-gray-500 transition-all`}
      onClick={() => {
        setCategorySelected(buttonText);
      }}
    >
      {buttonText}
    </button>
  );
};

export default CategoryButton;
