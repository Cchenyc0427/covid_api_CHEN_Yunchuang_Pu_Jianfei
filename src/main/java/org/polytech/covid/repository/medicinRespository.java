package org.polytech.covid.repository;

import org.polytech.covid.Entity.Medicin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface medicinRespository extends JpaRepository<Medicin,Integer> {
    public Optional<Medicin> findById(Integer id);
    public Medicin findMedicinByMail(String mail);

}
