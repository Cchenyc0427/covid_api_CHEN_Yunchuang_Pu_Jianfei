package org.polytech.covid.Controller;

import org.polytech.covid.Entity.VaccinationCenter;
import org.polytech.covid.Service.VaccinationCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class VaccinationCenterController {
    @Autowired
    private VaccinationCenterService centerService;

    @GetMapping(path ="/api/centers")
    public List<VaccinationCenter> get(@RequestParam(name="city",required = false)String city){
        if(city==null){
            return centerService.findAll();
        }
        return centerService.findAllByCityIgnoreCase(city);

    }
    @PostMapping(path = "/api/centers")
    public List<VaccinationCenter> getAll(){
        return centerService.findAll();
    }


}
