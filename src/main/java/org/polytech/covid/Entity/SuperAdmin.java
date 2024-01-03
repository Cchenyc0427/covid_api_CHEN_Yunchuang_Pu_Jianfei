package org.polytech.covid.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "superAdmin")
@Entity(name = "superAdmin")
public class SuperAdmin {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "super_admin_id")
    @SequenceGenerator(name = "super_admin_id", sequenceName = "super_admin_id_seq",allocationSize = 1)
    private int id;
    @Column(name = "nom")
    private String nom;
    @Column(name = "prenom")
    private String prenom;
    @Column(name = "mail")
    private String mail;
    @Column(name = "telephone")
    private String telephone;
    @Column(name = "password")
    private String password;

    @ManyToMany(targetEntity = VaccinationCenter.class)
    @JoinTable(
            name = "admin_center",
            joinColumns = @JoinColumn(name = "admin_id"),
            inverseJoinColumns = @JoinColumn(name = "center_id")
    )
    private List<VaccinationCenter> vaccinationCenterList;


}
