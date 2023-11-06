package org.polytech.covid.Controller;

import org.polytech.covid.Entity.Administrateur;
import org.polytech.covid.Entity.VaccinationCenter;
import org.polytech.covid.Service.SuperAdminAdministrateurService;
import org.polytech.covid.Service.SuperAdminVaccinationCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SuperAdminController {
    @Autowired
    private SuperAdminVaccinationCenterService superAdminVaccinationCenterService;

    @Autowired
    private SuperAdminAdministrateurService superAdminAdministrateurService;

    @GetMapping("api/superAdmin/center")
    public VaccinationCenter getByName(@RequestParam(name="name")String centreName){
        return superAdminVaccinationCenterService.findByName(centreName);
    }
    @DeleteMapping("api/superAdmin/center")
    public void deleteById(@RequestParam(name="id")Integer id){
        superAdminVaccinationCenterService.deleteById(id);
    }
    @PostMapping("api/superAdmin/center")
    public VaccinationCenter addVaccinationCenter(
            @RequestParam(name="vaccinationCenter")VaccinationCenter vaccinationCenter){
        return superAdminVaccinationCenterService.addVaccinationCenter(vaccinationCenter);
    }
    @PutMapping ("api/superAdmin/center")
    public VaccinationCenter updateCenter(
            @RequestParam(name="vaccinationCenter")VaccinationCenter vaccinationCenter){
        return superAdminVaccinationCenterService.updateCenter(vaccinationCenter);
    }

    @GetMapping("api/superAdmin/administrateur")
    public List<Administrateur> findAllByVaccanationCenter(@RequestParam(name="id")VaccinationCenter vaccinationCenter){
        return superAdminAdministrateurService.findAllByVaccanationCenter(vaccinationCenter);
    }

    @PostMapping("api/superAdmin/administrateur")
    public Administrateur addAdministrateur(@RequestParam(name="administrateur") Administrateur administrateur ){
        return superAdminAdministrateurService.addAdministrateur(administrateur);
    }

    @DeleteMapping("api/superAdmin/administrateur")
    public void deleteAdministrateur(@RequestParam(name="administrateur")Integer administrateurId){
        superAdminAdministrateurService.deleteById(administrateurId);

    }
    @PutMapping("api/superAdmin/administrateur")
    public Administrateur updateAdministrateur(@RequestParam(name="administrateur") Administrateur administrateur){
        return superAdminAdministrateurService.updateAdministrateur(administrateur);
    }






}
