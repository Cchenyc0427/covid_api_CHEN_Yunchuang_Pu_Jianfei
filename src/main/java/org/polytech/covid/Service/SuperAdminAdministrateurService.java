package org.polytech.covid.Service;

import org.polytech.covid.Entity.Administrateur;
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
    public Administrateur findAdministrateurByMail(String mail){
        return superAdminPourAdministrateurRespository.findAdministrateurByMail(mail);
    }

    public Administrateur findAdministrateurById(Integer id){
        return superAdminPourAdministrateurRespository.findByAdministrateurId(id);
    }
    public List<Administrateur> findAllAdministrateur(){
        return superAdminPourAdministrateurRespository.findAll();
    }
    public void deleteById(Integer administrateurId){
       superAdminPourAdministrateurRespository.deleteByAdministrateurId(administrateurId);
    }
    public Administrateur updateAdministrateur(Administrateur administrateur){
        return superAdminPourAdministrateurRespository.saveAndFlush(administrateur);
    }
}
