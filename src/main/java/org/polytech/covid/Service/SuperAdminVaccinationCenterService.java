package org.polytech.covid.Service;

import org.polytech.covid.Entity.VaccinationCenter;
import org.polytech.covid.repository.SuperAdminPourVacinationCenterRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SuperAdminVaccinationCenterService {

    private final SuperAdminPourVacinationCenterRespository superAdminPourVacinationCenterRespository;

    @Autowired
    public SuperAdminVaccinationCenterService(SuperAdminPourVacinationCenterRespository superAdminPourVacinationCenterRespository){
        this.superAdminPourVacinationCenterRespository = superAdminPourVacinationCenterRespository;
    }

    public VaccinationCenter findByName(String cityName){
        return superAdminPourVacinationCenterRespository.findByName(cityName);
    }
    public VaccinationCenter addVaccinationCenter(VaccinationCenter center){
        return superAdminPourVacinationCenterRespository.saveAndFlush(center);
    }
    public VaccinationCenter updateCenter(VaccinationCenter center){
        return superAdminPourVacinationCenterRespository.save(center);
    }
    public void deleteById(Integer id){
        superAdminPourVacinationCenterRespository.deleteById(id);
    }








}
