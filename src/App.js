import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { ListContact } from "./components/ListContact";

import { SearchForm } from "./components/SearchForm";
import { fetchContact } from "./helpers/axiosHelper";

function App() {
  const [contact, setContact] = useState([]);
  const handleOnSubmit = async (str) => {
    const result = await fetchContact(str);
    setContact(result);
  };
  console.log(contact);
  return (
    <div className="App">
      <Container className="mt-5">
        <SearchForm handleOnSubmit={handleOnSubmit} />
        <hr />
        <ListContact contact={contact} />
      </Container>
    </div>
  );
}

export default App;
