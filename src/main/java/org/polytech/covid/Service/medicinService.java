package org.polytech.covid.Service;

import jakarta.transaction.Transactional;
import org.polytech.covid.Entity.Medicin;
import org.polytech.covid.repository.medicinRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class medicinService {
    private final medicinRespository medicinRespository;
    @Autowired
    public medicinService(org.polytech.covid.repository.medicinRespository medicinRespository) {
        this.medicinRespository = medicinRespository;
    }

    public Optional<Medicin> findById(Integer id){
        return medicinRespository.findById(id);
    }

    public List<Medicin> findAll(){
        return medicinRespository.findAll();
    }
    @Transactional
    public ResponseEntity addMedicin(Medicin medicin){
            String mail = medicin.getMail();
            if(findByMail(mail) == null){
                Medicin savedMedicin = medicinRespository.save(medicin);
                return ResponseEntity.ok(savedMedicin);
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email already exists");
            }
    }

    public Medicin findByMail(String mail){
        return medicinRespository.findMedicinByMail(mail);
    }
    public void deleteMedicinById(Integer id){
        medicinRespository.deleteById(id);
    }
    public Medicin updateMedicin(Medicin medicin){
        return medicinRespository.saveAndFlush(medicin);
    }

    public Medicin findMedicinByMail(String mail){
        return medicinRespository.findMedicinByMail(mail);
    }





}
