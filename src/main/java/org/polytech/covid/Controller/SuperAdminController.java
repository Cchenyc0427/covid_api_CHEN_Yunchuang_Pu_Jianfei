package org.polytech.covid.Controller;

import jakarta.transaction.Transactional;
import org.polytech.covid.Entity.Administrateur;
import org.polytech.covid.Entity.SuperAdmin;
import org.polytech.covid.Entity.VaccinationCenter;
import org.polytech.covid.Service.SuperAdminAdministrateurService;
import org.polytech.covid.Service.SuperAdminService;
import org.polytech.covid.Service.SuperAdminVaccinationCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@RestController
public class SuperAdminController {
    @Autowired
    private SuperAdminVaccinationCenterService superAdminVaccinationCenterService;

    @Autowired
    private SuperAdminAdministrateurService superAdminAdministrateurService;

    @Autowired
    private SuperAdminService superAdminService;

    @GetMapping("api/superAdmin/center/name")
    public VaccinationCenter getByName(@RequestParam(name="name")String centreName){
        if(superAdminVaccinationCenterService.findByNameIgnoreCase(centreName)==null){
            System.out.println("Il n'y a pas ce center");

        }
            return superAdminVaccinationCenterService.findByNameIgnoreCase(centreName);
    }
    @GetMapping("api/superAdmin/center")
    public List<VaccinationCenter> getAll(){
        return superAdminVaccinationCenterService.findAll();
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
    public ResponseEntity addAdministrateur(@RequestBody Administrateur administrateur ){
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
    @GetMapping("api/superAdmin/login")
    public Boolean loginSuperAdmin(@RequestParam(name = "mail")String mail,@RequestParam(name = "password") String password){
        Optional<SuperAdmin> superAdminOptional = superAdminService.findSuperAdminByMail(mail);
        SuperAdmin superAdmin = superAdminOptional.orElse(null);
        if(superAdmin==null){
            return false;
        } else if (!superAdmin.getPassword().equals(password)) {
            return false;
        }else{
            return true;
        }

    }
    @GetMapping("api/admin/login")
    public Boolean loginAdmin(@RequestParam(name = "mail")String mail,@RequestParam(name = "password")String password){
        Administrateur administrateur = superAdminAdministrateurService.findAdministrateurByMail(mail);
        if(administrateur==null){
            return false;
        }else if(!administrateur.getPassword().equals(password)){
            return false;
        }else{
            return true;
        }
    }





}
