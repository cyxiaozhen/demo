package com.service;

import com.dao.ProductDao;
import com.pojo.EchartsInfo;
import com.pojo.Product;
import com.pojo.SetOfPages;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements ProductDao{

    @Autowired
    ProductDao productDao;

    public List<Product> ProductAll(){
      return productDao.ProductAll();
    }

    @Override
    public int mapType() {
        return productDao.mapType();
    }

    @Override
    public Boolean UpdatemapType() {
        return productDao.UpdatemapType();
    }

    @Override
    public Boolean setType(Integer type) {
        return productDao.setType(type);
    }

    @Override
    public List<EchartsInfo> ProductView(Integer echartsID) {
        return productDao.ProductView(echartsID);
    }

    @Override
    public List<SetOfPages> PageAll()
    {
      return productDao.PageAll();
    };
}
