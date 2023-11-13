package org.polytech.covid.Controller;

import org.polytech.covid.Entity.Medicin;
import org.polytech.covid.Service.medicinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
}
