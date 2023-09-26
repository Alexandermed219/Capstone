useEffect(() => {
    const fetchAllProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      console.log(products);
    }
    
  fetchAllProducts();
    },[]);