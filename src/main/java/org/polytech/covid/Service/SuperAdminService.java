package org.polytech.covid.Service;

import org.polytech.covid.Entity.SuperAdmin;
import org.polytech.covid.repository.SuperAdminPourAdministrateurRespository;
import org.polytech.covid.repository.SuperAdminPourSuperAdminRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SuperAdminService {
    private final SuperAdminPourSuperAdminRespository superAdminPourSuperAdminRespository;

    @Autowired
    public SuperAdminService( SuperAdminPourSuperAdminRespository superAdminPourSuperAdminRespository){
        this.superAdminPourSuperAdminRespository = superAdminPourSuperAdminRespository;
    }
    public Optional<SuperAdmin> findSuperAdminByMail(String mail){
        return superAdminPourSuperAdminRespository.findSuperAdminByMail(mail);
    }

}
