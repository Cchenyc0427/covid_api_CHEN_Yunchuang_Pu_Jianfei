package org.polytech.covid.Service;

import org.polytech.covid.Entity.rdv;
import org.polytech.covid.repository.rdvRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

}
