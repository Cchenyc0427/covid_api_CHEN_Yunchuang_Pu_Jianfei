package org.polytech.covid.Entity;

import jakarta.persistence.*;

@Table
@Entity
public class Administrateur {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "administrateur_id")
    @SequenceGenerator(name = "administrateur_id", sequenceName = "administrateur_id_seq",allocationSize = 1)
    private Integer AdministrateurId;
    private String nom;
    private String prenom;
    @OneToOne(targetEntity = VaccinationCenter.class)
    private VaccinationCenter vaccinationCenter;


    public Administrateur() {
    }



    public void setAdministrateurId(Integer administrateurId) {
        AdministrateurId = administrateurId;
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
