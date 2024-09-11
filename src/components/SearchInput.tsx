import { useState } from "react";
import { Form } from "react-router-dom";
import { VscSearch } from "react-icons/vsc";
export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  //   const navigate = useNavigate();

  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     navigate(`/search?term=${searchTerm}`);
  //   };

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         value={searchTerm}
  //         onChange={(e) => setSearchTerm(e.target.value)}
  //       />
  //     </form>
  //   );
  return (
    <Form
      action="/search"
      method="get"
      className="border-gray-200 rounded-md shadow-sm border-2"
    >
      <div className="relative">
        <div className="absolute inset-y-2 flex pl-3">
          <VscSearch className="h-5 w-5 text-gray-500" />
        </div>
      </div>
      <input
        type="text"
        name="term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10 py-2 w-full border-0 shadow-none"
      />
    </Form>
  );
}
