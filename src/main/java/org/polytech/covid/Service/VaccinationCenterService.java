package org.polytech.covid.Service;

import org.polytech.covid.Entity.VaccinationCenter;
import org.polytech.covid.repository.VaccinationCenterRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VaccinationCenterService{

    private final VaccinationCenterRespository vaccinationCenterRespository;

    @Autowired
    public VaccinationCenterService(VaccinationCenterRespository vaccinationCenterRespository) {
        this.vaccinationCenterRespository = vaccinationCenterRespository;
    }
    public List<VaccinationCenter> findAllByCityContainingIgnoreCase(String name) {
        return vaccinationCenterRespository.findAllByCityContainingIgnoreCase(name);
    }

    public List<VaccinationCenter> findAll() {
        return vaccinationCenterRespository.findAll();
    }


}
