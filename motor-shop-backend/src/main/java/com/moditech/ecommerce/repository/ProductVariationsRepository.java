package com.moditech.ecommerce.repository;

import com.moditech.ecommerce.model.ProductVariations;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductVariationsRepository extends MongoRepository<ProductVariations, Long> {
}
