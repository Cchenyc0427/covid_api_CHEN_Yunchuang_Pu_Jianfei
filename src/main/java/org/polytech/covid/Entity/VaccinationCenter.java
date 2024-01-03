package org.polytech.covid.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;


@Table(name = "vaccinationCenter")
@Entity(name = "vaccinationCenter")
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

    @OneToMany(mappedBy = "vaccinationCenter", cascade = CascadeType.ALL)
    private List<rdv> rdvList = new ArrayList<>();

    public VaccinationCenter() {
    }

    public VaccinationCenter(int id, String name, String adresse, String city, List<SuperAdmin> superAdminList, List<rdv> rdvList) {
        this.id = id;
        this.name = name;
        this.adresse = adresse;
        this.city = city;
        this.superAdminList = superAdminList;
        this.rdvList = rdvList;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public List<SuperAdmin> getSuperAdminList() {
        return superAdminList;
    }

    public void setSuperAdminList(List<SuperAdmin> superAdminList) {
        this.superAdminList = superAdminList;
    }

    public List<rdv> getRdvList() {
        return rdvList;
    }

    public void setRdvList(List<rdv> rdvList) {
        this.rdvList = rdvList;
    }
}
