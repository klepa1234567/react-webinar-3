import React, {useState} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from "./components/modal";



function App({store}) {
  const list = store.getState().list;
  const [modalWindow, setModalWindow] = useState(false)
  const openModal = () =>{
    setModalWindow(true)
  }
  const closeModal = () => {
    setModalWindow(false)
  }
  return (
    <PageLayout>
      <Head title='Магазин'/>
      <Controls
        openModal={openModal}
        price={store.price}
        products={store.products}
        counter={store.count}
      />
      <List addProduct={store.addProduct}  list={list} />
      {modalWindow && <Modal
        deleteProduct={store.deleteProduct}
        price={store.price}
        products={store.products}
        closeModal={closeModal}
      />}
    </PageLayout>
  );
}

export default App;
