package org.polytech.covid.Controller;

import jakarta.transaction.Transactional;
import org.polytech.covid.Entity.rdv;
import org.polytech.covid.Service.VaccinationCenterService;
import org.polytech.covid.Service.rdvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
public class rdvController {
    @Autowired
    private rdvService rdvService;

    @Autowired
    private VaccinationCenterService VaccinationCenterService;

    @GetMapping("api/rdv/name")
    public rdv getByName(@RequestParam(name = "name")String patientName){
        if(rdvService.findByNom(patientName)==null){
            System.out.println("Il n'y a pas ce rdv");
        }
        return rdvService.findByNom(patientName);
    }
    @GetMapping("api/rdv/time")
    public rdv getByRdvTime(@RequestParam(name = "time") Date time){
        return rdvService.findByRdvTime(time);
    }

    @GetMapping("api/rdv/all")
    public List<rdv> findAll(){
        return rdvService.findAll();
    }


    @PostMapping("api/rdv")
    public rdv addRdv(@RequestBody rdv rdv){
        return rdvService.addRDV(rdv);
    }
    @DeleteMapping("api/rdv")
    @Transactional
    public void deleteRdv(@RequestParam(name="id")Integer rdvId){
        rdvService.deleteById(rdvId);
    }
    @PutMapping("api/rdv")
    public rdv updateRdv(@RequestBody rdv rdv ){
        return rdvService.updateRdv(rdv);
    }
}
