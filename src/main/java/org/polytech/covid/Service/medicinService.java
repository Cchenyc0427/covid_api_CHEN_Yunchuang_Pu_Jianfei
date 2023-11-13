package org.polytech.covid.Service;

import org.polytech.covid.Entity.Medicin;
import org.polytech.covid.repository.medicinRespository;
import org.springframework.beans.factory.annotation.Autowired;
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

    public Medicin addMedicin(Medicin medicin){
        return medicinRespository.save(medicin);
    }
    public void deleteMedicinById(Integer id){
        medicinRespository.deleteById(id);
    }
    public Medicin updateMedicin(Medicin medicin){
        return medicinRespository.saveAndFlush(medicin);
    }





}
