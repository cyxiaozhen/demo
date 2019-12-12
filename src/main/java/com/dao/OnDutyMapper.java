package com.dao;

import com.pojo.CityOnDuty;
import com.pojo.OnDuty;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface OnDutyMapper {

    @Insert("INSERT into onDuty VALUES (#{date},#{week},#{zhzName},#{zhzPosition},#{zhzPhone},#{zbzRoom},#{zbzName},#{zbzPhone},#{zbyName},#{zbyPhone},#{whiteShift},#{nightShift})")
    int insert(OnDuty onDuty);

    @Select("select * from onDuty")
    List<OnDuty> selelAll();

    @Select("select * from onDuty WHERE TO_DAYS(date)=TO_DAYS(NOW())")
    OnDuty selectNow();

    @Insert("INSERT INTO cityOnDuty VALUES (#{date},#{week},#{name},#{position},#{phone},#{room},#{userId},#{cityId})")
    int insCityOnduty(CityOnDuty cityOnDuty);
}


