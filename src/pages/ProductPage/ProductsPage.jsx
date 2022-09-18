import React from "react";
import "./ProductPage.css";
import { SideBar } from "../../component/Sidebar/SideBar";
import { Card } from "../../component/Card/Card";
import { useFilterHook } from "../../component/Sidebar/useFilterHook";
import { useDocumentTitle } from "../../useDocumentTitle";

const ProductsPage = () => {
  useDocumentTitle("Products Page");
  const finalFilterData = useFilterHook();
  return (
    <div className='product-container'>
      <aside className='position-fixed sidebar-flex'>
        <SideBar />
      </aside>
      <div className='vertical-cards cards-wrapper'>
        {finalFilterData.length !== 0 ? (
          finalFilterData.map((product) => {
            return <Card key={product.id} product={product} />;
          })
        ) : (
          <div>There are no matching products</div>
        )}
      </div>
    </div>
  );
};

export { ProductsPage };
