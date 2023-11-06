package org.polytech.covid.Controller;

import jakarta.transaction.Transactional;
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
            @RequestBody VaccinationCenter vaccinationCenter){
        return superAdminVaccinationCenterService.addVaccinationCenter(vaccinationCenter);
    }
    @PutMapping ("api/superAdmin/center")
    public VaccinationCenter updateCenter(
            @RequestBody VaccinationCenter vaccinationCenter){
        return superAdminVaccinationCenterService.updateCenter(vaccinationCenter);
    }

    @PostMapping("api/superAdmin/administrateur")
    public Administrateur addAdministrateur(@RequestBody Administrateur administrateur ){
        return superAdminAdministrateurService.addAdministrateur(administrateur);
    }

    @DeleteMapping("api/superAdmin/administrateur")
    @Transactional
    public void deleteAdministrateur(@RequestParam(name="id")Integer administrateurId){
        superAdminAdministrateurService.deleteById(administrateurId);

    }
    @GetMapping("api/superAdmin/administrateur")
    public List<Administrateur> findAllAdministrateur(){
        return superAdminAdministrateurService.findAllAdministrateur();
    }

    @GetMapping("api/superAdmin/administrateur/id")
    public Administrateur findAdministrateurById(@RequestParam(name="id")Integer id){
        if(superAdminAdministrateurService.findAdministrateurById(id)==null){
            System.out.println("Il n'y a pas ce administrateur");
            return null;
        }
        return superAdminAdministrateurService.findAdministrateurById(id);
    }
    @PutMapping("api/superAdmin/administrateur")
    public Administrateur updateAdministrateur(@RequestBody Administrateur administrateur){
        return superAdminAdministrateurService.updateAdministrateur(administrateur);
    }






}
