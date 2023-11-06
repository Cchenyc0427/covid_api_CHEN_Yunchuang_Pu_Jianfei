package org.polytech.covid.Entity;

import jakarta.persistence.*;

import java.util.List;

@Table
@Entity
public class SuperAdmin {
    @Id
    @GeneratedValue()
    private int id;
    private String nom;
    private String prenom;
    private String mail;
    private String telephone;

    private String password;

    @OneToMany(targetEntity = VaccinationCenter.class)
    List<VaccinationCenter> vaccinationCenterList;

    public List<VaccinationCenter> getVaccinationCenterList() {
        return vaccinationCenterList;
    }

    public void setVaccinationCenterList(List<VaccinationCenter> vaccinationCenterList) {
        this.vaccinationCenterList = vaccinationCenterList;
    }
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public SuperAdmin(int id, String nom, String prenom, String mail, String telephone, String password, List<VaccinationCenter> vaccinationCenterList) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.mail = mail;
        this.telephone = telephone;
        this.password = password;
        this.vaccinationCenterList = vaccinationCenterList;
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


    public SuperAdmin(int id, String nom, String prenom, String mail, String telephone, List<VaccinationCenter> vaccinationCenterList) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.mail = mail;
        this.telephone = telephone;
        this.vaccinationCenterList = vaccinationCenterList;
    }

    public SuperAdmin() {
    }
}
