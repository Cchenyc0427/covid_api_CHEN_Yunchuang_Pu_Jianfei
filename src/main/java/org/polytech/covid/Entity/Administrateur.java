package org.polytech.covid.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "administrateur")
@Entity(name = "administrateur")
public class Administrateur {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "administrateur_id")
    @SequenceGenerator(name = "administrateur_id", sequenceName = "administrateur_id_seq",allocationSize = 1)
    private Integer administrateurId;
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
