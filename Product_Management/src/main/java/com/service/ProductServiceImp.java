package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Product;
import com.repository.ProductRepository;

@Service
public class ProductServiceImp implements ProductService {

	@Autowired
	public ProductRepository productRepo;
	
	@Override
	public Product saveProduct(Product product) {
		
		return productRepo.save(product);
	}

	@Override
	public List<Product> getAllProduct() {
		
		return productRepo.findAll();
	}

	@Override
	public Optional<Product> getProductById(Integer id) {
		
		return productRepo.findById(id);
	}

	@Override
	public String deleteProduct(Integer id) {
		
		Product product = productRepo.findById(id).get();
		
		if(product != null) {
			productRepo.delete(product);
			
			return "Product Delete Successfully";
		}
		
		return "Somethig Wrong on server ";
		
	}
	
	

}
