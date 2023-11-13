package com.moditech.ecommerce.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Getter
@Setter
@Document(collection = "product")
public class Product {

    @Id
    private String id;

    private String barcode;

    private String productName;

    private String productImage;

    private String description;

    private String isAd = "false";

    private List<ProductVariations> productVariationsList;
}
