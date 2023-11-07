package org.polytech.covid.Service;

import org.polytech.covid.repository.medicinRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class medicinService {
    private final medicinRespository medicinRespository;
    @Autowired
    public medicinService(org.polytech.covid.repository.medicinRespository medicinRespository) {
        this.medicinRespository = medicinRespository;
    }

}
