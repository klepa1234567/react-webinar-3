import React from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {
  const list = store.getState().list;

  return (
    <PageLayout>
      <Head title='Магазин'/>
      <Controls
        deleteProduct={store.deleteProduct}
        price={store.price}
        products={store.products}
      />
      <List addProduct={store.addProduct}  list={list} />
    </PageLayout>
  );
}

export default App;
