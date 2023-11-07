package org.polytech.covid.Entity;

import jakarta.persistence.*;

import java.util.Date;

@Table
@Entity
public class rdv {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "rdv_id")
    @SequenceGenerator(name = "rdv_id", sequenceName = "rdv_id_seq",allocationSize = 1)
    private int id;
    private String nom;
    private String prenom;

    private String mail;
    private String telephone;
    private Date rdvTime;
    public rdv() {
    }

    public rdv(int id, String nom, String prenom, String mail, String telephone, Date rdvTime) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.mail = mail;
        this.telephone = telephone;
        this.rdvTime = rdvTime;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public Date getRdvTime() {
        return rdvTime;
    }

    public void setRdvTime(Date rdvTime) {
        this.rdvTime = rdvTime;
    }
}
