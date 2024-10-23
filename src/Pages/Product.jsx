import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    
    // Find the selected product based on the productId from the URL
    const product = all_product.find((e) => e.id === Number(productId));

    if (!product) {
        return <div>Product not found!</div>;  // Handle invalid product ID case
    }

    // Assuming each product has a `category` and `name` field
    const category = product.category;  // e.g., "Men", "Women", "Electronics"
    const productName = product.name;   // e.g., "Smartphone"

    return (
        <div>
            {/* Pass the dynamic category and productName to the breadcrumb */}
            <Breadcrum category={category} productName={productName} />
            {/* Display the product details */}
            <ProductDisplay product={product} />
        </div>
    );
};

export default Product;
