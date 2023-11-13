package com.moditech.ecommerce.service;

import com.moditech.ecommerce.dto.ProductDto;
import com.moditech.ecommerce.dto.ProductVariationsDto;
import com.moditech.ecommerce.model.ProductVariations;
import com.moditech.ecommerce.repository.ProductVariationsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductVariationsService {

    @Autowired
    ProductVariationsRepository productVariationsRepository;

//    public ProductVariations createProductVariation(ProductVariationsDto productVariationsDto) {
//        ProductVariations productVariations = new ProductVariations();
//        productVariations.setProduct(productVariationsDto.getProduct());
//        productVariations.setVariationName(productVariationsDto.getVariationName());
//        productVariations.setQuantity(productVariationsDto.getQuantity());
//        productVariations.setPrice(productVariationsDto.getPrice());
//        productVariations.setImgUrl(productVariationsDto.getImgUrl());
//        productVariations.setDescription(productVariationsDto.getDescription());
//
//        return productVariationsRepository.save(productVariations);
//    }
}
