package org.polytech.covid.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.Date;

@Table
@Entity
public class rdv {
    @Id
    @GeneratedValue()
    private int id;
    private String nom;
    private String prenom;
    private String mail;
    private String telephone;
    private Date rdvTime;

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