package org.polytech.covid.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "rdv")
@Entity(name = "rdv")
public class rdv {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "rdv_id")
    @SequenceGenerator(name = "rdv_id", sequenceName = "rdv_id_seq",allocationSize = 1)
    private int id;
    @Column(name = "nom")
    private String nom;
    @Column(name = "prenom")
    private String prenom;
    @Column(name = "mail")
    private String mail;
    @Column(name = "telephone")
    private String telephone;
    @Column(name = "rdvTime")
    private Date rdvTime;

    @ManyToOne
    @JoinColumn(name="vaccination_center_id")
    private VaccinationCenter vaccinationCenter;



}
