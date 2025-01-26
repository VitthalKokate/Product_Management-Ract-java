package com.service;

import java.util.List;
import java.util.Optional;

import com.model.Product;

public interface ProductService {
	
	public Product saveProduct(Product product);
	
	public List<Product> getAllProduct();
	
	public Optional<Product> getProductById(Integer id);
	
	public String deleteProduct(Integer id);

}
