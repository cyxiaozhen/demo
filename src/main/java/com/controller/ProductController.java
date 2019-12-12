package com.controller;

import com.pojo.EchartsInfo;
import com.pojo.Product;
import com.pojo.SetOfPages;
import com.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("report")
public class ProductController {

    @Autowired
    private ProductService productService;

    @RequestMapping("/findAll")
    public List<Product> findAll(){
        return productService.ProductAll();
    }

    @RequestMapping("/selelMapType")
    public int mapType(){
        return productService.mapType();
    }

    @RequestMapping("/UpdateType")
    public Boolean UpdateMapType(){
        return productService.UpdatemapType();
    }

    @PostMapping("/setType")
    public Boolean UpdateMapType(@RequestParam(value = "type",required=false, defaultValue = "0") int type){
        return productService.setType(type);
    }

    @RequestMapping("/selectAll")
    public List<EchartsInfo> ProductView(@RequestParam(value = "echartsID",required=false, defaultValue = "1") int echartsID)  {
        return productService.ProductView(echartsID);
    }

//    @RequestMapping("/pageAll")
    @GetMapping("/pageAll")
    public List<SetOfPages> selectAll() {
        return productService.PageAll();
    }
}

