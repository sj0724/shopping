function PageBtn({ item, setPage, currentPage }) {
  return (
    <li
      className={`flex justify-center items-center w-10 h-10 border rounded-md hover:bg-gray-200 cursor-pointer ${
        currentPage === item ? 'bg-gray-200' : 'bg-none'
      }`}
      onClick={() => setPage(item)}
    >
      {item}
    </li>
  );
}

export default PageBtn;
