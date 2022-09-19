import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { ListAllContact } from "./components/ListAllContact";
import { ListContact } from "./components/ListContact";

import { SearchForm } from "./components/SearchForm";
import { fetchAllContacts, fetchContact } from "./helpers/axiosHelper";

function App() {
  const [contact, setContact] = useState([]);
  const [allContact, setAllContact] = useState([]);

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const allResult = await fetchAllContacts();
      setAllContact(allResult);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  const handleOnSubmit = async (str) => {
    const result = await fetchContact(str);

    setContact(result);
  };
  // console.log(contact);
  return (
    <div className="App">
      <Container className="mt-5">
        <SearchForm handleOnSubmit={handleOnSubmit} />
        <hr />
        <ListContact contact={contact} />
        <ListAllContact allContact={allContact} />
      </Container>
    </div>
  );
}

export default App;
