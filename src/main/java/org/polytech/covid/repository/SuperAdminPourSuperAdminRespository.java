package org.polytech.covid.repository;

import org.polytech.covid.Entity.SuperAdmin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SuperAdminPourSuperAdminRespository extends JpaRepository<SuperAdmin,Integer> {
    public Optional<SuperAdmin> findSuperAdminByMail(String mail);
}
