package com.moditech.ecommerce.controller;

import com.moditech.ecommerce.dto.ProductVariationsDto;
import com.moditech.ecommerce.model.ProductVariations;
import com.moditech.ecommerce.service.ProductVariationsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productVariations")
public class ProductVariationsController {

    @Autowired
    ProductVariationsService productVariationsService;

//    @PostMapping("/create")
//    public ProductVariations createProductVariation(@RequestBody ProductVariationsDto productVariationsDto) {
//        return productVariationsService.createProductVariation(productVariationsDto);
//    }

}
