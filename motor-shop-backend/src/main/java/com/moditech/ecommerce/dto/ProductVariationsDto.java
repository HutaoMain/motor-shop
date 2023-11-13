package com.moditech.ecommerce.dto;

import com.moditech.ecommerce.model.Product;
import lombok.Data;

@Data
public class ProductVariationsDto {

    private String id;

    private String variationName;

    private Double price;

    private String imgUrl;

    private Long quantity;

    private String description;

    private Integer sold = 0;

    private Product product;
}