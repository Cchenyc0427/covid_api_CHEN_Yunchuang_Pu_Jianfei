package org.polytech.covid.repository;

import org.polytech.covid.Entity.rdv;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;

public interface rdvRespository extends JpaRepository<rdv,Integer> {
    public rdv findByNomIgnoreCase(String nom);

    public rdv findByRdvTime(Date Time);

    public void deleteById(Integer id);

}
