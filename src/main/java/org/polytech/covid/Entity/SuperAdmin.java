package org.polytech.covid.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;



@Table(name = "superAdmin")
@Entity(name = "superAdmin")
public class SuperAdmin {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "super_admin_id")
    @SequenceGenerator(name = "super_admin_id", sequenceName = "super_admin_id_seq",allocationSize = 1)
    private int id;

    private String nom;

    private String prenom;

    private String mail;

    private String telephone;

    private String password;

    @ManyToMany(targetEntity = VaccinationCenter.class)
    @JoinTable(
            name = "admin_center",
            joinColumns = @JoinColumn(name = "admin_id"),
            inverseJoinColumns = @JoinColumn(name = "center_id")
    )
    private List<VaccinationCenter> vaccinationCenterList;

    public SuperAdmin() {
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<VaccinationCenter> getVaccinationCenterList() {
        return vaccinationCenterList;
    }

    public void setVaccinationCenterList(List<VaccinationCenter> vaccinationCenterList) {
        this.vaccinationCenterList = vaccinationCenterList;
    }
}
