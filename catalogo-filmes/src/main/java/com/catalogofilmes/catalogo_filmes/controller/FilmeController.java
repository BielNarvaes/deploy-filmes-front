package com.catalogofilmes.catalogo_filmes.controller;

import com.catalogofilmes.catalogo_filmes.model.*;
import com.catalogofilmes.catalogo_filmes.repository.FilmeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/filmes")
public class FilmeController {

    @Autowired
    private FilmeRepository filmeRepository;

    @GetMapping
    public List<Filme> getFilmes() {
        return filmeRepository.findAll();
    }

    @PostMapping
    public Filme addFilme(@RequestBody Filme filme) {
        return filmeRepository.save(filme);
    }
}
