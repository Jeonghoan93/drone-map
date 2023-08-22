import { useState } from "react";
import { Outlet } from "react-router-dom";
import DroneForm from "src/components/DroneCreateForm";
import DroneList from "src/components/DroneList";
import { Modal } from "src/components/Modal";
import Navbar from "../components/Navbar";
import { Header, Main } from "./styles";

const Layout = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isListModalOpen, setIsListModalOpen] = useState(false);

  return (
    <>
      <Header>
        <Navbar
          onAddClick={() => setIsFormModalOpen(true)}
          onListClick={() => setIsListModalOpen(true)}
        />
      </Header>
      <Modal isOpen={isFormModalOpen} onClose={() => setIsFormModalOpen(false)}>
        <DroneForm />
      </Modal>
      <Modal isOpen={isListModalOpen} onClose={() => setIsListModalOpen(false)}>
        <DroneList />
      </Modal>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Layout;
