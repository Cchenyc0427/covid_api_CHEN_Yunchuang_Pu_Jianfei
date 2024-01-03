package org.polytech.covid.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "vaccinationCenter")
@Entity(name = "vaccinationCenter")
public class VaccinationCenter {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "center_id")
    @SequenceGenerator(name = "center_id", sequenceName = "vaccination_center_id_seq",allocationSize = 1)
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "adresse")
    private String adresse;
    @Column(name = "city")
    private String city;
    @ManyToMany(targetEntity = SuperAdmin.class,mappedBy = "vaccinationCenterList")
    private List<SuperAdmin> superAdminList;

    @OneToMany(mappedBy = "vaccinationCenter", cascade = CascadeType.ALL)
    private List<rdv> rdvList = new ArrayList<>();



}
