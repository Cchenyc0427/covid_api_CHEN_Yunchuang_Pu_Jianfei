package org.polytech.covid.repository;

import org.polytech.covid.Entity.Administrateur;
import org.polytech.covid.Entity.VaccinationCenter;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SuperAdminPourAdministrateurRespository extends JpaRepository<Administrateur,Integer> {
    //Gestion Administrateur
    public List<Administrateur> findAllByVaccinationCenter(VaccinationCenter vaccinationCenter);

    public Administrateur save(Administrateur administrateur);

    public void deleteById(Integer id);

}
