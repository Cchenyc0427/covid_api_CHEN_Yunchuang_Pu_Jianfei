package org.polytech.covid.Entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;
@Table
@Entity
public class Medicin {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "medicin_id")
    @SequenceGenerator(name = "medicin_id", sequenceName = "medicin_id_seq",allocationSize = 1)
    private int id;
    private String nom;
    private String prenom;
    private String mail;
    private String telephone;

    private String password;

    @OneToMany(mappedBy = "medicin", cascade = CascadeType.ALL)
    private List<rdv> rdvList = new ArrayList<>();


    public Medicin(int id, String nom, String prenom, String mail, String telephone, String password, List<rdv> rdvList) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.mail = mail;
        this.telephone = telephone;
        this.password = password;
        this.rdvList = rdvList;
    }

    public Medicin() {

    }

    public List<rdv> getRdvList() {
        return rdvList;
    }

    public void setRdvList(List<rdv> rdvList) {
        this.rdvList = rdvList;
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
}
