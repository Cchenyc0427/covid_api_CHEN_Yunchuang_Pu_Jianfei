package org.polytech.covid.Entity;

import jakarta.persistence.*;

import java.util.List;

@Table
@Entity(name = "vaccination_center")
public class VaccinationCenter {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "center_id")
    @SequenceGenerator(name = "center_id", sequenceName = "vaccination_center_id_seq",allocationSize = 1)
    private int id;
    private String name;
    private String adresse;
    private String city;
    @ManyToMany(targetEntity = SuperAdmin.class,mappedBy = "vaccinationCenterList")
    private List<SuperAdmin> superAdminList;


    public VaccinationCenter(int id, String name, String adresse, String city, List<SuperAdmin> superAdminList) {
        this.id = id;
        this.name = name;
        this.adresse = adresse;
        this.city = city;
        this.superAdminList = superAdminList;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public List<SuperAdmin> getSuperAdminList() {
        return superAdminList;
    }

    public void setSuperAdminList(List<SuperAdmin> superAdminList) {
        this.superAdminList = superAdminList;
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
