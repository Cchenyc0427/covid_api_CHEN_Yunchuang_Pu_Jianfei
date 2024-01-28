package org.polytech.covid.Service;

import org.polytech.covid.Entity.Administrateur;
import org.polytech.covid.Entity.Medicin;
import org.polytech.covid.repository.SuperAdminPourAdministrateurRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SuperAdminAdministrateurService {
    private final SuperAdminPourAdministrateurRespository superAdminPourAdministrateurRespository;

    @Autowired
    public SuperAdminAdministrateurService( SuperAdminPourAdministrateurRespository superAdminPourAdministrateurRespository){
        this.superAdminPourAdministrateurRespository = superAdminPourAdministrateurRespository;
    }

    public ResponseEntity addAdministrateur(Administrateur administrateur){
        String mail = administrateur.getMail();
        if(findByMail(mail) == null){
            Administrateur savedAdministrateur = superAdminPourAdministrateurRespository.save(administrateur);
            return ResponseEntity.ok(savedAdministrateur);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email already exists");
        }
    }
    public Administrateur findByMail(String mail){
        return superAdminPourAdministrateurRespository.findAdministrateurByMail(mail);
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
        return superAdminPourAdministrateurRespository.save(administrateur);
    }
}
