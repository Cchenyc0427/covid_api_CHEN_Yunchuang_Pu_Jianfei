package org.polytech.covid.Service;

import org.polytech.covid.Entity.rdv;
import org.polytech.covid.repository.rdvRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class rdvService{
    private final rdvRespository rdvRespository;

    @Autowired
    public rdvService(rdvRespository rdvRespository) {
        this.rdvRespository = rdvRespository;
    }

    public rdv addRDV(rdv rdv){
        return rdvRespository.saveAndFlush(rdv);
    }
    public rdv findByNom(String nom){
        return rdvRespository.findByNomIgnoreCase(nom);
    }
    public List<rdv> findAll(){
        return rdvRespository.findAll();
    }

    public rdv findByRdvTime(Date time){
        return rdvRespository.findByRdvTime(time);
    }

    public void deleteById(Integer id){
        rdvRespository.deleteById(id);
    }

    public rdv updateRdv(rdv rdv){
        return rdvRespository.save(rdv);
    }


}
