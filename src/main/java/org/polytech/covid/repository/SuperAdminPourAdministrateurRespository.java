package org.polytech.covid.repository;

import org.polytech.covid.Entity.Administrateur;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SuperAdminPourAdministrateurRespository extends JpaRepository<Administrateur,Integer> {
    //Gestion Administrateur
    public List<Administrateur> findAll();

    public Administrateur findByAdministrateurId(Integer id);

    public Administrateur save(Administrateur administrateur);

    public void deleteByAdministrateurId(Integer id);
    public Administrateur findAdministrateurByMail(String mail);

}
