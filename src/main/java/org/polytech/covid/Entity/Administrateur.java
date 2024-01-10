package org.polytech.covid.Entity;

import jakarta.persistence.*;

@Table
@Entity
public class Administrateur {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "administrateur_id")
    @SequenceGenerator(name = "administrateur_id", sequenceName = "administrateur_administrateur_id_seq",allocationSize = 1)
    private Integer administrateurId;
    private String nom;
    private String prenom;

    private String mail;
    private String telephone;
    private String password;

    public Administrateur(Integer administrateurId, String nom, String prenom, String mail, String telephone, String password) {
        this.administrateurId = administrateurId;
        this.nom = nom;
        this.prenom = prenom;
        this.mail = mail;
        this.telephone = telephone;
        this.password = password;
    }

    public Administrateur() {
    }


    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public void setAdministrateurId(Integer administrateurId) {
        administrateurId = administrateurId;
    }




    public int getAdministrateurId() {
        return administrateurId;
    }

    public void setAdministrateurId(int id) {
        this.administrateurId = id;
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
