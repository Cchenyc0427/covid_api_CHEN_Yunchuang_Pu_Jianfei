package org.polytech.covid.DTO;

public class VaccinationCenterDTO {
    private int id;
    private String name;
    private String adresse;
    private String city;

    public VaccinationCenterDTO() {
    }

    public VaccinationCenterDTO(int id, String name, String adresse, String city) {
        this.id = id;
        this.name = name;
        this.adresse = adresse;
        this.city = city;
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
}
