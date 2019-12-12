package com.service;

import com.dao.OnDutyMapper;
import com.pojo.CityOnDuty;
import com.pojo.OnDuty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class OnDutyService implements OnDutyMapper {

    @Autowired
    OnDutyMapper onDutyMapper;

    @Override
    public int insert(OnDuty onDuty) {
        return onDutyMapper.insert(onDuty);
    }

    @Override
    public List<OnDuty> selelAll() {
        return onDutyMapper.selelAll();
    }

    @Override
    public int insCityOnduty(CityOnDuty cityOnDuty) {
        return onDutyMapper.insCityOnduty(cityOnDuty);
    }

    @Override
    public OnDuty selectNow() {
        return onDutyMapper.selectNow();
    }
}
