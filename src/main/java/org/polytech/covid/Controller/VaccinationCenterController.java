package org.polytech.covid.Controller;

import org.polytech.covid.Entity.Administrateur;
import org.polytech.covid.Entity.VaccinationCenter;
import org.polytech.covid.Service.VaccinationCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class VaccinationCenterController {
    @Autowired
    private VaccinationCenterService centerService;

    @GetMapping(path ="/api/centers")
    public List<VaccinationCenter> get(@RequestParam(name="city",required = false)String city){
        return centerService.findAllByCityContainingIgnoreCase(city);

    }
    @GetMapping(path = "/api/centers/getAll")
    public List<VaccinationCenter> getAll(){
        return centerService.findAll();
    }
    @GetMapping(path = "api/centers/id")
    public Optional<VaccinationCenter> getById(@RequestParam(name="id",required = false)Integer id){
        return centerService.findById(id);
    }



}
