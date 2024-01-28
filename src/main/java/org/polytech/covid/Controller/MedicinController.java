package org.polytech.covid.Controller;

import org.polytech.covid.Entity.Medicin;
import org.polytech.covid.Entity.rdv;
import org.polytech.covid.Service.medicinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class MedicinController {
    @Autowired
    private medicinService medicinService;

    @GetMapping("api/medicin/id")
    public Optional<Medicin> findById(@RequestParam(name = "id")Integer id){
        if(medicinService.findById(id)==null){
            System.out.println("Il n'y a pas ce medicin");
        }
        return medicinService.findById(id);
    }
    @GetMapping("api/medicin/findAll")
    public List<Medicin> findAll(){
        return medicinService.findAll();
    }

    @GetMapping("api/medicin/login")
    public Boolean medicinLogin(@RequestParam(name = "mail")String mail,@RequestParam(name = "password") String password ){
        Medicin medicin = medicinService.findMedicinByMail(mail);
        if(medicin ==null ){
            return false;
        }else if(!medicin.getPassword().equals(password)){
            return false;
        }else{
            return true;
        }
    }

    @PutMapping("api/medicin")
    public Medicin updateMedcin(@RequestBody Medicin medicin ){

        return medicinService.updateMedicin(medicin);
    }

    @DeleteMapping("api/medicin")
    public void deleteMedin(@RequestParam(name = "id")Integer id){
        medicinService.deleteMedicinById(id);
    }

    @PostMapping("api/medicin")
    public ResponseEntity addMedicin(@RequestBody Medicin medicin){
        return medicinService.addMedicin(medicin);
    }
}
