package com.dao;

import com.pojo.EchartsInfo;
import com.pojo.Product;
import com.pojo.SetOfPages;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface ProductDao {

    @Select("select * from SetOfPages")
    List<SetOfPages> PageAll();

    @Select("select * from productInfo")
    List<Product> ProductAll();

    @Select("select type from maptype")
    int mapType();

    @Update("UPDATE maptype SET type = 0;")
    Boolean UpdatemapType();

    @Update("UPDATE maptype SET type = #{type, jdbcType=INTEGER};")
    Boolean setType(@Param("type") Integer type);

    @Select("select * from productView WHERE echartsID=#{echartsID, jdbcType=INTEGER}")
    List<EchartsInfo> ProductView(@Param("echartsID") Integer echartsID);

}
