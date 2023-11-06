package org.polytech.covid.repository;

import org.polytech.covid.Entity.VaccinationCenter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SuperAdminPourVacinationCenterRespository extends JpaRepository<VaccinationCenter,Integer> {

    public void deleteById(Integer id);

    public VaccinationCenter findByName(String name);


}
