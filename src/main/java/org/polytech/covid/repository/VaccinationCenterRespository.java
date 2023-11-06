package org.polytech.covid.repository;

import org.polytech.covid.Entity.VaccinationCenter;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface VaccinationCenterRespository extends JpaRepository<VaccinationCenter,Integer> {
    public List<VaccinationCenter> findAllByCityIgnoreCase(String name);

    public List<VaccinationCenter> findAll();
 }
