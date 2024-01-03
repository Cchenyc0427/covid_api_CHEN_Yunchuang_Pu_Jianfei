package org.polytech.covid.repository;

import org.polytech.covid.Entity.VaccinationCenter;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface VaccinationCenterRespository extends JpaRepository<VaccinationCenter,Integer> {
    public List<VaccinationCenter> findAllByCityContainingIgnoreCase(String name);
    public Optional<VaccinationCenter> findById(Integer id);

    public List<VaccinationCenter> findAll();
 }
