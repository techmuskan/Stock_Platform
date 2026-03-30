import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import { useSiteContent } from "../../content/SiteContentContext";

const ProductsPage = () => {
  const { productsContent } = useSiteContent();
  return (
    <div>
      <Hero />
      {productsContent.map((product) =>
        product.layout === "left" ? (
          <LeftSection key={product.productName} {...product} />
        ) : (
          <RightSection key={product.productName} {...product} />
        )
      )}
      <Universe />
    </div>
  );
};

export default ProductsPage;
