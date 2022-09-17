import React from "react";
import "./ProductPage.css";
import { SideBar } from "../../component/Sidebar/SideBar";
import { useDb } from "../../context/Db";
import { Card } from "../../component/Card/Card";

const ProductsPage = () => {
  const { dataBase } = useDb();
  return (
    <div className='product-container'>
      <aside className='position-fixed sidebar-flex'>
        <SideBar />
      </aside>
      <div className='vertical-cards'>
        {dataBase.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export { ProductsPage };
