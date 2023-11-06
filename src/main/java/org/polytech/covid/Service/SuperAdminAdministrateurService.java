package org.polytech.covid.Service;

import org.polytech.covid.Entity.Administrateur;
import org.polytech.covid.Entity.VaccinationCenter;
import org.polytech.covid.repository.SuperAdminPourAdministrateurRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SuperAdminAdministrateurService {
    private final SuperAdminPourAdministrateurRespository superAdminPourAdministrateurRespository;

    @Autowired
    public SuperAdminAdministrateurService( SuperAdminPourAdministrateurRespository superAdminPourAdministrateurRespository){
        this.superAdminPourAdministrateurRespository = superAdminPourAdministrateurRespository;
    }

    public Administrateur addAdministrateur(Administrateur administrateur){
        return superAdminPourAdministrateurRespository.save(administrateur);
    }

    public List<Administrateur> findAllByVaccanationCenter(VaccinationCenter vaccinationCenter){
        return superAdminPourAdministrateurRespository.findAllByVaccinationCenter(vaccinationCenter);
    }

    public void deleteById(Integer administrateurId){
       superAdminPourAdministrateurRespository.deleteById(administrateurId);
    }
    public Administrateur updateAdministrateur(Administrateur administrateur){
        return superAdminPourAdministrateurRespository.save(administrateur);
    }
}
