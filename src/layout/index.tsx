import { useState } from "react";
import { Outlet } from "react-router-dom";
import DroneCreateForm from "src/components/DroneCreateForm";
import DroneList from "src/components/DroneList";
import { Modal } from "src/components/Modal";
import { DroneProvider } from "src/contexts/DroneContext";
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
      <DroneProvider>
        <Modal
          isOpen={isFormModalOpen}
          onClose={() => setIsFormModalOpen(false)}
        >
          <DroneCreateForm />
        </Modal>
        <Modal
          isOpen={isListModalOpen}
          onClose={() => setIsListModalOpen(false)}
        >
          <DroneList />
        </Modal>
        <Main>
          <Outlet />
        </Main>
      </DroneProvider>
    </>
  );
};

export default Layout;
