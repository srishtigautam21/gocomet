import React from "react";
import "./ProductPage.css";
import { SideBar } from "../../component/Sidebar/SideBar";

import { Card } from "../../component/Card/Card";
import { useFilterHook } from "../../component/Sidebar/useFilterHook";

const ProductsPage = () => {
  const finalFilterData = useFilterHook();
  return (
    <div className='product-container'>
      <aside className='position-fixed sidebar-flex'>
        <SideBar />
      </aside>
      <div className='vertical-cards cards-wrapper'>
        {finalFilterData.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export { ProductsPage };
