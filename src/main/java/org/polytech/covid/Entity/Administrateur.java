package org.polytech.covid.Entity;

import jakarta.persistence.*;

import java.util.List;

@Table
@Entity
public class Administrateur {
    @Id
    private Integer AdministrateurId;
    private String nom;
    private String prenom;


    @ManyToMany(targetEntity = VaccinationCenter.class)
    @JoinTable(
            name = "admin_center",
            joinColumns = @JoinColumn(name = "admin_id"),
            inverseJoinColumns = @JoinColumn(name = "center_id")
    )
    private List<VaccinationCenter> vaccinationCenterList;

    public Administrateur() {
    }
    public Administrateur(Integer administrateurId, String nom, String prenom, List<VaccinationCenter> vaccinationCenterList) {
        AdministrateurId = administrateurId;
        this.nom = nom;
        this.prenom = prenom;
        this.vaccinationCenterList = vaccinationCenterList;
    }


    public void setAdministrateurId(Integer administrateurId) {
        AdministrateurId = administrateurId;
    }

    public List<VaccinationCenter> getVaccinationCenterList() {
        return vaccinationCenterList;
    }

    public void setVaccinationCenterList(List<VaccinationCenter> vaccinationCenterList) {
        this.vaccinationCenterList = vaccinationCenterList;
    }


    public int getAdministrateurId() {
        return AdministrateurId;
    }

    public void setAdministrateurId(int id) {
        this.AdministrateurId = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }
}
