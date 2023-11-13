package com.moditech.ecommerce.dto;

import com.moditech.ecommerce.model.ProductVariations;
import lombok.Data;

import java.util.List;

@Data
public class ProductDto {

    private String id;

    private String barcode;

    private String productName;

    private String productImage;

    private String description;

    private String isAd = "false";

    private List<ProductVariations> productVariationsList;
}
