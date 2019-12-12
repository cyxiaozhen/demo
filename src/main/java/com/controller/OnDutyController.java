package com.controller;


import com.pojo.CityOnDuty;
import com.pojo.OnDuty;
import com.service.OnDutyService;
import org.apache.commons.lang3.time.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("onDuty")
public class OnDutyController {

    @Autowired
    OnDutyService onDutyService;

    @PostMapping("/insOnDuty")
    public int insOnDuty(@RequestBody OnDuty onDuty){
        try{
            Calendar c = new GregorianCalendar(1900, 0, -1);
            Date d = c.getTime();
            Integer param = onDuty.getDay();
            onDuty.setDate(DateUtils.addDays(d, param));
            return onDutyService.insert(onDuty);
        }
        catch (Exception e){
            return 0;
        }
    }

    @GetMapping("/selectAllOnDuty")
    public List<OnDuty> selectAll(){
        try{
            return onDutyService.selelAll();
        }
        catch (Exception e){
            return null;
        }
    }

    @GetMapping("/selectNow")
    public OnDuty selectNow(){
        try{
            return onDutyService.selectNow();
        }
        catch (Exception e){
            return null;
        }
    }

    @PostMapping("/insCityOnDuty")
    public int cityOnDuty(@RequestBody CityOnDuty cityOnDuty){
        try{
            Calendar c = new GregorianCalendar(1900, 0, -1);
            Date d = c.getTime();
            Integer param = cityOnDuty.getDay();
            cityOnDuty.setDate(DateUtils.addDays(d, param));
            return onDutyService.insCityOnduty(cityOnDuty);
        }
        catch (Exception e){
            return 0;
        }
    }
}
