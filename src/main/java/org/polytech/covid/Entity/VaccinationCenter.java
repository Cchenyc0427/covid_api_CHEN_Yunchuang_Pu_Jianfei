package org.polytech.covid.Entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Table
@Entity
public class VaccinationCenter {
    @Id
    @GeneratedValue()
    private int id;
    private String name;
    private String adresse;
    private String city;
    @ManyToMany(targetEntity = Administrateur.class,mappedBy = "administrateur")
    private List<Administrateur> administrateur;


    public VaccinationCenter(int id, String name, String adress, String city, Administrateur administrateur, List<Administrateur> administrateur1) {
        this.id = id;
        this.name = name;
        this.adresse = adress;
        this.city = city;
        this.administrateur = new ArrayList<>();
    }

    public VaccinationCenter() {

    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAdress(String adress) {
        this.adresse = adress;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAdress() {
        return adresse;
    }

    public String getCity() {
        return city;
    }
}
