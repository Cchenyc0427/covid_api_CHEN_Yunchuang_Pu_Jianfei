package org.polytech.covid.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "medicin")
@Entity(name = "medicin")
public class Medicin {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "medicin_id")
    @SequenceGenerator(name = "medicin_id", sequenceName = "medicin_id_seq",allocationSize = 1)
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



}
