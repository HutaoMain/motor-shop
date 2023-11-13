package com.moditech.ecommerce.service;

import com.moditech.ecommerce.dto.ProductDto;
import com.moditech.ecommerce.model.Product;
import com.moditech.ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public Product createProduct(ProductDto productDto) {
        Product product = new Product();
        product.setBarcode(productDto.getBarcode());
        product.setProductName(productDto.getProductName());
        product.setProductImage(productDto.getProductImage());
        product.setDescription(productDto.getDescription());
        product.setProductVariationsList(productDto.getProductVariationsList());
        return productRepository.save(product);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Product> getTopSoldProducts() {
        Sort sort = Sort.by(Sort.Direction.DESC, "sold");
        Pageable pageable = PageRequest.of(0, 8, sort);
        return productRepository.findAll(pageable).getContent();
    }

    public Product getProductById(String id) {
        return productRepository.findById(id).orElse(null);
    }

    public void deleteProductById(String productId) {
        productRepository.deleteById(productId);
    }

    public Product updateProduct(String id, Product product) {
        Product setProduct = productRepository.findById(id).orElse(null);

        assert setProduct != null;

        if (product.getProductName() != null && !product.getProductName().isEmpty()) {
            setProduct.setProductName(product.getProductName());
        }

        if (product.getProductImage() != null && !product.getProductImage().isEmpty()) {
            setProduct.setProductImage(product.getProductImage());
        }

        if (product.getDescription() != null && !product.getDescription().isEmpty()) {
            setProduct.setDescription(product.getDescription());
        }

        if (product.getBarcode() != null && !product.getBarcode().isEmpty()) {
            setProduct.setBarcode(product.getBarcode());
        }

        if (product.getIsAd() != null && !product.getIsAd().isEmpty()) {
            setProduct.setIsAd(product.getIsAd());
        }

        productRepository.save(setProduct);

        return setProduct;
    }

    public Product addProductVariation(String id, Product addProductVariation) {
        Product product = productRepository.findById(id).orElse(null);
        assert product != null;
        product.setProductVariationsList(addProductVariation.getProductVariationsList());
        return productRepository.save(product);

    }
}
